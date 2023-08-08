import { Account } from "@/models/Account";
import { BaseRepository } from "./base/BaseRepository";
import { IRepository } from "./interfaces/IRepository";
import { getModelForClass } from "@typegoose/typegoose";

export class AccountRepository extends BaseRepository<Account> implements IRepository<Account> {

    constructor() {
        super();
        this.model = getModelForClass(Account)
    }
}