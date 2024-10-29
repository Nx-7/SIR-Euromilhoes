express = require("express");

app = express();

app.use(express.static("public"));

app.get("/hello", function (req, res) {
  res.send("Hello!");
});

app.get("/euro", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  //res.send("{numeros: [1,2,3,4,5]. starts: [1,2]}");
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
  numbers = generate(5, 1, 50);
  stars = generate(2, 1, 12);
  const newBet = {
    numeros: numbers,
    stars: stars,
  };
  return newBet;
}

console.log("here");
app.listen(3000, () => console.log("Listening"));