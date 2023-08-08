import { IRead } from "./IRead";
import { IWrite } from "./IWrite";

export interface IRepository<T> extends IRead<T>, IWrite<T> {
}