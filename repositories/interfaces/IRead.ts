import BaseModel from "@/models/BaseModel";
import { DocumentType } from "@typegoose/typegoose";
import { FilterQuery } from "mongoose";

export interface IRead<T> {
    find(query: FilterQuery<DocumentType<T>>, includeDelete?: boolean): Promise<T[]>;
    findOne(query: FilterQuery<DocumentType<T>>, includeDelete?: boolean): Promise<T | null>;
    findById(id: string, includeDelete?: boolean): Promise<T | null>;
}