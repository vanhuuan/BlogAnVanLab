import { prop } from "@typegoose/typegoose"
import { nanoid } from "nanoid"
import BaseModel from "./BaseModel"

export class UserRefreshToken extends BaseModel {

    @prop({ required: true })
    uid: string

    @prop({ required: true })
    token: string

    @prop({ default: () => new Date() })
    expiredAt: Date
}