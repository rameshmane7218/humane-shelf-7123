const { Schema, model } = require("mongoose");

const PaymentSchema = Schema({
  userId: String,
  paymentDetails: [
    {
      id: String,
      paymentId: String,
      status: String,
      amount: String,
      buyer_name: String,
      buyer_phone: String,
      buyer_email: String,
      instrument_type: String,
      billing_instrument: String,
      created_at: String,
    },
  ],
});

const PaymentModel = model("payment", PaymentSchema);

module.exports = PaymentModel;
