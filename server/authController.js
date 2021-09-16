const User = require('./model/User.js');
const bcrypt = require('bcrypt');

class authController {
    async registration(req, res) {
        const {email, username, password} = req.body;
        console.log(req.body)
        try {
            const userEmail = await User.findOne({
                email: email
            })
            const userName = await User.findOne({
                username: username
            })
            if (userEmail) {
                res.send({
                    error: 'existing email'
                }) 
            } else if (userName) {
                res.send({
                    error: 'existing username'
                })
            } else {
                const hashPassword = bcrypt.hashSync(password, 7);
                const user = await User.create({
                    email: email,
                    username: username,
                    password: hashPassword
                })

                res.send(user)
                console.log(user)
            }
        } catch(e) {

        }
    }

    async login(req, res) {
        const {username, password} = req.body;
        try {
            const user = await User.findOne({
                username: username
            })
            if (!user) {
                res.send({
                    error: 'user doesnt exist'
                })
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword) {
                res.send({
                    error: 'invalid password'
                })
                console.log(validPassword)
            } else {
                res.send('success')
            }
        } catch(e) {
            
        }
    }

    async getUsers(req, res) {
        try {

        } catch(e) {
            
        }
    }
}

module.exports = new authController;