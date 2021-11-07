const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const usersController = {
  login: (req, res) => {
    return res.render("users/login");
  },
  register: (req, res) => {
    return res.render("users/register");
  },
  // Create -  Method to store
  store: (req, res) => {
    let newUser = {
      id: users[users.length - 1].id + 1,
      ...req.body,
    };

    if (req.file == undefined) {
      newUser.image = "pizza1.jpg";
    } else {
      newUser.image = req.file.filename;
    }

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
    res.redirect("/");
  },
  list: (req, res) => {
    res.render("users/userList", { users: users });
  },
  // Update - Form to edit
  editar: (req, res) => {
    let id = req.params.id;
    let userToEdit = users.find((user) => user.id == id);
    res.render("users/editarUsuario", { userToEdit });
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
    res.redirect("users/userList");
  },
  detail: (req, res) => {
    let id = req.params.id;
    let user = users.find((user) => user.id == id);
    res.render("users/detail", { user });
  },
  destroy: (req, res) => {
    let id = req.params.id;
    let finalUsers = users.filter((user) => user.id != id);
    fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, " "));
    users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    res.redirect("users/userList");
  },
};

module.exports = usersController;
