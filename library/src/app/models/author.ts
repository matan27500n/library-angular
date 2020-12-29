import { Book } from './Book';

export class Author {
  public constructor(
    public id?: number,
    public first_name?: string,
    public last_name?: string,
    public email?: string,
    public password?: string,
    public books?: Book[]
  ) {}
}
