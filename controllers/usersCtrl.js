const { auth, register } = require('../services/usersService');

const login = (req, res) => {
  try {
    const user = req.body;
    const { statusHttp, response } = auth(user.email, user.password);
    res.status(statusHttp).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const signup = (req, res) => {
  try {
    const user = req.body;
    const { statusHttp, response } = register(user);
    res.status(statusHttp).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
    login,
    signup
}