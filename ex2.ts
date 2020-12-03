// ---

function fun1(message: string) {
  return message.toUpperCase();
}

fun1("Hello");
fun1(fun1("Hello, world"));
fun1("World").toLowerCase();

// ---

function fun2(name: string, age: number) {
  if (age > 50) {
    name = `Old ${name}`;
  }

  console.log(`Hi, ${name}`);
}

fun2("John", 20);
fun2("Jane", 38);
fun2("Jean-Marie", 112);

// ---

function fun3(should: boolean, names: string[]) {
  if (!should) {
    return false;
  }

  return names.every((name) => name[0] === "J");
}

fun3(false, []);
fun3(true, ["John", "Jane"]);
fun3(true, ["John", "Greg", "Bob", "Jane", "Neo"]);

// ---

function fun4(eat: string = "Salad", drink?: string) {
  console.log(`Here is your meal: ${eat} and some ${drink ?? "water"}`);
}

fun4("Burger", "Cola");
fun4("Quinoa salad");
fun4();
