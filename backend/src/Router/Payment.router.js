require("dotenv").config();

const { Router } = require("express");
const Insta = require("instamojo-nodejs");
const PaymentModel = require("../Model/Payment.model");

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
    data.redirect_url = "https://tata1mg-clone-nem201.vercel.app/";
    data.email = req.body.email;
    data.phone = req.body.phone || "1234567890";
    data.send_email = true;
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
PaymentRouter.post("/pay/:id", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  Insta.getPaymentRequestStatus(id, async function (error, response) {
    if (error) {
      // Some error
    } else {
      console.log(response);
      if (response.success == true) {
        const payload = {
          id: id,
          payment_id: response.payment_request.payments[0].payment_id,
          status: response.payment_request.payments[0].status,
          amount: response.payment_request.payments[0].amount,
          buyer_name: response.payment_request.payments[0].buyer_name,
          buyer_phone: response.payment_request.payments[0].buyer_phone,
          buyer_email: response.payment_request.payments[0].buyer_email,
          instrument_type: response.payment_request.payments[0].instrument_type,
          billing_instrument:
            response.payment_request.payments[0].billing_instrument,
          created_at: response.payment_request.payments[0].created_at,
        };
        const payment = await PaymentModel.findOne({ userId: userId });
        if (payment) {
          const updatePayment = await PaymentModel.findOneAndUpdate(
            { userId: userId },
            { $push: { paymentDetails: payload } }
          );
          const getPayment = await PaymentModel.findOne({ userId: userId });
          if (getPayment) {
            res.status(200).send({
              message: "Payment Details",
              data: getPayment.paymentDetails,
            });
          }
        } else {
          const UserPayment = new OtpModel({
            userId: userId,
            paymentDetails: [payload],
          });

          await UserPayment.save();
          const getPayment = await PaymentModel.findOne({ userId: userId });
          if (getPayment) {
            res.status(200).send({
              message: "Payment Details",
              data: getPayment.paymentDetails,
            });
          }
        }
      }
      res.status(404).send({ message: "some error", response });
    }
  });
});

module.exports = PaymentRouter;
