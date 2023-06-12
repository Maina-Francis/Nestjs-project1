import { User } from './schemas/auth.user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { SignUpDTO } from './dto/signup.dto';
import { LogInDTO } from './dto/login.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    signUp(signUpDTO: SignUpDTO): Promise<{
        token: string;
    }>;
    login(loginDto: LogInDTO): Promise<{
        token: string;
    }>;
}
