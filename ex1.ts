// ---

let n: number = 1;
n++;
n += 2;
console.log(isNaN(n));

// ---

let hello: string = "Hello, World!";
if (hello.endsWith("!")) {
  console.log(hello.toLowerCase());
}

// ---

let tuple: [number, string, boolean] = [1, "Hello", true];
tuple[0] += 3;
tuple[2] = !tuple[2];
tuple[1] = `${tuple[0].toPrecision(2)} --- ${tuple[2].valueOf()}`;
console.log(tuple);

// ---

let arr: string[] = ["!", "   world", "     hello  "];
arr = arr.map((v) => v.trim().toUpperCase());
console.log(arr.reverse().join(" "));

// ---

let obj: object = { hello: "world" };
if (Object.keys(obj)[0] === "hello") {
  console.log(obj);
}
