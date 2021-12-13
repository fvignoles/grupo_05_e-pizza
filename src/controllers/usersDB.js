let db = require("../database/models");

let usersDB = {
    register: (req, res) => {
        return res.render("users/register");
      },
    findAll: function(req, res){
        db.User.findAll()
            .then((resultados) => {
                res.json(resultados);
            } )
    },
    create : function(req, res){
        db.User.create({
            user_category_id :2,
            user_firstname :req.body.firstName ,
            user_lastname : req.body.lastName,
            user_email : req.body.email,
            user_password :req.body.password,
            user_image : req.file.filename,
            user_active: 1
        })
            .then(() => {
                res.redirect("/users/login");
            })
            .catch((error) =>{
                console.log(error);
            })
    }
}

module.exports = usersDB;