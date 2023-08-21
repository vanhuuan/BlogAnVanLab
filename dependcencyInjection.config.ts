import "reflect-metadata";
import { Container } from "inversify";
import { IRepository } from "./repositories/interfaces/IRepository";
import { User } from "./models/User";
import { UserRepository } from "./repositories/UserRepository";
import { REPOSITORIES_TYPES, SERVICES_TYPES } from "./types";
import { IUserService } from "./services/IUserService";
import { UserService } from "./services/implements/UserService";
import { RoleRepository } from "./repositories/RoleRepository";
import { Role } from "./models/Role";
import { Account } from "./models/Account";
import { AccountRepository } from "./repositories/AccountRepository";

const container = new Container();

// Repository
container.bind<IRepository<User>>(REPOSITORIES_TYPES.UserRepository).to(UserRepository);
container.bind<IRepository<Role>>(REPOSITORIES_TYPES.RoleRepository).to(RoleRepository);
container.bind<IRepository<Account>>(REPOSITORIES_TYPES.AccountRepository).to(AccountRepository);

// Service
container.bind<IUserService>(SERVICES_TYPES.UserService).to(UserService);

export default container;