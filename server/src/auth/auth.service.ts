import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDTO } from './dto/signup.dto';
import { LogInDTO } from './dto/login.dto';
import { User, UserDocument } from './schemas/auth.user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDTO: SignUpDTO): Promise<{ token: string }> {
    const { firstName, lastName, userName, email, password } = signUpDTO;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await this.userModel.findOne({ email });

    if (existingUser) {
      return { token: 'User already exists' };
    }

    const user = await this.userModel.create({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });

    return { token };
  }

  async login(loginDto: LogInDTO) {
    const { email, userName, password } = loginDto;

    const user = await this.userModel.findOne({
      $or: [{ email }, { userName }],
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });

    return { token };
  }
}
