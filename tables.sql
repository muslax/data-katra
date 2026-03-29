create table kbbi (
  id integer primary key,
  _id text,
  nama text,
  kata text,
  jenis text,
  akar_kata text,
  kelas_kata text,
  makna text,
  etimologi text,
  kata_turunan text,
  gabungan_kata text,
  peribahasa text,
  idiom text,
  peribahasa_dan_makna text,
  created text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')),
  updated text
);
create table d1 (
  id integer primary key,
  kode text,
  iso text,
  nama text,
  alias text,
  singkatan text,
  ibukota text,
  geografi text,
  hari_jadi text,
  tgl_pembentukan text,
  wiki text,
  logo text,
  created text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')),
  updated text
);
create table d2 (
  id integer primary key,
  kode text,
  kode_d1 text,
  iso text,
  jenis text,
  nama text,
  alias text,
  ibukota text,
  jml_kecamatan integer,
  jml_kelurahan integer,
  jml_desa integer,
  logo text,
  created text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')),
  updated text
);
create table d3 (
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
);
CREATE TABLE d4 (
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
);
create table pp (
  id integer primary key,
  nama text,
  tipe text,
  geo text,
  kodepos text,
  d3 text,
  d2 text,
  tipe_d2 text,
  d1 text,
  kode text,
  created text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')),
  updated text
);

CREATE TRIGGER update_pp AFTER UPDATE ON pp
BEGIN UPDATE pp SET updated = (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')) WHERE id=NEW.id; END;
CREATE TRIGGER update_kbbi AFTER UPDATE ON kbbi
BEGIN UPDATE kbbi SET updated = (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')) WHERE id=NEW.id; END;
CREATE TRIGGER update_d1 AFTER UPDATE ON d1
BEGIN UPDATE d1 SET updated = (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')) WHERE id=NEW.id; END;
CREATE TRIGGER update_d2 AFTER UPDATE ON d2
BEGIN UPDATE d2 SET updated = (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')) WHERE id=NEW.id; END;
CREATE TRIGGER update_d3 AFTER UPDATE ON d3
BEGIN UPDATE d3 SET updated = (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')) WHERE id=NEW.id; END;
CREATE TRIGGER update_d4 AFTER UPDATE ON d4
BEGIN UPDATE d4 SET updated = (strftime('%Y-%m-%dT%H:%M:%fZ', 'now', 'utc')) WHERE id=NEW.id; END;