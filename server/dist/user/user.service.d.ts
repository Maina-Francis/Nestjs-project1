import * as mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: mongoose.Model<User>);
}
