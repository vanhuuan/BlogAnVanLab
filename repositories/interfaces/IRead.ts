import BaseModel from "@/models/BaseModel";

export interface IRead<T> {
    find(item: T): Promise<T[]>;
    findOne(id: string): Promise<T | null>;
}