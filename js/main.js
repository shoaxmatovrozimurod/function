// let a = +prompt("Hozirgi yilni kirit");
// let b = +prompt("tug'ulgan yilingizni kiriting");

// function check (){

//    let yosh = a - b;

//     if (yosh >= 18){
//         alert("Armiyaga go");
//     }else{
//         alert("Siz yoshsiz");
//     }
// }
// check ()



// let a = +prompt("Hozirgi yilni kirit");
// let b = +prompt("tug'ulgan yilingizni kiriting");

// let check = function(a, b){
//     let yosh = a - b;

//     if (yosh >= 18){
//         alert (" Armiyaga goo");
//     }else{
//         alert("yoshsiz");
//     }

// }
// check(a, b)




// let a = +prompt("Hozirgi yilni kirit");
// let b = +prompt("tug'ulgan yilingizni kiriting");


// let check = () =>{
//     let yosh = a - b;

//     if(yosh >= 18){
//         alert("armiyaga goo");
//     }else{
//         alert("siz yoshsiz")
//     }
// }

// check();


// let a = +prompt("a tomonni kirit");
// let b = +prompt("b tomonni kirit");


// function rectangle (a, b ){
//     let S = a * b;
//     let P = (a + b) * 2;

//     alert("Yuzi:" +S+ "\nPeremetri:" +P)
// }
// rectangle(a, b);


// let a = +prompt("teng tomonli uchburchakni tomonini kirit");

// let triangle = function (a){
//     let P = 3*a;
//     let S = (a*a)/2;
//     alert("Peremetri:" + P+"\nYuzi:" + S);    
// }
// triangle(a);




// let a = +prompt("a sonni kiriting");
// let n = +prompt("a ni n-darajasini kiriting");

// let power = (a, n) =>{
//    let an = Math.pow(a,n);
//    alert("a ning n-darajasi:" + an  + "ga teng" );
// }
// power(a, n);


// let a = +prompt("a ni kirit");
// let b = +prompt("b ni kirit");

// function mean (a, b){
//     let oa = (a * b)/ 2;
//     let og = (Math.sqrt(a+b));
//     alert("o'rta arifmetigi:" +oa+ "\n o'rta geometirigi:" + og.toFixed(2));
// }
// mean(a, b);


// let n = +prompt("n sonni kirit");

// let sign = function (){
//     if(n > 0){
//         alert("1");
//     }else if (n < 0) {
//         alert("-1");
//     }else{
//         alert("0")
//     }
// }
// sign()



// 9.25
// let arr = [10, 20, 30 ];
// let arr1 = [40, 50, 60];

// let newArr = arr.concat(arr1);

// console.log(newArr);


// 2
// let qator = [100, 200, 300];
// let qator1 = [1, 2, 3];
// let bolim = qator.concat(qator1);
// console.log(bolim);


// 3
// let quti = ["olma", "banan","shaftoli"];
// let check = quti.includes("uzum") ;
// if(quti.includes("uzum")){
//     alert(true);
// }else{
//     alert(false);
// }

// 4
// let box = [1, 2, 3, 4, 5, 6];
// let box1 = box.reverse(box);
// console.log( box1);

// 5

// let arr = [5, 10, 15, 20, 26];
// let arr1 = arr.shift(arr)
// let arr2 = arr.pop(arr)

// console.log(arr1);
// console.log(arr2);
// console.log(arr);

// 6
// let arr = [2, 4, 56, 4,23, 9, 87, 2, 1, 17,]
// let newArr = arr.filter(big => big > 10)
// console.log(newArr);

// 7
// let number = [1, 3, 5, 6, 3, 8, 9];
// let newArr = number.map(num => num * 3);
// console.log(newArr);

// 8
// let names = ["farud", "ali", "vali"]
// let newArr = names.map(name => name [0].toUpperCase() + name.slice(1))
// console.log(newArr);

// 9
// let box = [{
//         id: 1,
//         name: "Ali"
//     },
//     {
//         id: 2,
//         name: "Nozim"
//     },
//     {
//         id: 3,
//         name: "Vali"
//     }
// ]
// let poisk = box.find (key => key.id === 2);
// console.log(poisk)

// 10

// let arr = [2, 3, 4, -5, -3, 9];
// let newArr = arr.findIndex(dec => dec < 0);
// console.log(newArr);

// 11
// let a = [2, 4, 6, 9, 8];
// let newA = a.every(ba => ba % 2 === 0)
// console.log(newA);

// 12
let a = [1, 8, 3, 5, 7, 2];
let newA = a.some(ab => ab % 2 === 0);
console.log(newA);


