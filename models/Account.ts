import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";
import BaseModel from "./BaseModel";

export class Account extends BaseModel {
    @prop({ required: true })
    uid: string;

    @prop({ required: true })
    email: string;

    @prop({ required: true })
    password: string;

    @prop({ required: true })
    salt: string;
}