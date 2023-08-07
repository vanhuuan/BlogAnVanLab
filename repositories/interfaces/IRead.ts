import BaseModel from "@/models/BaseModel";

export interface IRead<T  extends BaseModel> {
    find(item: T): Promise<T[]>;
    findOne(id: string): Promise<T>;
}