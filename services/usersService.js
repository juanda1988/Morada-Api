const jwt = require('jsonwebtoken');
const UserModel = require('./../models/userModel');
const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');

const auth = async(email, password) => {
  try {

    const user = await UserModel.findOne({email:email,password:password});
    if (user) {
      const payload = {
        id: user._id,
        role: user.role
      };
      const token = jwt.sign(payload, "millavesecreta");
      return responseOk({ token , role:user.role });
      
    }
    return responseError(401, "user unauthorized");
    
  } catch (error) {
    return responseError(500, 'Server error')
  }
 
};

const info = async (id) =>{
  try {
    const user = await UserModel.findById(id);
    return responseOk({user});
    
  } catch (error) {
    return responseError(500, 'Server error')
  }
}

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
    register,
    info
}
