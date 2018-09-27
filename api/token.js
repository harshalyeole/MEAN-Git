var stripe = require("stripe")("sk_test_A7eTlUGNALOK036La4TfL7Ea");

stripe.tokens.create({
  card: {
    "number": '4242424242424242',
    "exp_month": 12,
    "exp_year": 2019,
    "cvc": '123'
  }
}, function(err, token) {
    console.log(token);
  // asynchronously called
});