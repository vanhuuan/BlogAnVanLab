import { LoginDto, SignUpDto } from "@/viewmodels/dtos/client/AuthDto";
import { UserViewDto } from "@/viewmodels/dtos/client/UserDto";
import { IUserService } from "../IUserService";
import { User } from "@/models/User";
import { inject, injectable } from "inversify";
import { REPOSITORIES_TYPES } from "@/types";
import type { IRepository } from "@/repositories/interfaces/IRepository";
import { Account } from "@/models/Account";
import { Role } from "@/models/Role";
import bcrypt from "bcrypt"

@injectable()
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
        this.accountRepository = accountRepository;
        this.roleRepository = roleRepository;
    }

    async Login(dto: LoginDto): Promise<UserViewDto | null> {
        console.log(dto)
        const acc = await this.accountRepository.findOne({ email: dto.userName })
        if (acc == null) return null;

        const hashedPassword = await bcrypt.hash(dto.passWord, acc.salt)
        if (hashedPassword !== acc.password) return null

        console.log("uid", acc.user.toString())
        const user = await this.userRepository.findById(acc.user.toString())

        if (user == null) return null
        var userView: UserViewDto = {
            name: user!.name,
            email: acc.email,
            createdDate: user.createdAt,
            roles: []
        }
        return userView
    }

    async SignUp(dto: SignUpDto): Promise<boolean> {
        try {
            const account = this.accountRepository.findOne({ email: dto.email }, false)
            if (account != null) return false

            const newUser = new User();
            newUser.name = dto.name != null ? dto.name : "";
            const userRole = await this.roleRepository.findById("1")
            if (userRole) newUser.roles = [userRole?._id]
            await this.userRepository.create(newUser);

            const salt = await bcrypt.genSalt()
            const hashedPassword = await bcrypt.hash(dto.password, salt)
            const newAccount = new Account()

            newAccount.user = newUser._id
            newAccount.password = hashedPassword
            newAccount.salt = salt
            newAccount.email = dto.email;

            await this.accountRepository.create(newAccount)

            return true;
        } catch (e) {
            return false;
        }
    }

    ForgetPass(email: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
