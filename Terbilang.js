function terbilang(n) {
  const s = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan"];
  const b = ["Sepuluh", "Sebelas", "Dua Belas", "Tiga Belas", "Empat Belas", "Lima Belas", "Enam Belas", "Tujuh Belas", "Delapan Belas", "Sembilan Belas"];
  const p = ["", "", "Dua Puluh", "Tiga Puluh", "Empat Puluh", "Lima Puluh", "Enam Puluh", "Tujuh Puluh", "Delapan Puluh", "Sembilan Puluh"];

  if (n < 10) return s[n];
  if (n < 20) return b[n - 10];
  if (n < 100) return `${p[Math.floor(n / 10)]} ${s[n % 10]}`.trim();
  if (n < 1000) return `${s[Math.floor(n / 100)]} Ratus ${terbilang(n % 100)}`.trim();
  return "Diluar batas";
}

console.log(terbilang(234)); // Output: Dua Ratus Tiga Puluh Empat
