import * as typegoose from "@typegoose/typegoose"
import BaseModel from "./BaseModel"
import { User } from "./User";

export class Role extends BaseModel{

    @typegoose.prop({ ref: () => User, required: true})
    user: typegoose.Ref<User>[];

    @typegoose.prop({ required: true })
    name: string
}