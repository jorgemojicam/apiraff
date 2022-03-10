const mongoose = require("mongoose");
const Carton = mongoose.model(
  "Carton",
  new mongoose.Schema({
    title: String,
    description: String,
    value: Double,
    price: Double,
    cant: int,
    stalls: [
      {
        numstalls:int,
        state: int,
        user:String
      },
    ],
    lotery:String,
    winnumber:int
  })
);
module.exports = Carton;
