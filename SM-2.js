let s1 = prompt("1-satr yozing (maksinal uzunligi: 20ta harf; minimal uzunligi: 10ta harf)");
let s2 = prompt("2-satr yozing");
let N1 = +prompt("Birinchi satrning boshidan nechta harf olib birlashtirishingizni yozing (maksimal son: 10ta)");
let N2 = +prompt("Ikkinchi satrning oxiridan nechta harf olishingizni yozing");
let slice1 = s1.slice(0, N1);
let slice2 = s2.slice(-N2);
let length1 = s1.length;
let length2 = s2.length;

if(length1 > 20 || length2 > 20 || length1 < 10 || length2 < 10 || N1 > 10 || N2 > 10){
    alert("error");
}
else {
    alert(slice1 + " " + slice2);
}