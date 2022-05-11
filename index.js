/** @format */
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "message from musty man twilio testing",
    from: "+19793664294",
    to: "+2349038580066",
  })
  .then((message) => console.log(message))
    .catch((err) => console.log(err));
  
