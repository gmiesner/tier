
let stri = document.querySelector('#courseinventorycontainer').innerText.split("\n");

let n = [];
for (i in stri){ if (stri[i].startsWith('MIL')){ n.push(stri[i]) }}



for (i in n){ n[i] = n[i].split(" (") }
for (i in n){ n[i].pop()}
n = n.join("\n")
n = n.split('\n')
for (i in n){ n[i] = n[i].split(' ') }
let  number = [];
for (i in n){ number.push(n[i][0]); n[i].shift()}
for (i in n){ n[i] = n[i].join(" ")}

// for (i in n){ n[i] = n[i].join(' '); }
// n = n.join('\n');
// let course_name = n
