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
  res.send("jenish-payment-service is running...");
});


app.get("/payment", async (req, res) => {
  const random = Math.random();


  const payment = payments[Math.floor(Math.random() * payments.length)];


  if (random < 0.2) {
    log(`ERROR: Payment ${payment.id} failed randomly`);
    return res.status(500).json({ message: "Random failure occurred" });
  }


  if (random < 0.3) {
    log(`WARN: Slow processing for payment ${payment.id}`);
    await new Promise(r => setTimeout(r, 2000));
  }


  log(`INFO: Processed payment ID 9999 (actual: ${payment.id})`);


  return res.json({
    status: "success",
    payment
  });
});


app.listen(PORT, () => {
  log(`jenish-payment-service running on port ${PORT}`);
});

