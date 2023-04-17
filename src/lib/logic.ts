import { db } from "../db";

export async function initStart() {
  await db.Clubs.where("id")
    .equals(1)
    .toArray()
    .then(function (results) {
      if (results.length === 0) {
        db.Clubs.add({
          chiro: 0,
          ksa: 0,
          okapi: 0,
        });
      } else {
        console.log("Clubs has already been initialized");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function addPoint(event: KeyboardEvent) {
  if (event.key === "c") {
    db.Clubs.where("id")
      .equals(1)
      .modify((record) => {
        record.chiro += 1;
      });
  } else if (event.key === "k") {
    db.Clubs.where("id")
      .equals(1)
      .modify((record) => {
        record.ksa += 1;
      });
  } else if (event.key === "o") {
    db.Clubs.where("id")
      .equals(1)
      .modify((record) => {
        record.okapi += 1;
      });
  }
}
