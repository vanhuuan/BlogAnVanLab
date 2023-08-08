import { LoginDto, SignUpDto } from "@/viewmodels/dtos/client/AuthDto";
import { UserViewDto } from "@/viewmodels/dtos/client/UserDto";
import { IUserService } from "../IUserService";
import { User } from "@/models/User";
import { inject } from "inversify";
import { TYPES } from "@/types";
import type { IRepository } from "@/repositories/interfaces/IRepository";

export class UserService implements IUserService{

    private readonly userRepository: IRepository<User>;

    constructor(@inject(TYPES.UserRepository) userRepository: IRepository<User>) {
        this.userRepository = userRepository;
    }

    Login(dto: LoginDto): Promise<UserViewDto> {
        throw new Error("Method not implemented.");
    }
    SignUp(dto: SignUpDto): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    ForgetPass(email: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}