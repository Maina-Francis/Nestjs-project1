import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/auth.user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDTO } from './dto/signup.dto';
import { LogInDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  //   User Signup service
  async signUp(signUpDTO: SignUpDTO): Promise<{ token: string }> {
    // console.log(signUpDTO);
    const { firstName, lastName, userName, email, password } = signUpDTO;

    //hash password before saving to database
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await this.userModel.findOne({ email });

    if (existingUser) {
      return { token: 'User already exists' };
    }

    // Save User to database
    const user = await this.userModel.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
    });

    // assign jwt token to user
    const token = this.jwtService.sign({
      // payload
      id: user._id,
      firsName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
    });

    return { token };
  }

  //   User Login service
  async login(loginDto: LogInDTO) {
    // console.log(loginDto);

    const { email, userName, password } = loginDto;

    // find user by email or userName
    const user = await this.userModel.findOne({
      $or: [{ email }, { userName }],
    });

    // console.log(`User: ${user}`);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // const { firstName, lastName, email, _id } = user;
    // assign jwt token to user
    const token = this.jwtService.sign({
      // payload
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      // userName: userName,
      email: user.email,
    });

    return { token };
  }
}
