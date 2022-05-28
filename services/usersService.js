const UserModel = require('./../models/userModel');
const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');

const auth = (email, password) => {
  if (email === "juan@cedesistemas.edu.co" && password === "123456") {
    return responseOk({ token: "xxxxyyyyzzzzwwwwttttt" });
  }
  return responseError(401, "user unauthorized");
};

const register = async (userData) => {
  try {
    if (await validateEmail(userData.email)) {
      return responseError(400, 'Email is alredy used');
    }
    const user = new UserModel(userData);
    await user.save();
    return responseOk({ user });
  } catch (error) {
    console.log('error', error);
    return responseError(500, 'Server error');
  }
};

const validateEmail = async (email) => {
  try {
    const checkEmail = await UserModel.findOne({ email: email });
    return checkEmail ? true : false;
  } catch (error) {
    return responseError(500, 'Server error');
  }
}

module.exports = {
    auth,
    register
}
