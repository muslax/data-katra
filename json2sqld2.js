const json = require("./json/d2.json");
const fs = require("fs");

const table = `create table d2 (
  id integer primary key,
  nama text,
  kode text,
  tipe text,
  ibukota text,
  jml_kecamatan integer,
  jml_kelurahan integer,
  jml_desa integer,
  logo text,
  wiki text,
  wiki_ibukota text,
  created text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')),
  updated text
);`;
// const lines = [table];
const lines = [];
const prefix =
  "insert into d2 (nama, kode, tipe, ibukota, jml_kecamatan, jml_kelurahan, jml_desa, logo, wiki, wiki_ibukota) values ";
json.forEach((c, i) => {
  const sql =
    prefix +
    `("${c.nama}", "${c.kode}", "${c.tipe}", "${c.ibukota}", ${c.jml_kecamatan}, ${c.jml_kelurahan}, ${c.jml_desa}, "${c.logo}", "${c.wiki}", "${c.wiki_ibukota}");`;
  lines.push(sql);
});

// console.log(lines.join("\n"));
const content = lines.join("\n");
const filename = "./d2.sql";
fs.writeFileSync(filename, content, "utf-8");
