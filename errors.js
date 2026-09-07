// try,catch,finally

try{
    console.log("Start of try run");
    unicycle;
    console.log("End of try runs -- never reached")
}catch(err){
    console.log("error has occurred" + err);
}finally {
    console.log("This always runs");

}
console.log("then execution continues");

let json = '{"age" : 30}';
try{
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete data:no name")
    }
    console.log(user.name);
}catch(e){
    console.log("JSON error: "+ e);
}