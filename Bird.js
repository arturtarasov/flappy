function Bird(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;

  this.yV = 0;
  this.yM = 0;
}

Bird.prototype.update = function () {
  this.yV += gravity;

  this.y  += this.yV;
};

Bird.prototype.hop = function (force) {
  this.yV = 0;
  this.yV += force;
};

Bird.prototype.draw = function () {
  stroke(40);
  strokeWeight(3);
  fill(255);
  rect(this.x, this.y, this.r *2, this.r *2);
};
