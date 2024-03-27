let S = prompt("Satr yozing")
let C = prompt("Biron bir harf yozing")
let check = S.includes(C)
let delet = S.replaceAll(C,C + C);
let length = C.length


if (length > 1){
    alert("error")
}
else if (check){
    alert(delet)
}