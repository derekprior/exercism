var Bob = function() {
  this.hey = function(input) {
    isSilentTreatment = function(input) { return false; }
    isShouting = function(input) { return false; }
    isQuestion = function(input) { return false; }

    if (isSilentTreatment(input)) { return 'Fine. Be that way!'; }
    if (isShouting(input)) { return 'Woah, chill out!'; }
    if (isQuestion(input)) { return 'Sure.'; }
    return "Whatever.";
  }
};
module.exports = Bob;
