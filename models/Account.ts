import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";
import BaseModel from "./BaseModel";

export class Account extends BaseModel {
    @prop({ required: true, unique: true })
    uid: string;

    @prop({
        required: true,
        unique: true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    })
    email: string;

    @prop({ required: true })
    password: string;

    @prop({ required: true })
    salt: string;
}