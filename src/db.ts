import Dexie, { type Table } from "dexie";

export type Club = {
  chiro: number;
  ksa: number;
  okapi: number;
}

export class MySubClassedDexie extends Dexie {
  Clubs!: Table<Club>;

  constructor() {
    super("demolitiondb");
    this.version(1).stores({
      Clubs: "++id, chiro, ksa, okapi",
    });
  }
}

export const db = new MySubClassedDexie();
