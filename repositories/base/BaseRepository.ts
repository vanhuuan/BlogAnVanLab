// we imported all types from mongodb driver, to use in code
import { inject, injectable, unmanaged } from "inversify";
import { IRepository } from '../interfaces/IRepository';
import { DocumentType, ReturnModelType, getModelForClass } from '@typegoose/typegoose';
import BaseModel from '@/models/BaseModel';
import mongoose, { FilterQuery } from 'mongoose';
import dbConnect from "../../lib/dbConnect"
import { AnyParamConstructor } from "@typegoose/typegoose/lib/types";

@injectable()
export abstract class BaseRepository<T extends BaseModel> implements IRepository<T> {

    public model: ReturnModelType<AnyParamConstructor<T>>;

    constructor() {
    }

    async create(item: T): Promise<T> {
        await dbConnect();
        const createdItem = new this.model(item);
        await createdItem.save();
        return createdItem.toObject()
    }

    async update(id: string, item: T): Promise<T | null> {
        await dbConnect();
        const updatedItem = await this.model.findByIdAndUpdate(id, item, { new: true });
        return updatedItem ? updatedItem.toObject() : null;
    }
    
    async delete(id: string): Promise<boolean> {
        await dbConnect();
        const result = await this.model.findByIdAndDelete(id);
        return result !== null;
    }

    async find(query: FilterQuery<DocumentType<T>>, includeDelete: boolean = false): Promise<T[]> {
        await dbConnect();
        if(includeDelete == false) query.isDeleted = false
        const items = await this.model.find(query);
        return items.map(item => new this.model(item.toObject())) as T[];
    }

    async findOne(query: FilterQuery<DocumentType<T>>, includeDelete: boolean = false): Promise<T | null> {
        await dbConnect();
        if(includeDelete == false) query.isDeleted = false
        const items = await this.model.find(query);
        return items.map(item => new this.model(item.toObject()))[0];
    }
    
    async findById(id: string, includeDelete: boolean = false): Promise<T | null> {
        await dbConnect();
        const query: FilterQuery<DocumentType<T>> = {
            _id: id
        }
        if(includeDelete == false) query.isDeleted = false
        const item = await this.model.findOne(query);
        return item ? item.toObject() : null;
    }
}