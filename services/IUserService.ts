import { LoginDto, SignUpDto } from "@/viewmodels/dtos/client/User/AuthDto";
import { UpdateUserDto, UserViewDto } from "@/viewmodels/dtos/client/User/UserDto";

export interface IUserService {
    Login(dto: LoginDto): Promise<UserViewDto | null>;

    SignUp(dto: SignUpDto): Promise<boolean>;

    ForgetPass(email: string): Promise<boolean>;

    GetUserInfo(uid: string): Promise<UserViewDto | null>;

    UpdateUserInfo(dto: UpdateUserDto): Promise<boolean>;
}

