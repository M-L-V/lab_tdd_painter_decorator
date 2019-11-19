const assert = require('assert');
const Room = require('../room.js');


describe('Room', function(){
  let room;
  beforeEach(function() {
    room = new Room( 100, 0) //arrange
  });

  it('should have an area in sq meters', function(){
    const actual = room.areaInMeters;        //act
    assert.strictEqual(actual, 100);   //assert
  });

  it('should be unpainted', function() {
    const actual = room.paintedArea;              //act
    assert.deepStrictEqual(actual, 0);    //assert //use an x before it to prevent test from running
  });

  it('should be able to be painted', function(){
    room.paintRoom(10);
    const actual = room.paintedArea;
    assert.strictEqual(actual, 10)
  });



});
