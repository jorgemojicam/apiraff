const config = require("../config/db.config");
const db = require("../models");
const Auth = db.auth;
const Role = db.role;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res, next) => {
   
    const auth = new Auth({        
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        user: {
            firstname: req.body.firstname
        }
    });

    auth.save((err, user) => {
        if (err) {
            res.status(500).send({
                message: err
            });
            return;
        }
        if (req.body.roles) {            
            Role.find({
                name: {
                    $in: req.body.roles
                }
            },
                (err, roles) => {
                    if (err) {
                        res.status(500).send({
                            message: err
                        });
                        return;
                    }
                    auth.roles = roles.map(role => role._id);
                    auth.save(err => {
                        if (err) {
                            res.status(500).send({
                                message: err
                            });
                            return;
                        }
                        res.send({message: "User was registered successfully!"});
                    });
                }
            );
        } else {            
            Role.findOne({
                name: "user"
            }, (err, role) => {
                if (err) {
                    res.status(500).send({
                        message: err
                    });
                    return;
                }
                auth.roles = [role._id];                
                auth.save(err => {
                    if (err) {                        
                        res.status(500).send({
                            message: err
                        });
                        return;
                    }   
                    res.status(200).send({message: "User was registered successfully!"});                    
                });
            });
        }
    });
};
exports.signin = (req, res) => {
    Auth.findOne({
        email: req.body.email
    })
        .populate("roles", "-__v")
        .exec((err, auth) => {
            if (err) {
                res.status(500).send({
                    message: err
                });
                return;
            }
            if (!auth) {
                res.status(401).send({
                    message: "Unauthorized"
                });
                return;
            }
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                auth.password
            );
            if (!passwordIsValid) {
                res.status(401).send({
                    accessToken: null,
                    message: "Unauthorized"
                });
                return;
            }
            var token = jwt.sign({
                id: auth.id
            }, config.SECRET, {
                expiresIn: 86400 // 24 hours
            });
            var authorities = [];
            for (let i = 0; i < auth.roles.length; i++) {
                authorities.push("ROLE_" + auth.roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: auth._id,                
                email: auth.email,
                user: auth.user,
                roles: authorities,
                accessToken: token
            });
        });
};