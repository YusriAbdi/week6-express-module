# week6-express-module
#
## Nama: Yusri Abdi <br> NIM: F1D02310098
#
## Deskripsi Tugas
Membuat API sederhana menggunakan Node.js dan Express.js yang menampilkan data user dari API eksternal dan user dari data `array` buatan sendiri, menyediakan route untuk operasi matematika, serta menggunakan modul `ESM`
#
## Hasil Server Run
+ GET http://localhost:2005/<br>
  Gambar dibawah menampilkan `nama` dan `nim` dengan menggunakan `route` '/'
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c07e6b1d-9f58-42b5-8248-4543c0a040e1" />
+ GET http://localhost:2005/hitung<br>
  Gambar dibawah menampilkan 4 hasil dari operasi matematika yaitu `penjumlahan`, `pengurangan`, `perkalian`, dan `pembagian` dengan menggunakan route '/hitung'
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/0e32e4b9-5add-4453-a3c8-9644f47b1563" />
+ GET http://localhost:2005/profile<br>
  Gambar dibawah menampilkan semua data yang diambil dari `API eksternal` dengan menggunakan route '/profile'
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/00e0592e-f9d4-4216-bc8a-83dbd6d10294" />
+ GET http://localhost:2005/profile/5<br>
  Gambar dibawah menampilkan data yang diambil dari `API eksternal` yang memiliki `id = 5` menggunakan route '/profile/5'
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/35337ab3-5297-41ca-827b-ef751d639fab" />
+ GET http://localhost:2005/profileme<br>
  Gambar dibawah menampilkan semua data dari `array` yang dibuat sendiri menggunakan route '/profileme'
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/10c1784b-1cda-4c5a-b186-7cca61ab73a0" />
+ GET http://localhost:2005/profileme/1<br>
  Gambar dibawah menampilkan data yang diambil dari `array` buatan sendiri yang memiliki `id = 1` menggunakan route '/profileme/1'
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/93a56d75-27b4-4500-aac2-7ba07a1e02b1" />
