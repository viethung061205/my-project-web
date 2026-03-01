const express = require("express");
const router = express.Router();
const vnpayController = require("../api/vnpay");

router.post("/save_booking", vnpayController.saveBooking); // Để lưu đơn Pending
router.post("/create_payment_url", vnpayController.createPaymentUrl);
router.post("/verify_payment", vnpayController.verifyPayment); // Để update Success/Failed

module.exports = router;