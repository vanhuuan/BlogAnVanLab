// we imported all types from mongodb driver, to use in code
import { inject, injectable, unmanaged } from "inversify";
import { IRepository } from '../interfaces/IRepository';
import { DocumentType, ReturnModelType, getModelForClass } from '@typegoose/typegoose';
import BaseModel from '@/models/BaseModel';
import mongoose, { FilterQuery } from 'mongoose';
import dbConnect from "../../lib/dbConnect"
import { TYPES } from "@/types";
import { AnyParamConstructor } from "@typegoose/typegoose/lib/types";

@injectable()
export abstract class BaseRepository<T extends BaseModel> implements IRepository<T> {

    private readonly model: ReturnModelType<AnyParamConstructor<T>>;

    constructor(@unmanaged() modelConstructor: any) {
        this.model = modelConstructor
    }

    async create(item: T): Promise<T> {
        await dbConnect();
        console.log("alo")
        const createdItem = new this.model(item);
        await createdItem.save();
        return createdItem.toObject()
    }

    async update(id: string, item: T): Promise<T | null> {
        const updatedItem = await this.model.findByIdAndUpdate(id, item, { new: true });
        return updatedItem ? updatedItem.toObject() : null;
    }
    
    async delete(id: string): Promise<boolean> {
        const result = await this.model.findByIdAndDelete(id);
        return result !== null;
    }

    async find(query: FilterQuery<DocumentType<T>>): Promise<T[]> {
        const items = await this.model.find(query);
        return items.map(item => new this.model(item.toObject())) as T[];
    }

    async findOne(id: string): Promise<T | null> {
        const item = await this.model.findById(id);
        return item ? item.toObject() : null;
    }
}