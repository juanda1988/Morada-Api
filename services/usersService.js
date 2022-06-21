const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('./../models/userModel');
const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');
const favoriteModel = require('./../models/favoriteModel');

const auth = async(email, password) => {
  try {

    const user = await UserModel.findOne({email:email});
    if (user) {
      const match = await bcrypt.compare(password,user.password);
      if (match) {
        const payload = {
          id: user._id,
          role: user.role
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET);
        return responseOk({ token , role:user.role });
      };
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
    const passwordEncrypted = await bcrypt.hash(userData.password, 11);
    userData.password = passwordEncrypted;
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

const addFavorite = async (propertyId,userId) => {
  try {
    const favorites = new favoriteModel(propertyId,userId);
    await favorites.save();
    return responseOk({favorites});
  } catch (error) {
    return responseError(500,'Server error');
  }
}

const getFavorites = async(filter) => {
  try {
    const query = buildQueryFilter(filter);
    const favorites = await favoriteModel.find(query)
    return responseOk({favorites})
  } catch (error) {
    return reportError(500, 'Server error');
  }
}

module.exports = {
    auth,
    register,
    info,
    addFavorite,
    getFavorites
}
