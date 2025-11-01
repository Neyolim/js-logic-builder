/** Problem Statement:
- Write a function that calculates and prints the area of a rectangle given its length and width.
- Input length and width
- Area of a rectangle = length * width 
- Print the area on the console
- Pause the video and try it yourself **/

function AreaOfRectangle(length, width) {
  // Validation
  if (length <= 0) {
    throw new RangeError("Length should be a positive number");
  }
  if (width <= 0) {
    throw new RangeError("Width should be a positive number");
  }
  const area = length * width;
  console.log("Area of rectangle is", area);
}

AreaOfRectangle(4, 5);
AreaOfRectangle(450, 500);

This inputs are invalid so we must consider them and add some validations to make the code more robust

// AreaOfRectangle(0, 23);
// AreaOfRectangle(400, 0);
// AreaOfRectangle(-4, 5);
// AreaOfRectangle(4, -5);
