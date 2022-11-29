const usr = require("../models/user")
const db = require("../config/koneksi");

module.exports = {
    login: async (req,res) => {
        try {
            const data = req.body

            const user = await usr.findOne({ username: data.username})
            
            // if(!user)res.status(400).send("Akun tidak ditemukan")
            if(!user){
                return res.json({
                    status:400,
                    message: "Akun tidak ditemukan",
                })
            }

            const checkPs = bcrypt.compareSync(data.password, user.password)
            console.log(checkPs)

            if (checkPs) {
                const token = jwt.sign({username: user.username},
                    process.env.TOKEN_KEY, {expiresIn: "1h"})

                // res.header("auth-token", token)
                res.cookie("access_token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                  })
                  
                // res.redirect("/utama")
                return res.json({
                    status:200,
                    message: "Login Berhasil",
                })
                return res
            } else {
                return res.json({
                    status:400,
                    message: "Nama dan Password tidak Sama",
                })
                res.status(400).send("Nama dan password tidak sama")
            }
        } catch (error) {
        }
    },
    addUser: (req, res) => {
        console.log(req.body);
        try {
            const data = req.body
            
            const saltRounds = 10
            const hash = bcrypt.hashSync(data.password, saltRounds)
            data.password = hash
        
            const user = new usr(data)
            user.save()

            res.redirect('/');
        } catch (error) {
            return res.status(400).send("Aduh eror registrasdefefi")
        }
    }
}