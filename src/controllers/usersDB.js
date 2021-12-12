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
        console.log(req.body);
        db.User.create({
            user_category_id : "2",
            user_firstname :"a" ,
            user_lastname : "g",
            user_email : "u",
            user_password :"s" ,
            user_image : "agustin"
        })
            .then((resultados) => {
                res.send("Llegaste");
            })
            .catch((resultados) =>{
                res.send("error");
            })
    }
}

module.exports = usersDB;