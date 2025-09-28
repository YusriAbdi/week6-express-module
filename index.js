import { penjumlahan, pengurangan, perkalian, pembagian } from "./utils/math.js";
import profileRouter from "./routes/profile.js";
import profilemeRouter from "./routes/profileme.js";
import express from "express";

const app = express();
const PORT = 2005;

app.use("/profile", profileRouter);

app.use("/profileme", profilemeRouter);

app.get('/', (req, res) => {
    res.send('<br> Nama: Yusri Abdi <br> NIM: F1D02310098');
});

app.get('/hitung', (req, res) => {
    const hasilTambah = penjumlahan(16, 4);
    const hasilKurang = pengurangan(11, 6);
    const hasilKali = perkalian(20, 7);
    const hasilBagi = pembagian(60, 4);
    res.send(`<br> Hasil tambah 20 + 4: ${hasilTambah} <br>
            Hasil kurang 11 - 6: ${hasilKurang} <br>
            Hasil kali 20 * 7: ${hasilKali} <br>
            Hasil bagi 60 / 4: ${hasilBagi}`);
    
});

app.listen(PORT, () => {
    console.log('Server run http://localhost:2005');
}); 