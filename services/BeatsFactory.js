beatAssignment.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};
  factory.beats = [];
  factory.addBeat = function() {
    factory.beats.push({ beatTitle: factory.beatTitle, id:factory.beats.length + 1, reporters: []});
    factory.beatTitle = null;
  };
  return factory;
});
