function verse(bottles) {
  return howMany(bottles) + takeOneDown(bottles);
}

function sing(start, end) {
  end = end || 0;
  var verses = [];

  for (var i = start; i >= end; i--) {
    verses.push(verse(i));
  }

  return verses.join("\n");
}

function howMany(bottles) {
  pluralized = pluralize(bottles);

  return pluralized + "of beer on the wall, " +
    pluralized.toLowerCase() + "of beer.\n";
}

function takeOneDown(bottles) {
  if (bottles === 0) {
    return goToTheStore();
  } else {
    return drinkUp(bottles);
  }
}

function goToTheStore() {
  return "Go to the store and buy some more, " +
    pluralize(99) + "of beer on the wall.\n";
}

function drinkUp(bottles) {
  pluralized = pluralize(bottles - 1);
  article = takeWhat(bottles);

  return "Take" + article + "down and pass it around, " +
    pluralized.toLowerCase() + "of beer on the wall.\n";
}

function pluralize(bottles) {
  if (bottles > 1) {
    return bottles + " bottles ";
  } else if (bottles === 1) {
    return bottles + " bottle ";
  } else {
    return "No more bottles ";
  }
}

function takeWhat(bottles) {
  if (bottles === 1) {
    return " it ";
  } else {
    return " one ";
  }
}

module.exports = {
  verse: verse,
  sing: sing
};
