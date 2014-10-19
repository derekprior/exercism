function DNA(strand) {
  this.strand = strand || "";

  if (/[^ATCG]/.test(this.strand)) {
    throw "Invalid DNA";
  }

  var count = function(nucleotide) {
    var regex = new RegExp(nucleotide, "g");
    var matches = this.strand.match(regex) || [];
    return matches.length;
  };

  var histogram = function() {
    return {
      A: count('A'),
      T: count('T'),
      C: count('C'),
      G: count('G')
    };
  };

  return this;
}

module.exports = DNA;
