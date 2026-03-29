# data-katra

Repositori ini berisi data provinsi (d1), kabupaten/kota (d2), kecamatan (d3), desa/kelurahan (d4), daftar pulau (pp), dan entri Kamus Besar Bahasa Indonesia (KBBI).

Folder `d3-json` dan `d4-json` merupakan hasil *scraping* manual melalui konsol web, menggunakan skrip `scrap-d3.js` dan `scrap-d4.js`. Hasil *scraping* tersebut kemudian dikonversi menjadi 2 berkas `sql`, masing-masing `d3.sql` dan `d4.sql` yang terdapat di folder `regina`. Skrip untuk menkonversi ada di `write-sql-d3.js` dan `write-sql-d4.js`.

Khusus `d3` dan `d4` (kecamatan dan desa), kolom nama yang mengadung tanda kurung, misal "Barona (Wasabiti)", dipisah menjadi dua kolom, yaitu `nama` dan `alias`. Dengan contoh ini, kolom `nama` berisi "Barona" dan kolom `alias` berisi "Wasabiti".

Berkas lain yang ada di folder `regina`, yaitu `d1.sql`, `d2.sql`, dan `pp.sql` juga merupakan hasil *scraping* melalui konsol web di Wikipedia dan [nomor.net](https://www.nomor.net), tetapi skripnya tidak tersimpan.

Folder `kbbi` berisi 26 file `sql` (a-z) yang merupakan hasil konversi dari data json yang terdapat di repositori github [kbbi-harvester-cdn](https://github.com/Naandalist/kbbi-harvester-cdn) pada folder `word-details`. Data ini cukup besar, terdiri lebih dari 112 ribu berkas dengan total lebih dari 100 MB. Skrip yang digunakan untuk konversi `json` ke `sql` adalah `kbbi2sql.js`.

Seluruh file `sql` di repositori ini ditulis dengan dialek `sqlite`, dan nanti, bila memungkinkan, akan saya bagikan juga file databasenya dengan penjelasan seperlunya.