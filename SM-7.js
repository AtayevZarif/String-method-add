let S1 = prompt("Satr yozing (mainimal uzunligi: 10ta harf)")
let S2 = prompt("Yana satr yozing (maksimal uzunligi: 10ta harf)")
let boolean = S1.includes(S2)
let replaceArr = S1.split(" ")
console.log(replaceArr)
let length1 = S1.length
let length2 = S2.length
let son= 0;

for(i=0; i<replaceArr.length; i++){
    if(replaceArr[i] == S2){
        son = son +1
    }
}

if (length1 < 10 || length2 > 10){
    alert("error")
}
else if (boolean){
    alert(replaceArr)
}
else{
    alert(S1)
}