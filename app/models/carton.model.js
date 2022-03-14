const mongoose = require("mongoose");
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
      value: Number,
      price: Number,
      cant: Number,
      stalls: [
        {
          numstalls: Number,
          state: Number,
          gambler: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
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
