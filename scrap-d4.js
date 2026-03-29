const options = [
  /* 11 */ "Aceh (NAD)",
  /* 12 */ "Sumatera Utara",
  /* 13 */ "Sumatera Barat",
  /* 14 */ "Riau",
  /* 15 */ "Jambi",
  /* 16 */ "Sumatera Selatan",
  /* 17 */ "Bengkulu",
  /* 18 */ "Lampung",
  /* 19 */ "Kepulauan Bangka Belitung",
  /* 21 */ "Kepulauan Riau",
  /* 31 */ "DKI Jakarta",
  /* 32 */ "Jawa Barat",
  /* 33 */ "Jawa Tengah",
  /* 34 */ "DI Yogyakarta",
  /* 35 */ "Jawa Timur",
  /* 36 */ "Banten",
  /* 51 */ "Bali",
  /* 52 */ "Nusa Tenggara Barat (NTB)",
  /* 53 */ "Nusa Tenggara Timur (NTT)",
  /* 61 */ "Kalimantan Barat",
  /* 62 */ "Kalimantan Tengah",
  /* 63 */ "Kalimantan Selatan",
  /* 64 */ "Kalimantan Timur",
  /* 65 */ "Kalimantan Utara",
  /* 71 */ "Sulawesi Utara",
  /* 72 */ "Sulawesi Tengah",
  /* 73 */ "Sulawesi Selatan",
  /* 74 */ "Sulawesi Tenggara",
  /* 75 */ "Gorontalo",
  /* 76 */ "Sulawesi Barat",
  /* 81 */ "Maluku",
  /* 82 */ "Maluku Utara",
  /* 91 */ "Papua",
  /* 92 */ "Papua Barat",
  /* 92 */ "Papua Barat Daya" /* Should be 96 */,
  /* 93 */ "Papua Selatan",
  /* 94 */ "Papua Tengah",
  /* 95 */ "Papua Pegunungan",
];

options.forEach((o) => {
  const encoded = encodeURI(o);
  console.log(
    `https://www.nomor.net/_kodepos.php?_i=desa-kodepos&daerah=Provinsi&jobs=${encoded}&perhal=1000&sby=000000&asc=0001010&urut=8`,
  );
});

/* COPY & PASTE TO BROWSER CONSOLE
var lines = []; document
  .querySelectorAll('table table table table tbody tr[bgcolor="#ccffff"]')
  .forEach((tr) => {
    let n2 = tr.querySelector("td:nth-child(2)").textContent;
    let n3 = tr.querySelector("td:nth-child(3)").textContent;
    let n4 = tr.querySelector("td:nth-child(4)").textContent;
    let n5 = tr.querySelector("td:nth-child(5)").textContent;
    let n6 = tr.querySelector("td:nth-child(6)").textContent;
    let n7 = tr.querySelector("td:nth-child(7)").textContent;
    let n8 = tr.querySelector("td:nth-child(8)").textContent;
    lines.push(`["${n2}", "${n3}", "${n4}", "${n5}", "${n6}", "${n7}", "${n8}"],`);
  }); console.log(lines.join("\n"));
*/