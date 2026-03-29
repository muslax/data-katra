var lines = [];document.querySelectorAll("#mw2g tr").forEach((tr) => {
  var logo = tr.querySelector("td:nth-child(1) a").getAttribute("href");
  var nama = tr.querySelector("td:nth-child(2) a b").textContent;
  var wiki = tr.querySelector("td:nth-child(2) a").getAttribute("href");
  var tipe = tr.querySelector("td:nth-child(3)").textContent;
  var kode = tr.querySelector("td:nth-child(4)").textContent;
  var ibukota = tr.querySelector("td:nth-child(6)").textContent;
  var wiki_ibukota = tr.querySelector("td:nth-child(6) a") ? tr.querySelector("td:nth-child(6) a").getAttribute("href") : "";
  var jml_kecamatan = parseInt(tr.querySelector("td:nth-child(8)").textContent);
  var jml_kelurahan = parseInt(tr.querySelector("td:nth-child(9)").textContent);
  var jml_desa = parseInt(tr.querySelector("td:nth-child(10)").textContent);
  lines.push({
    nama,
    kode,
    tipe,
    ibukota,
    jml_kecamatan,
    jml_kelurahan,
    jml_desa,
    logo,
    wiki,
    wiki_ibukota,
  })
}); console.log(JSON.stringify(lines));