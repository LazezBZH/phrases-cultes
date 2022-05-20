const quotes = require("../quotes");

const findRandomMatch = (keyword) => {
  const mquotes = findAllMatches(keyword);

  const mMatchRandom = mquotes[Math.floor(Math.random() * mquotes.length)];

  return mMatchRandom;
};

function quoteMatches(keyword) {
  return (quote) => {
    let quoteText = quote.quote.toLowerCase();

    let filmName = quote.film.toLowerCase();

    return (
      quoteText.includes(keyword.toLowerCase()) ||
      filmName.includes(keyword.toLowerCase())
    );
  };
}

const findAllMatches = (keyword) => {
  return quotes.filter(quoteMatches(keyword));
};

module.exports = {
  findRandomMatch,
  findAllMatches,
};
