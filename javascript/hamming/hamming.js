var compute = function(strandA, strandB) {
  var distance = 0;
  var length = Math.min(strandA.length, strandB.length);

  for (var i = 0; i < length; i++) {
    if (strandA[i] !== strandB[i]) {
      distance++;
    }
  }

  return distance;
};

exports.compute = compute;
