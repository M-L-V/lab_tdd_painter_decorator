const assert = require('assert');
const Paintcan = require('../paintcan.js')


describe('Paintcan', function(){
  let paintcan;
  beforeEach(function() {
    paintcan = new Paintcan(10) //arrange
  });

  it('should be empty of paint', function(){
    paintcan.emptyPaint(10);
    const actual = paintcan.numLitresPaint;        //act
    assert.strictEqual(actual, 0);   //assert
  });

  it('should check paintcan is empty', function () {
    paintcan.emptyPaint(10)
    const actual = paintcan.checkIfEmpty();
    assert.strictEqual(actual, true);
  });


});
