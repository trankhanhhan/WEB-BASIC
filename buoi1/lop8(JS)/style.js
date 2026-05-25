// var i= 2; 
// let a = 3; 
// const = 5;
// let a = "aaaaa";
// let a = null kiểu object 
// nếu a đang là 1 số let a = 2; ==> khai baos thành kiểu dl cũng đc a = "aa"
// a = true
//  string, number, boolean, undefined, null  
// +, -, *, /, % 
// > < >= <= ==( không tính kiểu dl) ===( tính theem kiểu dl)
// object, array, function
// console.log(i);
// if (true) {
//     let i = 2;
//     var i = 3;
// }
// console.log(a.length);  đo độ dài

// let fruits = [ "táo", "ổi"]
// console.log(fruits);  cách khai báo mảng

// 
// let student = {
//     name: "han";
//     age: "18";
//     class: "25t";
// };
// console.log(student.name);

// function sum (a, b){
//     console.log(a+b)
//     return a+b;
// }
// let t = sum(3,4);
// console.log(t);

// if (a < b){

// }
// else if{

// }else{

// }

// bitwlse: &, | , ^ , ~ , << ( dịch trái: bỏ đi 1 bit) >>( dịch phải: thêm 1 bit)    ( biến số về bit( cơ số 2 sau đó dùng phép tính)) and or xor not
// let t = 5&1;
// 5 = 101;
// 1 = 001;
// << nhân cho 2 với số mũ 1 (let t = 5 << 1)

// for ( let i=0(1); i<=5(2); i++(4)){
//     console.log(i)(3);
// }

// break;   bỏ lệnh giữa chừng
// continue; tiếp tục


// let n = ..;
// ngto, số tự nhiên, số hoàn hảo(6=1+2+3), 


let n = 6;
function ngto(n){
    if (n <= 1) return false;
    kt = n > 2;
    for(let i = 2; i<=Math.sqrt(n); i++){
        if (n % i ==0) {
            return false;

        }
    }
    return kt;
}
console.log(ngto(n));

function sohoanhao(n){
    if ( n <= 1) return false;
    let sum = 0;
    for (let i=1; i<n; i++){
        if (n % i == 0){
            sum  += i;
        }
    }
    return sum == n;
}
console.log(sohoanhao(n));

function sotunhien(n){
    return (n >= 0) && (n == Math.trunc(n));
}
console.log(sotunhien(n));

// let n = 12;
// console.log("aaaa" + n); (1)
// console.log('hahahaha ${n}') (2)    đưa thêm biến vào khi 
// let m = "aaaaa" + 12;
// console.log(m);   (3)

