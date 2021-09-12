//can be deleted
const sonicx = require('sonicx');
const express = require('express');
const cors = require("cors");
const googleAuth = require('google-oauth-jwt');
const dialogflowConfig = require('./dialogflowConfig');

const app = express();
app.use(cors());
const config = {
  "private_key": process.env.private_key,
  "client_email": process.env.client_email,
}
sonicx.configuration = {
  responseHeaders: {
    "Access-Control-Allow-Origin": "http://localhost:4200"
  }
}
const getToken = async () => {
  console.log('process.env.private_key :>> ', dialogflowConfig.private_key);
  console.log('process.env.client_email :>> ', dialogflowConfig.client_email);
  return new Promise((resolve, reject) => {
    googleAuth.authenticate(
      {
        email: dialogflowConfig.client_email,
        key: dialogflowConfig.private_key,
        scopes: ['https://www.googleapis.com/auth/cloud-platform', 'https://www.googleapis.com/auth/dialogflow'],
      },
      (err, token) => {
        resolve(token);
      },
    );
  });
}

sonicx.route('/token', [
  // app.route('/token', [
  {
    controller: async (req, res) => {
      let token = await getToken();
      console.log('token :>> ', token);
      res.send({token});
    }
  },

]);

sonicx.listen(4000, () => console.log("Listening on 4000"))
// app.listen(4000, () => console.log("Listening on 4000"))
