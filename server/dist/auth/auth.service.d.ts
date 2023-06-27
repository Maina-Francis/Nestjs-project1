import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { SignUpDTO } from './dto/signup.dto';
import { LogInDTO } from './dto/login.dto';
import { UserDocument } from './schemas/auth.user.schema';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    signUp(signUpDTO: SignUpDTO): Promise<{
        token: string;
    }>;
    login(loginDto: LogInDTO): Promise<{
        token: string;
    }>;
}
