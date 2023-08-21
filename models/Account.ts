import * as typegoose from "@typegoose/typegoose";
import BaseModel from "./BaseModel";
import { User } from "./User";

export class Account extends BaseModel {
    @typegoose.prop({ required: true, unique: true, ref: () => User })
    user: typegoose.Ref<User>;

    @typegoose.prop({
        required: true,
        unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    })
    email: string;

    @typegoose.prop({ required: true })
    password: string;

    @typegoose.prop({ required: true })
    salt: string;
}