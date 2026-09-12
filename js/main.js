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




let a = +prompt("a sonni kiriting");
let n = +prompt("a ni n-darajasini kiriting");

let power = (a, n) =>{
   let an = Math.pow(a,n);
   alert("a ning n-darajasi:" + an  + "ga teng" );
}
power(a, n);
