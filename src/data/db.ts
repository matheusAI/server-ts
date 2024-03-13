import mongoose from "mongoose";

await mongoose.connect("mongodb://127.0.0.1/users",{})
.then(() => {
    console.log("mongodb conectado com sucesso")
}).catch((err) => {
    console.log("houve um error ao se conectar com mongodb: "+ err)
});