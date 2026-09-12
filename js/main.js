let a = +prompt("Hozirgi yilni kirit");
let b = +prompt("tug'ulgan yilingizni kiriting");

function check (){

   let yosh = a - b;

    if (yosh >= 18){
        alert("Armiyaga go");
    }else{
        alert("Siz yoshsiz");
    }
}
check ()