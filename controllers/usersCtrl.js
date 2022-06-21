const { auth, register, info, addFavorite} = require('../services/usersService');

const login = async(req, res) => {
  try {
    const user = req.body;
    const { statusHttp, response } = await auth(user.email, user.password);
    res.status(statusHttp).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUser = async(req,res) =>{
  try {
    const {id} = req.payload;
    const {statusHttp,response} = await info(id);
    res.status(statusHttp).json(response);
    
  } catch (error) {
    res.status(500).send(error); 
  }
}

const signup = async (req, res) => {
  try {
    const user = req.body;
    const { statusHttp, response } = await register(user);
    res.status(statusHttp).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const favorites = async (req, res) => {
  try {

    const propertyId = req.body;
    const userId = req.body;
    const {statusHttp, response} = await addFavorite(propertyId,userId);
    res.status(statusHttp).json(response);

  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserFavorites = async(req,res) =>{
  try {
    const filter = req.query;
   
    const {statusHttp, response} = await getFavorites(filter);
    res.status(statusHttp).json(response);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
    login,
    signup,
    getUser,
    favorites,
    getUserFavorites
}