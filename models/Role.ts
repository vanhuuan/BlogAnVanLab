import { prop } from "@typegoose/typegoose"
import { nanoid } from "nanoid"
import BaseModel from "./BaseModel"

export class Role extends BaseModel{

    @prop({ required: true })
    name: string
}