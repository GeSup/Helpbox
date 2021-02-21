//can be deleted
const sonicx = require('sonicx');
const googleAuth = require('google-oauth-jwt');



const config = {
  "private_key": process.env.private_key,
  "client_email": process.env.client_email,
}

const getToken = async () => {
  console.log('process.env.private_key :>> ', process.env.private_key);
  console.log('process.env.client_email :>> ', process.env.client_email);
  return new Promise((resolve, reject) => {
    googleAuth.authenticate(
      {
        email: process.env.client_email,
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
      console.log('token :>> ', token);
      res.send({token});
    }
  },

]);

sonicx.listen(4000, () => console.log("Listening on 4000"))
