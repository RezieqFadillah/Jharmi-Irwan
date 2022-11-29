const mongoose = require("mongoose")
const { Schema } = mongoose

const tipsSchema = new Schema({
    nama :{
        type: String,
        required: true
    },
    judul: {
        type: String,
        required: true
    },
    isi: {
        type: String,
        required: true
    }
})

const Tips = mongoose.model("Tips", tipsSchema)

module.exports = Tips