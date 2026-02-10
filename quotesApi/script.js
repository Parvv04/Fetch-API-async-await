let quote = document.getElementById("quote");
let author = document.getElementById("author");
let newQuoteBtn = document.getElementById("new-quote");

async function generateQuote() {
    let response = await fetch("https://dummyjson.com/quotes/random")
    let data = await response.json();

    quote.textContent = `"${data.quote}"`;
    author.textContent = `-${data.author}`;
}


newQuoteBtn.addEventListener("click", generateQuote);

generateQuote();