// DAY 4: Loops

//Activity 1: for loop

for (let i=1; i<=10; i++){               //task 1
    console.log(i)
}

for (let i=1; i<=10; i++){              //task 2
    console.log("5 X",i,"=",5*i);
}

//Activity 2: while loop

let i=1,sum=0;                          //task 3
while(i<=10){
    sum=sum+i;
    i++;
}
console.log("sum of numbers from 1-10:",sum);   //output: 55

i=10;                                  //task 4
while(i>0){
    console.log(i);
    i--;
}

//Activity 3: do-while loop

i=1;                                  //task 5
do{
    console.log(i);
    i++;
}while(i<=5);

let num=5;                            //task 6
let factorial=1;
do{
    factorial= factorial*num;
    num--;
}while(num>0);
console.log("factorial of 5:", factorial);
//Output: factorial of 5: 120

//Activity 4: nested loops

for(i=1; i<=5; i++){                 //task 7
    let s="";
    for(let j=1; j<=i; j++){
        s=s+"*";
    }
    console.log(s);
}
