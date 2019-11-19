const Paintcan = function(numLitresPaint) {
  this.numLitresPaint = numLitresPaint;
}




 Paintcan.prototype.emptyPaint = function(litrespaint) {
  this.numLitresPaint = litrespaint * 0
  return this.numLitresPaint
};

Paintcan.prototype.checkIfEmpty = function(litrespaint) {
  if (this.numLitresPaint == 0)
  return true
  else if (this.numLitresPaint != 0)
  return false
};






module.exports = Paintcan
