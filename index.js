// Your code here
const mapToNegativize = function(sourceArray) {
  const newArray = sourceArray.map(x => x * -1);
  return newArray;
};

const mapToNoChange = function(sourceArray) {
  const newArray = sourceArray.map(x => x);
  return newArray;
};

const mapToDouble = function(sourceArray) {
  const newArray = sourceArray.map(x => x * 2);
  return newArray;
};

const mapToSquare = function(sourceArray) {
  const newArray = sourceArray.map(x => x ** 2);
  return newArray;
};