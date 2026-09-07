const preHeatOven=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const preHeatOven=false;

            if(preHeatOven){
                resolve("Preheat oven to 180deg ");
            }else{
                reject("Failed task");
            }
        },1000)
    })
};

const addSugarAndChocoChips=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const addchoco=true;

            if(addchoco){
                resolve("Place butter and choco chips ");
            }else{
                reject("Failed task");
            }
        },1000)
    })
};
const addFlourCocoaAndSalt=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const addSaltFlour=true;

            if(addSaltFlour){
                resolve("Addflour cocoa and salt");
            }else{
                reject("Failed task");
            }
        },1000)
    })
};

const bakeMixture=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const bakeMixture=true;

            if(bakeMixture){
                resolve("Bakefor 24 minutes ");
            }else{
                reject("Failed task");
            }
        },1000)
    })
};


const bakeChocolateBrownies = async ()=>{

try{
    const taskOne = await preHeatOven();
    console.log(taskOne);
    const taskTwo = await addSugarAndChocoChips();
    console.log(taskTwo);
    const taskThree = await addFlourCocoaAndSalt();
    console.log(taskThree);
    const taskFour =  await bakeMixture();
    console.log(taskFour);

    console.log("Enjoy the brownies");
}
catch(error){
    console.log(error);

}
}

bakeChocolateBrownies();