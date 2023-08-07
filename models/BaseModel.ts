import { prop } from "@typegoose/typegoose";
import type { ObjectId } from "mongoose";
import { nanoid } from "nanoid";

export default class BaseModel extends Document {

    @prop({ default: () => new Date() })
    createdAt: Date;

    @prop({ default: () => new Date() })
    updatedAt: Date;

    @prop({ default: false })
    isDeleted: boolean;
}