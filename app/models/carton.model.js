const mongoose = require("mongoose");
const User = require("../models/user.model");

const Carton = mongoose.model(
  "Carton",
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      title: String,
      description: String,
      playdate: Date,
      winprize: Number,
      price: Number,
      cant: Number,
      stalls: [
        {
          numstalls: Number,
          state: Number,          
          gambler:Object,
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
