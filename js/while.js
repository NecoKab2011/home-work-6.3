let iteration = 0;
while (iteration <= 10) {
  console.log(iteration);
  iteration += 1;
}

for (let i = 2; i <= 20; i++) {
  if (i % 2 === 1) {
    continue;
  }
  console.log(i);
}

for (let iter = 0; iter <= 10; iter++) {
  console.log(iter * 7);
}

let i = 0;
while (i < 5) {
  console.log(i + 1);
  i++;
}

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

let number = 0;
let n = 5;
for (let i = 0; i < 10; i ++) {
  number = Math.round(Math.random() * (10 - 1) + 1);
  if (number > n) {
    break;
  }
  console.log(number);
}

let iterat = 0;
  while (iterat <= 20) {
    iterat ++;
    if (iterat % 3 === 0) {
      continue;
    }
    console.log(iterat);
  }

