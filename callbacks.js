"use strict";
const showMessag = (message) => {
    console.log(message);
};
const firstMessag = (message) => {
    showMessag("Hello");
    message();
};
const secondMessag = () => {
    showMessag("Beautiful");
};
const thirdMessag = () => {
    showMessag("World");
};
firstMessag(secondMessag);
thirdMessag();
