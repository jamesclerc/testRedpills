// ---

interface Circle {
  radius: number;
  color: string;
}

function describeCircle(circle: Circle) {
  const area = Math.PI * circle.radius ** 2;

  console.log(
    `This circle is ${circle.color} with an area of ${area.toFixed(2)}`
  );
}

const smallCircle: Circle = {
  color: "red",
  radius: 6,
};

const circles: Circle[] = [
  smallCircle,
  { radius: 10, color: "green" },
  { radius: 18, color: "blue" },
];

for (const circle of circles) {
  describeCircle(circle);
}

// ---

type SquareWidth = 5 | 12 | 20;

interface Square {
  color: string;
  width: SquareWidth;
  name: string;
}

interface SquareConfig {
  readonly color?: string;
  readonly width?: SquareWidth;
}

interface CreateSquareFunc {
  (name: string): Square;
}

function describeSquare(square: Square) {
  console.log(
    `The square ${square.name} has color ${square.color} and width ${square.width}`
  );
}

function squareFactory(config?: SquareConfig): CreateSquareFunc {
  return (name: string) => {
    return {
      name,
      color: config?.color ?? "black",
      width: config?.width ?? 5,
    };
  };
}

const redSquareFactory = squareFactory({ color: "red" });
const largeBlueSquareFactory = squareFactory({
  color: "blue",
  width: 20,
});
const defaultFactory = squareFactory();

const squares = [
  redSquareFactory("Red #1"),
  largeBlueSquareFactory("Large blue #1"),
  defaultFactory("Default #1"),
  defaultFactory("Default #2"),
  redSquareFactory("Red #2"),
];

for (const square of squares) {
  describeSquare(square);
}

// ---

interface Bag {
  [key: string]: string;
}

function addToBag(bag: Bag, key: string, value: string) {
  bag[key] = value;
}

const bag: Bag = {};
addToBag(bag, "hello", "world");
addToBag(bag, "world", "hello");
console.log(Object.keys(bag).join(", "));
