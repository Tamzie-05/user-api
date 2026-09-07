/*const promise = new Promise((resolve, reject)=>{
    const allThrough = false;
    if(allThrough){
        resolve("All things went well");
    }else{
        reject("An error occurred");
    }
});
promise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});
*/
/*const promise = new Promise((resolve, _reject) => {
    resolve("Well Done! Promise One is Resolved");
});

const promiseTwo = new Promise((resolve, _reject) => {
    resolve("Well Done! Promise Two is Resolved");
});

const promiseThree = new Promise((_resolve, reject) => {
    reject("Promise Three is Rejected. Unlucky!");
});

promise
    .then((value) => {
        console.log(value);
        return promiseTwo;
    })
    .then((value) => {
        console.log(value);
        return promiseThree;
    })
    .catch((error) => {
        console.log(error);
    });
*/
const promiseOne=new Promise((resolve,_reject)=>{
    setTimeout(()=>{
        resolve("Promise one resolved")
    },2000);
});

const promiseFour=new Promise((_resolve,reject)=>{
    setTimeout(()=>{
        reject("Promise Four rejected")
    },3000);
});

Promise.all([promiseOne,promiseFour])
.then((data)=>console.log(data[0],data[1]))
.catch((error)=>console.log(error));