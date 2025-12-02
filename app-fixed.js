const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8080;

const LOG_FILE = path.join(__dirname, "service.log");


function log(msg) {
  const line = `${new Date().toISOString()} ${msg}\n`;
  fs.appendFileSync(LOG_FILE, line);
  console.log(line.trim());
}


let payments = [
  { id: 101, amount: 499 },
  { id: 102, amount: 999 },
  { id: 103, amount: 1499 }
];

app.get("/", (req, res) => {
  res.send("jenish-payment-service is running (fixed version)");
});


app.get("/payment", (req, res) => {

  const payment = payments[Math.floor(Math.random() * payments.length)];


  log(`INFO: Successfully processed payment ID ${payment.id}`);

  return res.json({
    status: "success",
    payment
  });
});

app.listen(PORT, () => {
  log(`jenish-payment-service (FIXED) running on port ${PORT}`);
});
