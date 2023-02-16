const Carton = require("../models/carton.model");

exports.createCarton = (req, res) => {
  const {
    user,
    title,
    description,
    playdate,
    winprize,
    price,
    cant,
    stalls,
    lottery,
  } = req.body;
  const carton = new Carton({
    user,
    title,
    description,
    winprize,
    price,
    cant,
    stalls,
    lottery,
    winnumber: 0,
    playdate,
  });

  carton.save((error, carton) => {
    if (error) return res.status(400).json({ error });
    if (carton) {
      res.status(200).json({ carton, files: req.files });
    }
  });
};

exports.get = (req, res) => {

  const { id, page } = req.params;

  if (id === '0') {
    Carton.find()
      .limit(page)
      .exec((error, cartons) => {
        if (error) return res.status(400).json({ error });
        if (cartons) {
          res.status(200).json({ cartons });
        }
      });
  } else {
    Carton.find({ _id: { $gt: id } })
      .limit(page)
      .exec((error, cartons) => {
        if (error) return res.status(400).json({ error });
        if (cartons) {
          res.status(200).json({ cartons });
        }
      });
  }
};

exports.getbyUser = (req, res) => {
  const id = req.params.id;
  Carton.find({ user: id }).exec((error, cartons) => {
    if (error) return res.status(400).json({ error });
    if (cartons) {
      res.status(200).json({ cartons });
    }
  });
};

exports.getbyId = (req, res) => {
  const id = req.params.id;
  Carton.find({ _id: id }).exec((error, cartons) => {
    if (error) return res.status(400).json({ error });
    if (cartons) {
      res.status(200).json({ cartons });
    }
  });
};

exports.updateStalls = (req, res) => {
  const { stalls, id } = req.body;
  
  if (stalls.gambler._id) {
    Carton.findOneAndUpdate(
      { _id: id, "stalls._id": stalls._id },
      {
        $set: {
          "stalls.$.gambler":
          {
            _id: stalls.gambler._id,
            firstname: stalls.gambler.firtsname,
          },
          "stalls.$.state": stalls.state
        }
      },
      { returnOriginal: false }
    ).exec((err, carton) => {

      if (err) {
        res.send(err);
      }

      res.json(carton);
    });
  } else {
    Carton.findOneAndUpdate(
      { _id: id, "stalls._id": stalls._id },
      {
        $set: {
          "stalls.$.state": stalls.state
        }
      },
      { returnOriginal: false }
    ).exec((err, carton) => {
      if (err) {
        res.send(err);
      }
      res.json(carton);
    });
  }
};

exports.updateState = (req, res) => {
  const { stalls, id } = req.body;

  Carton.findOneAndUpdate(
    { _id: id, "stalls._id": stalls._id },
    {
      $set:
      {
        "stalls.$.state": stalls.state    
      }
    },
    { returnOriginal: false }
  ).exec((err, carton) => {
    if (err) {
      res.send(err);
    }
    res.json(carton);
  });
};
