// Using constructor functions

function Rectangle(width, height) {
  this.height = height;
  this.width = width;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

const rect = new Rectangle(5, 10);

rect.area() // 50



// Using Objects

const rectangle = {
  create: function (width, height) {
    var self = Object.create(this);
    self.height = height;
    self.width = width;
    return self;
  },
  area: () => {
    return this.width * this.height;
  }
};

const rect = rectangle.create(5, 10);
rect.area() // 10


// Using Classes

class Rectangle {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }

  area () {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);
rect.area() // 10
