let natural = Math.ceil(Math.random() * 50)
let line = prompt("Nimadur yozing")
let length = line.length

let slice1 = line.slice(-natural)

let points = ".................................................."
let difference = natural - length
let slice2 = points.slice(-difference)

alert(" Natural son: " + natural + "\n Yozgan tekstingizni uzunligi: " + length)

if (length > natural){
    alert(slice1)
}
else if (length < natural){
    alert(slice2 + line)
}
else{
    alert(line)
}