const mongoose = require('mongoose')

const URL = "mongodb+srv://praveenyad99:praveenyad99@echodb.phsrzup.mongodb.net/?retryWrites=true&w=majority"
const dbConnect = () => {

    mongoose.connect(URL)
    const conn = mongoose.connection;

    conn.on("connected", () => {
        console.log("Connected")
    })

    conn.on("disconnected", () => {
        console.log("Disconnected")
    })
    
    conn.on("error", (err) => {
        console.log(err)
    })
}
module.exports = dbConnect