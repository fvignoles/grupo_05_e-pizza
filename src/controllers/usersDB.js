const db = require("../database/models");
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
// const sequelize = db.sequelize;
// const { Op } = require("sequelize");

let usersDB = {
    register: (req, res) => {
        return res.render("users/register");
    },
    login: (req, res) => {
        return res.render("users/login");
    },

    create: function (req, res) {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        // let userInDB = User.findByField('email', req.body.email);
        db.User.findOne({
            where: {
                user_email: req.body.email
            }
        })
            .then((userInDB) => {
                if (userInDB) {
                    return res.render('users/register', {
                        errors: {
                            email: {
                                msg: 'Este email ya está registrado'
                            }
                        },
                        oldData: req.body
                    });
                }

                db.User.create({
                    user_category_id: 2,
                    user_firstname: req.body.firstName,
                    user_lastname: req.body.lastName,
                    user_email: req.body.email,
                    user_password: bcryptjs.hashSync(req.body.password, 10),
                    user_image: req.file.filename,
                    user_active: 1
                })

            })
            .then(() => {
                res.redirect("/users/login");
            })
            .catch((error) => {
                console.log(error);
            })
    },
    loginProcess: (req, res) => {
        // let userToLogin = User.findByField('email', req.body.email);

        db.User.findOne({
            where: {
                user_email: req.body.email
            }
        })
            .then((userToLogin) => {


                if (userToLogin) {
                    let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.user_password);
                    if (isOkThePassword) {
                        // delete userToLogin.password;
                        req.session.userLogged = userToLogin;
                        return res.redirect('profile');
                    }
                    return res.render('users/login', {
                        errors: {
                            email: {
                                msg: 'Credenciales invalidas.'
                            }
                        }
                    })
                }

                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: 'No se encuentra el mail en la base de datos'
                        }
                    }
                });

            })
            .catch((error) => {
                console.log(error);
            })
    },
    profile: (req, res) => {
        return res.render("users/profile", {
            user: req.session.userLogged
        });
    },
}

module.exports = usersDB;