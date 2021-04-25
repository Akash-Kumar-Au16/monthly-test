const api = "https://type.fit/api/quotes";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

btn.addEventListener("click", getQuote);


function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.text}"`;
      author.innerHTML = `- ${data.author}`;
    });
}