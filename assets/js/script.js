let string = "Salam olsun hamiya";

function stringCheck(string) {
  let str = string.split(" ").map((m) => m.length);
  return str;
}
console.log(stringCheck(string));