import { Author } from './author';

export class Book {
  public constructor(
    public id?: number,
    public name?: string,
    public author?: Author,
    public price?: number,
    public image?: string
  ) {}
}
