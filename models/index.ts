import { getModelForClass } from "@typegoose/typegoose";
import { Account } from "./Account";
import { User } from "./User";
import { Role } from "./Role";

export const AccountModel = getModelForClass(Account)
export const UserModel = getModelForClass(User)
export const RoleModel = getModelForClass(Role)