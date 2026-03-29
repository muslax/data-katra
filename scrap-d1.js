var lines = [];document.querySelectorAll("#mwRA tr").forEach((tr) => {
  var logo = tr.querySelector("td:nth-child(1) a").getAttribute("href");
  var nama = tr.querySelector("td:nth-child(2) b a").textContent;
  var wiki = tr.querySelector("td:nth-child(2) b a").getAttribute("href");
  var kode = tr.querySelector("td:nth-child(3)").textContent;
  var iso = "ID-" + tr.querySelector("td:nth-child(4)").textContent;
  var k5 = tr.querySelector("td:nth-child(5)").textContent;
  var singkatan = k5.length > 1 ? k5 : "";
  var k6 = tr.querySelector("td:nth-child(6)");
  var ibukota = k6.firstChild.textContent.length > 1 ? k6.firstChild.textContent : "";
  var wiki_ibukota = k6.firstChild.textContent.length > 1 ? k6.querySelector("a").getAttribute("href") : "";
  var geografi = tr.querySelector("td:nth-child(7)").textContent;
  var k8 = tr.querySelector("td:nth-child(8)").firstChild;
  var hari_jadi = k8.textContent.length > 1 ? k8.textContent : "";
  var tgl_pembentukan = tr.querySelector("td:nth-child(9)").textContent;
  var jml_kabupaten = parseInt(tr.querySelector("td:nth-child(11) a").textContent);
  var jml_kota = parseInt(tr.querySelector("td:nth-child(12) a").textContent);
  lines.push({
    nama,
    kode,
    iso,
    singkatan,
    ibukota,
    geografi,
    hari_jadi,
    tgl_pembentukan,
    jml_kabupaten,
    jml_kota,
    logo,
    wiki,
    wiki_ibukota
  })
}); console.log(JSON.stringify(lines));