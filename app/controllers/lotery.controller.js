const Lotery = require("../models/lotery.model");

exports.create = (req, res) => {
    const { name, playdate } = req.body;
    const lotery = new Lotery({
        name, playdate
    });

    lotery.save((error, lotery) => {
        if (error) return res.status(400).json({ error });
        if (lotery) {
            res.status(200).json({ lotery, files: req.files });
        }
    });
};

exports.get = (req, res) => {
    Lotery.find()
        .exec((error, lotery) => {
            if (error) return res.status(400).json({ error });
            if (lotery) {
                res.status(200).json({ lotery });
            }
        });

};



exports.update = (req, res) => {
    const { id, name, playdate } = req.body;
    Lotery.findOneAndUpdate({ id_: id },
        {
            name: name,
            playdate: playdate
        },
        { returnOriginal: false }
    ).exec((err, carton) => {
        if (err) {
            res.send(err);
        }
        res.json(carton);
    });
};


