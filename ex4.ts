// ---

type MyArray<T> = Array<T>;

const numbers: MyArray<number> = [1, 2, 3, 4];
console.log(numbers.reduce((prev, curr) => prev + curr, 0));

const strings: MyArray<string> = ["One", "Two", "Three"];
strings.push("Viva...");
console.log(strings.join(", "));

// ---

type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Point {
  x: number;
  y: number;
  z: number;
}
type ReadonlyPoint = MyReadOnly<Point>;

const p: ReadonlyPoint = { x: 1, y: 2, z: 3 };
console.log(p);

// ---

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
type TDPoint = MyPick<ReadonlyPoint, "x" | "y">;

const tdp: TDPoint = { x: 3, y: 4 };
console.log(tdp);

// ---

function setProperty<T, K extends keyof T, V extends T[K]>(
  obj: T,
  key: K,
  value: V
) {
  obj[key] = value;
}

interface Known {
  some: string;
  value: number;
}
const known: Known = { some: "some", value: 12 };

setProperty(known, "value", 18);
setProperty(known, "some", "Hello");
console.log(known);
