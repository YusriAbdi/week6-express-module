import express from "express";

const profileRouter = express.Router();

async function getUser() {
    try{
        console.log("Ambil data user dari API!!!");
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log("Data berhasil diambil!!!");
        return data;
    } catch(error) {
        console.log("Terjadi ERROR: ", error);
    }
}

profileRouter.get('/', async (req, res) => {
    const dataUser = await getUser()
    res.json(dataUser);
});

profileRouter.get("/:id", async(req, res) => {
    const users = await getUser();
    const id = parseInt(req.params.id);
    const user = users.find(i => i.id === id);

    if (!user) {
        return res.status(404).json({ message: "User tidak ditemukan" });
    }

    res.json(user);
});

export default profileRouter;