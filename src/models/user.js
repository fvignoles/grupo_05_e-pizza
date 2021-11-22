const fs = require('fs');

const path = require('path');
const { pathToFileURL } = require('url');

const userPathFile = path.join(__dirname, '../data/usersDataBase.json');

const User = {
    
    getData: function () {
        console.log("hola");
        return JSON.parse(fs.readFileSync(userPathFile, 'utf-8'))
     },

    generateId : function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },
    
    findAll: function(){
        return this.getData();
    },

    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    create: function(userData){
        let allUsers = this.findAll();
        let newUser ={
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(userPathFile, JSON.stringify(allUsers, null, ' '));                            
        return newUser;
    },

    delete: function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(pathToFileURL, JSON.stringify(finalUsers, null, ' '));   
        return true;
    }
}

module.exports = User;
