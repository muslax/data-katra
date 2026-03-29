const json = require("./d3-json/d3.json");
const fs = require("fs");

// ["Bakongan", "23773", "7", "1", "11.01.01", "Kab.", "Aceh Selatan", "Aceh (NAD)"],
// [nama, kodepos, jml_desa, jml_pulau, kode, tipe_d2, d2, d1],
const table = `create table d3 (
  id integer primary key,
  kode text,
  nama text,
  alias text,
  kodepos text,
  jml_desa integer,
  jml_pulau integer,
  tipe_d2 text,
  d2 text,
  d1 text,
  created text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')),
  updated text
);`;
let kode = "";
// const lines = [table];
const lines = [];
const prefix =
  "insert into d3 (nama, alias, kodepos, jml_desa, jml_pulau, kode, tipe_d2, d2, d1) values ";
json.forEach((c, i) => {
  const jml_pulau = c[3] == "-" ? 0 : c[3];
  let alias = "";
  let nama = c[0];
  const splits = c[0].split("(");
  if (splits.length > 1) {
    nama = splits[0].trim();
    alias = splits[1].substring(0, splits[1].length -1);
    // console.log(nama, "ALIAS", alias)
  }
  lines.push(
    prefix +
      `("${nama}", "${alias}", "${c[1]}", "${c[2]}", ${jml_pulau}, "${c[4]}", "${c[5]}", "${c[6]}", "${c[7]}");`,
  );
});


const content = lines.join("\n");
const filename = "./regina/d3.sql";
fs.writeFileSync(filename, content, "utf-8");
