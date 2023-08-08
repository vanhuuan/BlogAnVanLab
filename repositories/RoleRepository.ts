import { Role } from "@/models/Role";
import { BaseRepository } from "./base/BaseRepository";
import { IRepository } from "./interfaces/IRepository";
import { getModelForClass } from "@typegoose/typegoose";

export class RoleRepository extends BaseRepository<Role> implements IRepository<Role> {

    constructor() {
        super();
        this.model = getModelForClass(Role)
    }
}