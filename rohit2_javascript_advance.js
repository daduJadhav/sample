if (true){

    var abc = 10;

}

console.log(abc)




let i = 0;


// arrow func

const funct = () => {
    let i = 10;
    console.log(i)
}

funct()
console.log(i)

let a = 0



if (1==1){
    let b = 10;
}

// hello()
// // console.log(b)09      nysdghk
// ;lkjk;hdxzg
// ;i csduo[
//     omewcew790-=9631    `q135790-=pohc cxfjl;'
//     lkj sdxfl./,m `
// ]


// concept og concatination

// String

let first = [1,2,3,4,5,6,7];
let last = [1,2,3,4,5,6,7];

let concat  = `${first},${last} `;

console.log(concat)


let arr1 = [1,2,3,4,5,6];
let arr2 = [3,4,5,6,7,8,9];


let cocats = arr1.concat(arr2);

console.log(cocats)

let concat2 = `${arr1},${arr2}`;

console.log(concat2)







// rest Operator...

function hi(){
    
    let sum = 0
    for(let i in arguments){
        // console.log(i)
        sum += arguments[i];
    }
    console.log(sum)
}
// name()

hi(1,2,3,4);
hi(10,20);
hi(1,20,800);

function hi2(name,...arguments){

    let sum = 0;

    for(let i in arguments){
        sum = sum + arguments[i];
    }
    console.log(name+sum)
    console.log(name);
}


hi2('rohit',1,2,3,4)


// Arrow Function 

// 
function x(){
    console.log("Hello")
}





// ARRAY CONCATINATION....

// method 1
var x = [1,2,3,4];
var y = [1,2,3,4];

console.log(x.concat(y))

// method 2

let arr3 = [1,2,3,4];
let arr4 = [3,223,4];

let con = [20,...arr4,200,...arr3,100];

console.log(con)



//rest function

function ab (name, ...argv){
    let sum = 0;
    for (let i in argv){
        sum = sum +argv[i];

        console.log(argv[i]);
    }    

}


// function

function abc(){
    console.log('lund')
}
abc()

// Arrow Function

var rohit = () => console.log('lund');

rohit();