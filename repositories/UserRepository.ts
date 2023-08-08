import { inject, injectable } from "inversify";
import { BaseRepository } from "./base/BaseRepository";
import { User } from "@/models/User";
import { getModelForClass } from "@typegoose/typegoose";

@injectable()
export class UserRepository extends BaseRepository<User> {
    constructor() {
        super()
        const UserModel = getModelForClass(User)
        this.model = UserModel
    }
}