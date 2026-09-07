const showMessage = (message : string) : void =>{
    console.log(message);
};

const firstMessage = (message : ()=> void) : void =>{
    showMessage("Hello");
    message();
};
const secondMessage = ():void =>{
    showMessage("Beautiful");
};
const thirdMessage = ():void =>{
    showMessage("World");
};

firstMessage(secondMessage);
thirdMessage();