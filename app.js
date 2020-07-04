'use strict';
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);

// echo "# my-first-node-js" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin git@github.com:tomoharuyuyama/my-first-node-js.git
// git push -u origin master