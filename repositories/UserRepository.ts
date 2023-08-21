import { inject, injectable } from "inversify";
import { BaseRepository } from "./base/BaseRepository";
import { User } from "@/models/User";
import { getModelForClass } from "@typegoose/typegoose";
import mongoose from "mongoose";

@injectable()
export class UserRepository extends BaseRepository<User> {
    constructor() {
        super()
        const UserModel = mongoose.models.User || getModelForClass(User)
        this.model = UserModel
    }
}