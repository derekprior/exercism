var Anagram = function(word) {
  this.word = word.toLowerCase();
  var alphabetizedWord = alphabetize(this.word);

  var matches = function(candidates) {
    if (!Array.isArray(candidates)) {
      candidates = [].slice.call(arguments, 0);
    }

    return candidates.filter(function(candidate) {
      return isAnagram(candidate.toLowerCase());
    });
  };

  function isAnagram(candidate) {
    return this.word !== candidate &&
      alphabetizedWord === alphabetize(candidate);
  }

  function alphabetize(unsortedWord) {
    return unsortedWord.split('').sort().join('');
  }

  return { matches: matches };
};

module.exports = Anagram;
