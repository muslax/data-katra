import fs from "fs";
import fsp from "node:fs/promises";
import path from "node:path";

async function quickRead(dirname) {
  const basePath = "/Users/armx/kbbi/kbbi-harvester-cdn/word-details/";
  const pathName = basePath + "/" + dirname;
  const files = await fsp.readdir(pathName, { withFileTypes: true });
  let rs = [];

  for (const file of files) {
    if (file.isFile()) {
      // Use path.join to avoid missing slashes between dirname and filename
      const filePath = path.join(pathName, file.name);
      // console.log(filePath);

      try {
        // Await the promise-based readFile so the loop waits for the data
        const data = await fsp.readFile(filePath, "utf8");
        const json = JSON.parse(data);
        const entries = json.entries;
        entries.forEach((_entry) => {
          const rawStr = JSON.stringify(_entry);
          const escaped = rawStr.replaceAll("'", "''");
          const entry = JSON.parse(escaped);

          const _id = entry.id;
          const nama = entry.nama.replaceAll("'", "''");
          const kata = json.word.replaceAll("'", "''");
          const jenis = entry.jenis || "";
          const akar_kata = entry.rootWord || "";
          const makna = JSON.stringify(entry.makna);

          const simplifiedMakna = entry.makna.map(m => {
            return {
              kelasKata: m.kelasKata.map(k => {
                return { kode: k.kode, nama: k.nama };
              }),
              definisi: m.definisi,
              contoh: m.contoh,
            }
          })
          const smakna = JSON.stringify(simplifiedMakna);
          // Cek kelasKata
          const array = [];
          entry.makna.forEach(m => {
            m.kelasKata.forEach(k => {
              if (k.nama != "-") array.push(k.nama);
            })
          })
          const set = new Set(array);
          const kelas_kata = JSON.stringify(Array.from(set));
          console.log(kelas_kata)
          const etimologi = entry.etimologi
            ? "'" + JSON.stringify(entry.etimologi) + "'"
            : "null";
          const kata_turunan = entry.terkait.kataTurunan
            ? JSON.stringify(entry.terkait.kataTurunan)
            : "[]";
          const gabungan_kata = entry.terkait.gabunganKata
            ? JSON.stringify(entry.terkait.gabunganKata)
            : "[]";
          const peribahasa = entry.terkait.peribahasa
            ? JSON.stringify(entry.terkait.peribahasa)
            : "[]";
          const idiom = entry.terkait.idiom
            ? JSON.stringify(entry.terkait.idiom)
            : "[]";
          const peribahasa_dan_makna = entry.terkait.peribahasa_dan_makna
            ? JSON.stringify(entry.terkait.peribahasa_dan_makna)
            : "[]";

          const columns =
            "_id, nama, kata, jenis, akar_kata, kelas_kata, makna, etimologi, kata_turunan, gabungan_kata, peribahasa, idiom, peribahasa_dan_makna";
          const values = `'${_id}', '${nama}', '${kata}', '${jenis}', '${akar_kata}', '${kelas_kata}', '${smakna}', ${etimologi}, '${kata_turunan}', '${gabungan_kata}', '${peribahasa}', '${idiom}', '${peribahasa_dan_makna}'`;
          const sql = `insert into kbbi (${columns}) values (${values});`;
          rs.push(sql);
        });
      } catch (err) {
        console.error(`Error reading ${file.name}:`, err);
      }
    }
  }

  const content = rs.join("\n");
  // console.log(content);
  const filename = "./sql/" + dirname.toLowerCase() + ".sql";
  fs.writeFileSync(filename, content, "utf-8");
}

const folders = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// const folders = "X".split("");
folders.forEach(async (f) => await quickRead(f));
