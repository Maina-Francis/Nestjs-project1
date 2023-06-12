import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/signup.dto';
import { LogInDTO } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(signUpDto: SignUpDTO): Promise<{
        token: string;
    }>;
    login(loginDto: LogInDTO): Promise<{
        token: string;
    }>;
}
