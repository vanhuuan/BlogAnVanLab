import { Role } from "@/models/Role";
import { BaseRepository } from "./base/BaseRepository";
import { IRepository } from "./interfaces/IRepository";
import { getModelForClass } from "@typegoose/typegoose";
import mongoose from "mongoose";

export class RoleRepository extends BaseRepository<Role> {

    constructor() {
        super();
        this.model = mongoose.models.Role || getModelForClass(Role)
    }
}