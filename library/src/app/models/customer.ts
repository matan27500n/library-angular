import { Book } from 'src/app/models/book';
export class Customer {
  public constructor(
    public id?: number,
    public first_name?: string,
    public last_name?: string,
    public email?: string,
    public password?: string,
    public books?: Book[]
  ) {}
}
