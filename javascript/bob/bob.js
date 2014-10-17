var Bob = function() {
  var isSilentTreatment = function(input) {
    return /^\s*$/.test(input);
  };

  var isShouting = function(input) {
    return input.toUpperCase() === input && input.toLowerCase() !== input;
  };

  var isQuestion = function(input) {
    return input.charAt(input.length - 1) === '?';
  };

  this.hey = function(input) {
    if (isSilentTreatment(input)) {
      return 'Fine. Be that way!';
    }

    if (isShouting(input)) {
      return 'Whoa, chill out!';
    }

    if (isQuestion(input)) {
      return 'Sure.';
    }

    return 'Whatever.';
  };
};

module.exports = Bob;
