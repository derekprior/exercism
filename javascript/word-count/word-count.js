var WordCount = function(input) {
  var words = input.split(/\s/);
  var counts = {};

  var tally = function(word) {
    this[word] = (this[word] || 0) + 1;
  };

  words.forEach(tally, counts);
  return counts;
};

module.exports = WordCount;
