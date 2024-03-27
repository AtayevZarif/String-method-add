let S1 = prompt("Satr yozing (mainimal uzunligi: 10ta harf)")
let S2 = prompt("Yana satr yozing (maksimal uzunligi: 10ta harf)")
let S3 = prompt("Yana satr yozing (maksimal uzunligi: 10ta harf)")
let boolean = S1.includes(S2)
let replace = S1.replace(S2,S3)
let length1 = S1.length
let length2 = S2.length

if (length1 < 10 || length2 > 10){
    alert("error")
}
else if (boolean){
    alert(replace)
}
else{
    alert(S1)
}