const assert = require('assert');
const Rectangle = require('../rectangle');

describe("Rectangle", () => {
  it('is a square', () => {
    const rectangle = new Rectangle(2, 2);
    assert.strictEqual(rectangle.isSquare(), true);
  });
  it('is not a square', () => {
    const rectangle = new Rectangle(3, 2);
    assert.strictEqual(rectangle.isSquare(), false);
  });
  it('gets the correct area of the rectangle', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getArea(), 91);
  })
  it('gets the correct perimeter of the rectangle', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getPerimeter(), 40);
  })
})