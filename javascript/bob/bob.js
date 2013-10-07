var Bob = function() {
  this.hey = function(input) {
    isSilentTreatment = function(input) { return input.length === 0 || /^\s*$/.test(input) }
    isShouting = function(input) { return input.toUpperCase() === input; }
    isQuestion = function(input) { return input.charAt(input.length - 1) === '?'; }

    if (isSilentTreatment(input)) { return 'Fine. Be that way!'; }
    if (isShouting(input)) { return 'Woah, chill out!'; }
    if (isQuestion(input)) { return 'Sure.'; }
    return "Whatever.";
  }
};
module.exports = Bob;
