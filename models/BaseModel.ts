import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export interface IBaseModel {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    isDeleted: boolean;
}

export default class BaseModel implements IBaseModel {
    @prop({ default: () => nanoid(24) })
    _id: string;

    @prop({ default: () => new Date() })
    createdAt: Date;

    @prop({ default: () => new Date() })
    updatedAt: Date;

    @prop({ default: false })
    isDeleted: boolean;

    constructor(params?: Partial<BaseModel>) {
        if (params) {
            Object.assign(this, params);
        }
    }
}