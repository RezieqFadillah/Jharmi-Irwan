const mongoose = require("mongoose")
const { Schema } = mongoose

const artikelSchema = new Schema({
    judul: {
        type: String,
        required: true
    },
    isi: {
        type: String,
        required: true
    }
})

const Artikel = mongoose.model("Artikel", artikelSchema)

module.exports = Artikel