// import all interfaces
import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';

// we imported all types from mongodb driver, to use in code
import {
    Db,
    Collection,
    InsertOneResult,
    Document,
} from 'mongodb';
import BaseModel from '@/models/BaseModel';
import { ObjectId } from 'mongoose';

// that class only can be extended
export abstract class BaseRepository<T extends BaseModel> implements IWrite<T>, IRead<T> {
    //creating a property to use your code in all instances 
    // that extends your base repository and reuse on methods of class
    public readonly _collection: Collection<T>;

    //we created constructor with arguments to manipulate mongodb operations
    constructor(db: Db, collectionName: string) {
        this._collection = db.collection(collectionName);
    }

    // we add to method, the async keyword to manipulate the insertOne result
    // of method.
    async create(item: T): Promise<boolean> {
        const result: InsertOneResult<Document> = await this._collection.insertOne(item);
        // after the insert operations, we returns only acknowledged property (that haves a 1 or 0 results)
        // and we convert to boolean result (0 false, 1 true)
        return !!result.acknowledged;
    }


    update(id: string, item: T): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    async find(item: T): Promise<T[]> {
        throw new Error('Method not implemented.');
    }
    async findOne(id: ObjectId): Promise<T> {
        const result: WithId<T> = await this._collection.findOne({ _id: id})
        return result;
    }
}