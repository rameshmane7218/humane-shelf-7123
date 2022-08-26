require("dotenv").config();

const { Router } = require("express");
const Insta = require("instamojo-nodejs");

const PaymentRouter = Router();

const API_KEY = process.env.INSTAMOJO_API_KEY;
const AUTH_TOKEN = process.env.INSTAMOJO_AUTH_TOKEN;

PaymentRouter.post("/pay", async (req, res) => {
  try {
    Insta.setKeys(API_KEY, AUTH_TOKEN);

    Insta.isSandboxMode(true);

    const data = new Insta.PaymentData();
    data.purpose = req.body.description;
    data.currency = "INR";
    data.amount = req.body.amount;
    data.buyer_name = req.body.name;
    data.redirect_url = "http://localhost:3000/payment";
    data.email = req.body.email;
    data.phone = req.body.phone || "1234567890";
    data.send_email = false;
    data.send_sms = false;
    data.webhook = `http://www.example.com/payment/webhook`;
    data.allow_repeated_payments = false;

    Insta.createPayment(data, (error, response) => {
      if (error) {
        console.log("Sometiong went wront", error);
      } else {
        const responseData = JSON.parse(response);
        res.status(200).send(responseData);
      }
    });
  } catch (err) {
    res.status(500).send(err.massage);
  }
});

module.exports = PaymentRouter;
