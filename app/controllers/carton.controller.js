const Carton = require("../models/carton.model");

exports.createCarton = (req, res) => {
  const { user, title, description, value, price, cant, stalls, lottery, winnumber } =
    req.body;
  const carton = new Carton({
    user,
    title: title,
    description: description,
    value,
    price,
    cant,
    stalls,
    lottery,
    winnumber:0,
  });

  carton.save((error, carton) => {
    if (error) return res.status(400).json({ error });
    if (carton) {
      res.status(201).json({ carton, files: req.files });
    }
  });
};

exports.get = (req, res) => {
  Carton.findOne({ user: req.user._id }).exec((error, userAddress) => {
    if (error) return res.status(400).json({ error });
    if (userAddress) {
      res.status(200).json({ userAddress });
    }
  });
};
