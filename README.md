# data-katra

Repositori ini berisi data provinsi (d1), kabupaten/kota (d2), kecamatan (d3), desa/kelurahan (d4), daftar pulau (pp), dan entri Kamus Besar Bahasa Indonesia (KBBI).

Folder `json` berisi berkas-berkas json hasil *scraping* manual melalui konsol web. Folder `regina` berisi berkas-berkas `sql` hasil konversi dari berkas-berkas `json` hasil *scraping*.
Data d1 dan d2 di-*scrap* dari Wikipedia, sedangkan d3 dan d4 dari [nomor.net](https://www.nomor.net). Skrip untuk *scraping* saya sertakan di luar folder, demikian juga skrip untuk menkonversi json ke format `sql`.

Khusus `d3` dan `d4` (kecamatan dan desa), kolom nama yang mengadung tanda kurung, misal "Barona (Wasabiti)", dipisah menjadi dua kolom, yaitu `nama` dan `alias`. Dengan contoh ini, kolom `nama` berisi "Barona" dan kolom `alias` berisi "Wasabiti".

Folder `kbbi` berisi 26 file `sql` (a sampai z), merupakan hasil konversi dari data json yang terdapat di repositori github [kbbi-harvester-cdn](https://github.com/Naandalist/kbbi-harvester-cdn) (pada folder `word-details`). Data ini cukup besar, terdiri lebih dari 112 ribu berkas dengan total lebih dari 100 MB. Skrip yang digunakan untuk konversi `json` ke `sql` adalah `kbbi2sql.js`.

Seluruh file `sql` di repositori ini ditulis secara simpel dengan dialek `sqlite`, dan nanti, bila memungkinkan, akan saya tambahkan penjelasan seperlunya. Berkas database `sqlite` sengaja tidak saya sertakan, karena "seluruh bahannya" sudah ada di sini.

Salut untuk [nomor.net](https://www.nomor.net) yang tetap memelihara situsnya. Saya sudah mengenal situs ini sekitar tahun 2012 ketika saya memerlukan data seluruh kodepos di Indonesia. Sebelumnya, saya sempat membeli data kodepos dari sebuah situs di Jerman, yang ternyata tidak selengkap [nomor.net](https://www.nomor.net).

Salut juga untuk Mas Listiananda Apriliawan pemilik repositori [kbbi-harvester-cdn](https://github.com/Naandalist/kbbi-harvester-cdn). Mungkin sudah puluhan repo di Github, atau bisa jadi ratusan, yang terkait data kata Bahasa Indonesia, khususnya KBBI, yang sempat saya cek. Sejauh ini, dan sejauh riset saya, hanya reponya Mas Listiananda yang menyediakan data komplit. Sangat komplit bahkan.

Dulu sekali, bila saya memerlukan data kewilayahan, jujugan saya adalah sub situs BPS yang mengelola Master File Desa. Bahkan, di tahun 2015 atau 2016, saya sempat membeli dari mereka. Tetapi entah sejak kapan data semacam itu tidak lagi tersedia secara daring, walaupun tetap bisa diunduh dalam format buku (PDF), yang menurut saya kampungan.

***Fuck*** untuk para pemangku kepentingan yang seharusnya menyediakan data-data publik tetapi tidak melakukan apa pun untuk memudahkan akses data.
