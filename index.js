function titleCased() {
  const tutorialNames = [
    "what does the this keyword mean?",
    "What Is The Constructor OO Pattern?",
    "Implementing Blockchain Web API",
    "the test driven development workflow",
    "what is NaN and how can we check for it",
    "what is the difference between stopPropagation and preventDefault?",
    "immutable state and pure functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?"
  ];

  return tutorialNames.map(function(name) {
    return name.split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });
}

