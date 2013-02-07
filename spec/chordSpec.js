describe("Chord", function() {
  var chord_machine;

  beforeEach(function() {
    chord_machine = new chord("Emaj7");
  });

  it("should get a text chord when initialized", function() {
  });

  it("should chord must be valid", function() {
    expect(chord_machine.isValid()).toBeTruthy();
  });

  it("should can transpose", function() {
    chord_machine.transpose(1);
    expect(chord_machine.actual_chord).toBe("Fmaj7");
  });

});