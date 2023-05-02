import { writable } from "svelte/store";
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

export function addPointOnCountPage(key: String) {
  if (key === "c") {
    db.Clubs.where("id")
      .equals(1)
      .modify((record) => {
        record.chiro += 1;
      });
  } else if (key === "k") {
    db.Clubs.where("id")
      .equals(1)
      .modify((record) => {
        record.ksa += 1;
      });
  } else if (key === "o") {
    db.Clubs.where("id")
      .equals(1)
      .modify((record) => {
        record.okapi += 1;
      });
  }
}

export function checkScore() {
  let place: any = writable([]);

  db.Clubs.toArray()
    .then(function (data) {
      let dbData = calculateStatus(data);
      place.set(dbData);
    })
    .catch(function (error) {
      console.log(error);
    });
  return place;
}

export async function returnScore() {
  let store: any = [];
  await db.Clubs.toArray().then((data) => {
    let score = data;
    store = score[0];
  });
  return store;
}

function calculateStatus(data: any) {
  const { chiro, ksa, okapi } = data[0];
  const highest = Math.max(chiro, ksa, okapi);
  const secondHighest = [chiro, ksa, okapi].sort((a, b) => b - a)[1];
  const logos = ["/Chirologo.png", "/Ksalogo.png", "/witzonderachtergrond.png"];

  switch (true) {
    case chiro === highest:
      if (ksa === secondHighest && okapi === secondHighest) {
        return [logos[0], logos[2], logos[1]];
      } else if (ksa === secondHighest) {
        return [logos[0], logos[1], logos[2]];
      } else if (okapi === secondHighest) {
        return [logos[0], logos[2], logos[1]];
      }
      break;
    case ksa === highest:
      if (chiro === secondHighest && okapi === secondHighest) {
        return [logos[1], logos[0], logos[2]];
      } else if (chiro === secondHighest) {
        return [logos[1], logos[0], logos[2]];
      } else if (okapi === secondHighest) {
        return [logos[1], logos[2], logos[0]];
      }
      break;
    case okapi === highest:
      if (chiro === secondHighest && ksa === secondHighest) {
        return [logos[2], logos[0], logos[1]];
      } else if (chiro === secondHighest) {
        return [logos[2], logos[0], logos[1]];
      } else if (ksa === secondHighest) {
        return [logos[2], logos[1], logos[0]];
      }
      break;
    default:
      return logos.reverse();
  }
}
