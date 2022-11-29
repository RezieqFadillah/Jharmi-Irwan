const atk = require("../models/tips")

const db = require("../config/koneksi");

module.exports = {
    getAllTips: async (req, res) => {
        try {
            const artikels = await atk.find()
            res.json({
                data: artikels
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },
    addTips: (req, res) => {
        try {
            const data = req.body
            const tips = new atk(data)
            tips.save()

            res.redirect("/news")
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }       
    }
}