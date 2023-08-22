import { LoginDto, SignUpDto } from "@/viewmodels/dtos/client/User/AuthDto";
import { UpdateUserDto, UserViewDto } from "@/viewmodels/dtos/client/User/UserDto";
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
        try {
            const acc = await this.accountRepository.findOne({ email: dto.userName })
            if (!acc) return null;

            const hashedPassword = await bcrypt.hash(dto.passWord, acc.salt)
            if (hashedPassword !== acc.password) return null

            const user = await this.userRepository.findById(acc.user.toString())
            if (user == null) return null

            var roles: string[] = []
            for (const item of user.roles) {
                const id = item.toString();
                const role = await this.roleRepository.findById(id)
                if (role != null) {
                    roles.push(role.name);
                }
            }

            var userView: UserViewDto = {
                id: user._id,
                name: user!.name,
                email: acc.email,
                createdDate: user.createdAt,
                roles: roles
            }
            return userView
        } catch (e) {
            console.error(e)
            return null
        }
    }

    async SignUp(dto: SignUpDto): Promise<boolean> {
        try {
            const account = await this.accountRepository.findOne({ email: dto.email }, false)
            if (account) return false

            var newUser = new User();
            newUser.name = dto.name != null ? dto.name : "";
            const userRole = await this.roleRepository.findById("64d44cfddac752e9901bbe52")
            console.log(userRole)
            if (userRole) newUser.roles = [userRole?._id]
            newUser = await this.userRepository.create(newUser);

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
            console.error(e)
            return false;
        }
    }

    ForgetPass(email: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async GetUserInfo(uid: string): Promise<UserViewDto | null> {
        try {
            const acc = await this.accountRepository.findOne({ user: uid })
            if (!acc) return null;

            const user = await this.userRepository.findById(acc.user.toString())
            if (user == null) return null

            var roles: string[] = []
            for (const item of user.roles) {
                const id = item.toString();
                const role = await this.roleRepository.findById(id)
                if (role != null) {
                    roles.push(role.name);
                }
            }

            var userView: UserViewDto = {
                id: user._id,
                name: user!.name,
                email: acc.email,
                createdDate: user.createdAt,
                roles: roles
            }
            return userView
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async UpdateUserInfo(dto: UpdateUserDto): Promise<boolean> {
        try {
            const user = await this.userRepository.findById(dto.id);
            if (user == null) return false;
            user.name = dto.name;
            await this.userRepository.update(dto.id, user);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}
