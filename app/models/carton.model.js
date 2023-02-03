const mongoose = require("mongoose");

const Carton = mongoose.model(
  "Carton",
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auth",
        required: true,
      },
      title: {
        type: String,
        required: [true, "Campo requerido"],
      },
      description: {
        type: String,
        required: [true, "Campo requerido"],
      },
      playdate: Date,
      winprize: Number,
      price: Number,
      cant: Number,
      stalls: [
        {
          numstalls: Number,
          state: Number,
          gambler: Object,
        },
      ],
      lotery: String,
      winnumber: Number,
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
