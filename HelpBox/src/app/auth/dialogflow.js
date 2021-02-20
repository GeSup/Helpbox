const sonicx = require('sonicx');
const googleAuth = require('google-oauth-jws');

const config = {
  "private_key": process.env.private_key,
  "client_email": process.env.private_key,
}

const getToken = async () => {
  return new Promise((resolve, reject) => {
    googleAuth.authenticate(
      {
        email: process.env.private_key,
        key: process.env.private_key,
        scopes: ['https://www.googleapis.com/auth/cloud-platform', 'https://www.googleapis.com/auth/dialogflow'],
      },
      (err, token) => {
        resolve(token);
      },
    );
  });
}

sonicx.route('/token', [
  {
    controller: async (req, res) => {
      let token = await getToken();
      res.send({token});
    }
  },

]);

sonicx.listen(4000, () => console.log("Listening on 4000"))
