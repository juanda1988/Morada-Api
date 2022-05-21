const auth = (email, password) => {
  if (email === "juan@cedesistemas.edu.co" && password === "123456") {
    return {
      statusHttp: 200,
      response: {
        token: "xxxxyyyyzzzzwwwwttttt",
      },
    };
  }
  return {
      statusHttp: 401,
      response: {
          message: 'User unauthorized'
      }
  }
};

const register = () => {};

module.exports = {
    auth,
    register
}
