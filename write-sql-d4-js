const d11 = require("./d4-json/11.json");
const d12 = require("./d4-json/12.json");
const d13 = require("./d4-json/13.json");
const d14 = require("./d4-json/14.json");
const d15 = require("./d4-json/15.json");
const d16 = require("./d4-json/16.json");
const d17 = require("./d4-json/17.json");
const d18 = require("./d4-json/18.json");
const d19 = require("./d4-json/19.json");
const d21 = require("./d4-json/21.json");
const d31 = require("./d4-json/31.json");
const d32 = require("./d4-json/32.json");
const d33 = require("./d4-json/33.json");
const d34 = require("./d4-json/34.json");
const d35 = require("./d4-json/35.json");
const d36 = require("./d4-json/36.json");
const d51 = require("./d4-json/51.json");
const d52 = require("./d4-json/52.json");
const d53 = require("./d4-json/53.json");
const d61 = require("./d4-json/61.json");
const d62 = require("./d4-json/62.json");
const d63 = require("./d4-json/63.json");
const d64 = require("./d4-json/64.json");
const d65 = require("./d4-json/65.json");
const d71 = require("./d4-json/71.json");
const d72 = require("./d4-json/72.json");
const d73 = require("./d4-json/73.json");
const d74 = require("./d4-json/74.json");
const d75 = require("./d4-json/75.json");
const d76 = require("./d4-json/76.json");
const d81 = require("./d4-json/81.json");
const d82 = require("./d4-json/82.json");
const d91 = require("./d4-json/91.json");
const d92 = require("./d4-json/92.json");
const d93 = require("./d4-json/93.json");
const d94 = require("./d4-json/94.json");
const d95 = require("./d4-json/95.json");
const d96 = require("./d4-json/96.json");

const all = [
  d11,
  d12,
  d13,
  d14,
  d15,
  d16,
  d17,
  d18,
  d19,
  d21,
  d31,
  d32,
  d33,
  d34,
  d35,
  d36,
  d51,
  d52,
  d53,
  d61,
  d62,
  d63,
  d64,
  d65,
  d71,
  d72,
  d73,
  d74,
  d75,
  d76,
  d81,
  d82,
  d91,
  d92,
  d93,
  d94,
  d95,
  d96,
];
const fs = require("fs");
const table = `CREATE TABLE d4 (
  id integer primary key,
  kode text,
  nama text,
  alias text,
  kodepos text,
  d3 text,
  tipe_d2 text,
  d2 text,
  d1 text,
  created text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')),
  updated text
);`;
// const lines = [table];
const lines = [];
const prefix =
  "insert into d4 (kodepos, nama, alias, kode, d3, tipe_d2, d2, d1) values ";
all.forEach((p, i) => {
  lines.push("\n--\n--\n--");
  p.forEach((c) => {
    let alias = "";
    let nama = c[1];
    const splits = c[1].split("(");
    if (splits.length > 1) {
      nama = splits[0].trim();
      alias = splits[1].substring(0, splits[1].length - 1);
      // console.log(nama, "ALIAS", alias);
    }
    lines.push(
      prefix +
        `("${c[0]}", "${nama}", "${alias}", "${c[2]}", "${c[3]}", "${c[4]}", "${c[5]}", "${c[6]}");`,
    );
  });
});

const content = lines.join("\n");
const filename = "./regina/d4.sql";
fs.writeFileSync(filename, content, "utf-8");
