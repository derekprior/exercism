var WordCount = function(input) {
  var words = input.split(/\s/);

  var tally = function(counts, word) {
    counts[word] = (counts[word] || 0) + 1;
    return counts;
  };

  return words.reduce(tally, {});
};

module.exports = WordCount;
