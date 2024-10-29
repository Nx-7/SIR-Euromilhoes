const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/hello", function (req, res) {
  res.send("Hello!");
});

app.get("/euro", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  const response = bet();
  res.send(JSON.stringify(response));
});

function generate(n, min, max) {
  let set = new Set();
  while (set.size < n) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    set.add(num);
  }
  return Array.from(set).sort((a, b) => a - b);
}

function bet() {
  const numbers = generate(5, 1, 50);
  const stars = generate(2, 1, 12);
  const newBet = {
    numeros: numbers,
    stars: stars,
  };
  return newBet;
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
