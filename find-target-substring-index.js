const str = "Hello, Hello, World!";
const target = "Hello";

let position = -1;
while ((position = str.indexOf(target, ++position)) !== -1) {
    alert(position);
}
