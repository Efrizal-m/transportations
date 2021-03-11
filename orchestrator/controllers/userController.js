const {User} = require('../models')
const { comparePassword } = require("../helpers/password");
const { generateToken } = require("../helpers/jwt");

class UserController {   
    static async register(req, res, next) {
        try {      
            let { username, email, password } = req.body;
            if (!username) { username = email.split('@')[0] }
            const payload = { username, email, password }
            const data = await User.login(payload);
            if (!data) {
                const response = await User.register(payload)
                res.status(201).json(response.ops[0]);
            } else {
                throw { status:401, message: "Email is already used" }                
            }
          } catch (error) {
            next(error)
          }
    }

    static login(req, res, next) {
        const { email, password } = req.body;
        const payload = { email, password };
        User.login(payload)
          .then((response) => {
            if (!response) {
              throw { status: 400, message: `Invalid account` };
            } else if (comparePassword(payload.password, response.password)) {
              const access_token = generateToken({
                id: response._id,
                email: response.email,
              });
              res.status(200).json({ access_token, user: response.username });
            } else {
              throw { status: 400, message: `Invalid email/password` };
            }
          })
          .catch((error) => {
            next(error)
          });
      }}

module.exports = UserController