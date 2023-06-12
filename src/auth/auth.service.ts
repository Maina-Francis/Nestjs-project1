import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/auth.user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDTO } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  //   User Signup service
  async signUp(signUpDTO: SignUpDTO): Promise<{ token: string }> {
    const { firstName, lastName, email, password } = signUpDTO;

    //hash password before saving to database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save User to database
    const user = await this.userModel.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // assign jwt token to user
    const token = this.jwtService.sign({
      // payload
      id: user._id,
      firsName: firstName,
      lastName: lastName,
      email: email,
    });

    return { token };
  }
}
