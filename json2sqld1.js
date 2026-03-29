const json = require("./json/d1.json");
const fs = require("fs");

const table = `create table d1 (
  id integer primary key,
  nama text,
  kode text,
  iso text,
  singkatan text,
  ibukota text,
  geografi text,
  hari_jadi text,
  tgl_pembentukan text,
  jml_kabupaten integer,
  jml_kota integer,
  logo text,
  wiki text,
  wiki_ibukota text,
  created text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')),
  updated text
);`;
// const lines = [table];
const lines = [];
const prefix =
  "insert into d1 (logo,nama,wiki,kode,iso,singkatan,ibukota,wiki_ibukota,geografi,hari_jadi,tgl_pembentukan,jml_kabupaten,jml_kota) values ";
json.forEach((c, i) => {
  const sql =
    prefix +
    `("${c.logo}", "${c.nama}", "${c.wiki}", "${c.kode}", "${c.iso}", "${c.singkatan}", "${c.ibukota}", "${c.wiki_ibukota}", "${c.geografi}", "${c.hari_jadi}", "${c.tgl_pembentukan}", ${c.jml_kabupaten}, ${c.jml_kota});`;
  lines.push(sql);
});

// console.log(lines.join("\n"));
const content = lines.join("\n");
const filename = "./d1.sql";
fs.writeFileSync(filename, content, "utf-8");
