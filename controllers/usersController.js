const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../src/data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    login: (req,res) => {
        return res.render('users/login');
    },
    register: (req,res) => {
        return res.render('users/register');
    },
    list: (req,res) => {
        res.render('users/userList',{'users': users});
    },
}

module.exports = usersController;