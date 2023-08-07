import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class User {
    @prop({ required: true })
    name: string;

    @prop({ required: true })
    roles: string[]
}