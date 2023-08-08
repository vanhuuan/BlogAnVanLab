import { getModelForClass, prop } from "@typegoose/typegoose";
import BaseModel from "./BaseModel";

export class User extends BaseModel {
    @prop({ required: true })
    public name: string;

    // @prop({ required: true })
    // public roles: string[]
}