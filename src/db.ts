import Dexie, { type Table } from "dexie";

export interface Club {
  total: number;
}

export class MySubClassedDexie extends Dexie {
  Okapi!: Table<Club>;
  Chiro!: Table<Club>;
  Ksa!: Table<Club>;

  constructor() {
    super("demolitiondb");
    this.version(1).stores({
      Okapi: "total",
      Chiro: "total",
      Ksa: "total",
    });
  }
}


export const db = new MySubClassedDexie();
