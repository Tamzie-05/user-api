const showMessage =(callback)=>{
    console.log(callback);
};
const firstMessage = (callback)=>{
    setTimeout(()=>{
        showMessage("hello");
        callback(()=>{
            console.log("fixed")
        });
    },1000);
}
const secondMessage =(callback)=>{
    showMessage("beautiful");
    callback();
}
const thirdMessage=()=>{
    showMessage("world");
};
firstMessage(secondMessage)
secondMessage(thirdMessage)