var chord = function (text) {
  var self = this;
  var chord_text = text;
  self.actual_chord = chord_text;
  
  self.isValid = function(){
    var notes = "^([CDEFGAB])";
    var accidentals = "(#|##|b|bb)?";
    var chords = "(m|\\+5|m-5|maj7|m\\+7|7|m7|maj\\+5|m7-5|dim|sus4|msus4|6|m6|9|m9|-9|m-9)";
    var regex = new RegExp(notes + accidentals + chords); 
    return regex.test(chord_text);  
  }

  self.transpose = function(amount) {
    var scale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    self.actual_chord = chord_text.replace(/[CDEFGAB]#?/g,
                         function(match) {
                           var i = (scale.indexOf(match) + amount) % scale.length;
                           return scale[ i < 0 ? i + scale.length : i ];
                         });
  }
}
