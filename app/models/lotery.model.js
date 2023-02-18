const mongoose = require("mongoose");

const Carton = mongoose.model(
    "Lotery",
    new mongoose.Schema(
        {
            name: {
                type: String,
                required: [true, "Campo requerido"],
            },
            playdate: {
                type: Array,
                required: [true, "Campo requerido"],
            }
        },
        {
            timestamps: {
                createdAt: "created",
                updatedAt: "updated",
            },
        }
    )
);
module.exports = Carton;
