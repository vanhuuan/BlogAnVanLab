import { Account } from "@/models/Account";
import { BaseRepository } from "./base/BaseRepository";
import { IRepository } from "./interfaces/IRepository";
import { getModelForClass } from "@typegoose/typegoose";
import mongoose from "mongoose";

export class AccountRepository extends BaseRepository<Account> implements IRepository<Account> {

    constructor() {
        super();
        this.model = mongoose.models.Account || getModelForClass(Account)
    }
}