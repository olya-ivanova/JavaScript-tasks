// 1

const str = "Hello, Hello, World!";
const target = "Hello";

let position = -1;
while ((position = str.indexOf(target, ++position)) !== -1) {
    alert(position);
}

// 2

const str = "Hello, Hello";
const target = "Hello";
let position = 0;

while(true) {
    let index = str.indexOf(target, position);
    if (index === -1) {
        break;
    }
    
    position = index + 1;
    alert(index);
}
