var Anagram = function(word) {
  var alphabetizedWord = alphabetize(word);
  var lowerCaseWord = word.toLowerCase();

  var matches = function(candidates) {
    if (candidates.constructor !== Array) {
      candidates = [].slice.call(arguments, 0);
    }

    return candidates.filter(function(candidate) {
      return isAnagram(candidate.toLowerCase());
    });
  };

  function isAnagram(candidate) {
    return alphabetizedWord === alphabetize(candidate) &&
      lowerCaseWord !== candidate.toLowerCase();
  }

  function alphabetize(unsortedWord) {
    return unsortedWord.toLowerCase().split('').sort().join('');
  }

  return { matches: matches };
};

module.exports = Anagram;
