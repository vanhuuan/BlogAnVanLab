import { LoginDto, SignUpDto } from "@/viewmodels/dtos/client/AuthDto";
import { UserViewDto } from "@/viewmodels/dtos/client/UserDto";

export interface IUserService {
    Login(dto: LoginDto): Promise<UserViewDto>;

    SignUp(dto: SignUpDto): Promise<boolean>;

    ForgetPass(email: string): Promise<boolean>;
}