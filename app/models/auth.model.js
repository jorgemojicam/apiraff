const mongoose = require("mongoose");
const Auth = mongoose.model(
    "Auth",
    new mongoose.Schema({
        email: {
            type: String,
            unique: true,
            lowercase: true,
            required: [true, "Campo requerido"],
            match: [/\S+@\S+\.\S+/, 'No corresponde a un email']
        },
        password: String,
        user: {
            firstname: {
                type: String,                
                lowercase: true,
                required: [true, "Campo requerido"],
            },
            lastname: String,
            celular: String,
            gender: String,
            burndate: Date
        },
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    })
);
module.exports = Auth;