import "reflect-metadata";
import { Container } from "inversify";
import { IRepository } from "./repositories/interfaces/IRepository";
import { User } from "./models/User";
import { UserRepository } from "./repositories/UserRepository";
import { TYPES } from "./types";

const container = new Container();

container.bind<IRepository<User>>(TYPES.UserRepository).to(UserRepository);
// Bind other repositories as needed

export default container;