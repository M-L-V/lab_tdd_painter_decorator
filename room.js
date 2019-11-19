const Room = function(areaInMeters, paintedArea) {
  this.areaInMeters = areaInMeters;
  this.paintedArea = paintedArea;
}




Room.prototype.paintRoom = function(paintAmount) {
  this.paintedArea = paintAmount * 1;
  return this.paintedArea
};




module.exports = Room;
