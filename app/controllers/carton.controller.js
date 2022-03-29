const Carton = require("../models/carton.model");

exports.createCarton = (req, res) => {
  const { user, title, description, value, price, cant, stalls, lottery } =
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
    winnumber: 0,
  });

  carton.save((error, carton) => {
    if (error) return res.status(400).json({ error });
    if (carton) {
      res.status(201).json({ carton, files: req.files });
    }
  });
};

exports.get = (req, res) => {
  Carton.find().exec((error, cartons) => {
    if (error) return res.status(400).json({ error });
    if (cartons) {
      res.status(200).json({ cartons });
    }
  });
};

exports.getbyUser = (req, res) => {
  const { user } = req.body;
  Carton.find({ user: user._id }).exec((error, cartons) => {
    if (error) return res.status(400).json({ error });
    if (cartons) {
      res.status(200).json({ cartons });
    }
  });
};

exports.updateStalls = (req, res) => {
  const { stalls, id } = req.body;

  Carton.updateOne(
    { _id: id, "stalls._id": stalls._id },
    { $set: { "stalls.$.gambler": { _id: stalls.gambler._id } } }
  ).exec((err, carton) => {
    if (err) {
      res.send(err);
    }
    res.json(carton);
  });
};

exports.updateState = (req, res) => {
  const { stalls, id } = req.body;

  Carton.updateOne(
    { _id: id, "stalls._id": stalls._id },
    { $set: { "stalls.$.state": stalls.state } }
  ).exec((err, carton) => {
    if (err) {
      res.send(err);
    }
    res.json(carton);
  });
};
