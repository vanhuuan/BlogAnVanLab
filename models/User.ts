import { Ref, prop } from "@typegoose/typegoose";
import BaseModel from "./BaseModel";
import { Role } from "./Role";

export class User extends BaseModel {
    @prop({ required: true })
    public name: string;

    @prop({ required: true, ref: () => Role })
    public roles: Ref<Role>[]
}