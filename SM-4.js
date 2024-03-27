let S1 = prompt("Satr yozing")
let S2 = prompt("Yana satr yozing (maksimal uzunligi: 10ta harf)")
let C = prompt("Biron bir harf yozing")
let delet = S1.replaceAll(C,S2 + " " + C);
let check = S1.includes(C)
let length1 = C.length
let length2 = S2.length

if (length > 1 || length2 > 10){
    alert("error")
}
else if (check){
    alert(delet)
}