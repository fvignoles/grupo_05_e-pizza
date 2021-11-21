const bcryptjs = require('bcryptjs');
const fs = require("fs");
const path = require("path");
const {validationResult} = require('express-validator');

const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const User = require('../models/user.js');

const usersController = {
  login: (req, res) => {
    return res.render("users/login");
  },
  register: (req, res) => {
    return res.render("users/register");
  },
  // Create -  Method to store
  store: (req, res) => {
    const resultValidation = validationResult(req);

    if(resultValidation.errors.length > 0){
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData : req.body
      });
    }

    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      image: req.file.filename
  }

    User.create(userToCreate);
    return res.send("LLEGAASTE");
  },


  // store: (req, res) => {
  //   const resultValidation = validationResult(req);

  //   if(resultValidation.errors.length > 0){
  //       return res.render("users/register", {
  //       errors: resultValidation.mapped(),
  //       oldData: req.body
  //     });
  //   }

  //   // let newUser = newUser.findByFiel ('email', req.body.email);

  //   // if (newUser) {
  //   //   return res.render("users/register", {
  //   //     errors: {
  //   //       email: {
  //   //         msg: 'Este email ya esta registrado'
  //   //     }        
  //   //   },
  //   //   oldData: req.body
  //   // });

  //   let newUser = {
  //     id: users[users.length - 1].id + 1,
  //     ...req.body,
  //     password: bcryptjs.hashSync (req.body.password, 10),
  //   };

  //   if (req.file == undefined) {
  //     newUser.image = "pizza1.jpg";
  //   } else {
  //     newUser.image = req.file.filename;
  //   }
    
  //   users.push(newUser);
  //   fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
  //   res.redirect("/users/login");
  // },
  list: (req, res) => {
    res.render("/users/list", { users: users });
  },
  // Update - Form to edit
  editar: (req, res) => {
    let id = req.params.id;
    let userToEdit = users.find((user) => user.id == id);
    res.render("/users/edit", { userToEdit });
  },

  // Update - Method to update
  update: (req, res) => {
    let id = req.params.id;
    let usuarioSeleccionado = users.find((user) => user.id == id);

    let userToEdit = {
      id: usuarioSeleccionado.id,
      ...req.body,
      image: usuarioSeleccionado.image,
    };

    let newUsers = users.map((user) => {
      if (user.id == usuarioSeleccionado.id) {
        return (user = { ...userToEdit });
      }
      return user;
    });

    fs.writeFileSync(usersFilePath, JSON.stringify(newUsers, null, " "));
    users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    res.redirect("/users/list");
  },
  detail: (req, res) => {
    let id = req.params.id;
    let user = users.find((user) => user.id == id);
    res.render("/users/detail", { user });
  },
  destroy: (req, res) => {
    let id = req.params.id;
    let finalUsers = users.filter((user) => user.id != id);
    fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, " "));
    users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    res.redirect("/users/list");
  },
};

module.exports = usersController;
