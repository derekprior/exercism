var translations = {
  A: 'U',
  T: 'A',
  C: 'G',
  G: 'C'
};

function toRna(strand) {
  strand = strand.split('');
  return strand.map(translate).join('');
}

function translate(nucleotide) {
  return translations[nucleotide];
}

module.exports = toRna;
