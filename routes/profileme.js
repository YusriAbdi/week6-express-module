import express from "express";

const profilemeRouter = express.Router();

const Mahasiswa = [
    { id: 1, nama: "Abdi", nim: "F1D02310098", umur: 20, hobi: "Rebahan" },
    { id: 2, nama: "yusri", nim: "F1D02310098", umur: 21, hobi: "nonton" },
    { id: 3, nama: "Izzat", nim: "F1D02310114", umur: 21, hobi: "menyanyi" },
    { id: 4, nama: "nufa", nim: "F1D02310052", umur: 21, hobi: "Menulis" },
    { id: 5, nama: "fadila", nim: "F1D02310048", umur: 21, hobi: "Membaca" },
    { id: 6, nama: "Wahyu", nim: "F1D02310123", umur: 20, hobi: "Belajar" },
    { id: 7, nama: "Fia", nim: "F1D02310042", umur: 21, hobi: "Begadang" },
    { id: 8, nama: "Uci", nim: "F1D02310138", umur: 21, hobi: "Berlari" },
    { id: 9, nama: "Khair", nim: "F1D02310001", umur: 21, hobi: "Mandi" },
    { id: 10, nama: "Ganisa", nim: "F1D02310146", umur: 21, hobi: "Traveling" }
];

async function getUser() {
    return Mahasiswa;
}

profilemeRouter.get('/', async (req, res) => {
    const dataUser = await getUser()
    res.json(dataUser);
});

profilemeRouter.get("/:id", async(req, res) => {
    const users = await getUser();
    const id = parseInt(req.params.id);
    const user = users.find(i => i.id === id);

    if (!user) {
        return res.status(404).json({ message: "User tidak ditemukan" });
    }

    res.json(user);
});

export default profilemeRouter;