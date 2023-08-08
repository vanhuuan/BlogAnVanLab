import { LoginDto, SignUpDto } from "@/viewmodels/dtos/client/AuthDto";
import { UserViewDto } from "@/viewmodels/dtos/client/UserDto";
import { IUserService } from "../IUserService";
import { User } from "@/models/User";
import { inject } from "inversify";
import { REPOSITORIES_TYPES } from "@/types";
import type { IRepository } from "@/repositories/interfaces/IRepository";
import { Account } from "@/models/Account";
import { Role } from "@/models/Role";

export class UserService implements IUserService {
    private readonly userRepository: IRepository<User>;

    private readonly accountRepository: IRepository<Account>;

    private readonly roleRepository: IRepository<Role>;

    constructor(
        @inject(REPOSITORIES_TYPES.UserRepository)
        userRepository: IRepository<User>,
        @inject(REPOSITORIES_TYPES.AccountRepository)
        accountRepository: IRepository<Account>,
        @inject(REPOSITORIES_TYPES.RoleRepository) roleRepository: IRepository<Role>
    ) {
        this.userRepository = userRepository;
    }

    Login(dto: LoginDto): Promise<UserViewDto> {
        throw new Error("Method not implemented.");
    }
    async SignUp(dto: SignUpDto): Promise<boolean> {
        try {
            // const account = this.accountRepository.find({email: dto.email})

            const newUser = new User();
            newUser.name = dto.name != null ? dto.name : "";
            await this.userRepository.create(newUser);
            return true;
        } catch (e) {
            return false;
        }
    }
    ForgetPass(email: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
