const atk = require("../models/artikel")

const db = require("../config/koneksi");

module.exports = {
    getAllArtikel: async (req, res) => {
        try {
            const artikels = await atk.find()
            res.json({
                data: artikels
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },
    getArtikelByID: async (req, res) => {
        try {
            const id = req.params.id
            const artikels = await atk.findById(id)
            if(artikels){
                res.json({
                    data: artikels
                })
            } else {
                res.json({
                    message: "data tidak ada ni"
                })
            }
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },
    addArtikel: (req, res) => {
        try {
            const data = req.body
            const artikel = new atk(data)
            artikel.save()

            res.redirect("/news")
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }       
    }
}