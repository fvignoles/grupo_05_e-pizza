let db = require("../database/models");

let usersDB = {
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
            user_firstname : req.body.firstName,
            user_lastname : req.body.lastName,
            user_email : req.body.email,
            user_password : req.body.password,
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