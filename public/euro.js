document.addEventListener("DOMContentLoaded", function () {
  const genBtn = document.getElementById("genBtn");

  genBtn.addEventListener("click", function () {
    fetch("/euro")
      .then((response) => response.json())
      .then((data) => {
        const olMain = document.getElementById("olMain");
        olMain.innerHTML = "";
        data.numeros.forEach((num) => {
          const li = document.createElement("li");
          li.textContent = num;
          olMain.appendChild(li);
        });

        const olStars = document.getElementById("olStars");
        olStars.innerHTML = "";
        data.stars.forEach((star) => {
          const li = document.createElement("li");
          li.textContent = star;
          olStars.appendChild(li);
        });
      })
      .catch((error) => console.error("Erro :", error));
  });
});
