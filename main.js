
//////////////////////////////////////////////////////////////1///////////////////////////////
let z = prompt("")
a = z.toLowerCase()

function palindrom(a) {

  let y = a.split('');
  y = y.reverse();
  y = y.join('')

  if (a === y) {
    return ('Söz palindromdur');
  }

  else {
    return ('Söz palindrom deyil');
  }
}

console.log(palindrom(a))


//////////////////////////////////////////////////////////////2///////////////////////////////


let x = ['alama', 'alamlml', 'alaqwerty'];

let y = ''

function prefix(x) {
  for (let i = 0; i <= x[0].length; i++) {
    for (let j = 0; j < x.length; j++) {
      if (x[j].indexOf(x[0].substring(0, i)) == 0) {
        y = x[0].substring(0, i)
      } else if (i !== 0) {
        y = x[0].substring(0, i - 1)
        if (y.length === 0) {
          return false
        }
        return y
      }
    }
  }
  return y
}

console.log(prefix(x));




//////////////////////////////////////////////////////////////2///////////////////////////////



function P([]) {

  let newArr = [];



  for (i = 0; i < arr.length; i++) {
    let obj = { type: arr[i].type, value: [arr[i].value] };

    for (j = 0; j < arr.length; j++) {
      if (obj.type === arr[j].type && obj.value != arr[j].value) {
        obj.value.push(arr[j].value)
      }
    }
    if (!newArr.some(e => e.type == obj.type)) {
      newArr.push(obj)
    }


  }

  return newArr

}

let arr = [
  { type: "A", value: "Tesla" },
  { type: "B", value: "KIA" },
  { type: "A", value: "GMC" },
  { type: "C", value: "Dodge" },
  { type: "C", value: "Ford" }
]


console.log(P(arr));