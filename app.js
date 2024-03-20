const box_1 = document.getElementById("box_1");
const box_2 = document.getElementById("box_2");
const box_3 = document.getElementById("box_3");
const box_4 = document.getElementById("box_4");
const box_5 = document.getElementById("box_5");
const btn = document.getElementById("btn");
const body = document.querySelector("body");

const box_1ClickHandler = ()=>{
    console.log("box-1 is clicked")
};
const box_2ClickHandler = ()=>{
    console.log("box-2 is clicked")
};
const box_3ClickHandler = ()=>{
    console.log("box-3 is clicked")
};
const box_4ClickHandler = ()=>{
    console.log("box-4 is clicked")
};
const box_5ClickHandler = ()=>{
    console.log("box-5 is clicked")
};
const btnClickHandler = ()=>{
    console.log("btn is clicked")
};
const bodyClickHandler = ()=>{
    console.log("body is clicked")
};
const windowClickHandler = ()=>{
    console.log("window is clicked")
};
box_5.addEventListener("dblclick", ()=>{
    console.log("double click is box-5")
});

box_1.addEventListener("click", box_1ClickHandler);
box_2.addEventListener("click", box_2ClickHandler);
box_3.addEventListener("click", box_3ClickHandler);
box_4.addEventListener("click", box_4ClickHandler);
box_5.addEventListener("click", box_5ClickHandler);
btn.addEventListener("click", btnClickHandler);
body.addEventListener("click", bodyClickHandler);
window.addEventListener("click", windowClickHandler);



const box_10 = document.getElementById("box_10");
const box_20 = document.getElementById("box_20");
const box_30 = document.getElementById("box_30");
const box_40 = document.getElementById("box_40");
const box_50 = document.getElementById("box_50");
const button = document.getElementById("button");


const box_10ClickHandler = ()=>{
    console.log("box-10 is clicked")
};
const box_20ClickHandler = ()=>{
    console.log("box-20 is clicked")
};
const box_30ClickHandler = ()=>{
    console.log("box-30 is clicked")
};
const box_40ClickHandler = ()=>{
    console.log("box-40 is clicked")
};
const box_50ClickHandler = ()=>{
    console.log("box-50 is clicked")
};
const buttonClickHandler = ()=>{
    console.log("button is clicked")
};


box_50.addEventListener("dblclick", ()=>{
    console.log("double click is box-50")
});
box_10.addEventListener("click", box_10ClickHandler, true);
box_20.addEventListener("click", box_20ClickHandler, true);
box_30.addEventListener("click", box_30ClickHandler, true);
box_40.addEventListener("click", box_40ClickHandler, true);
box_50.addEventListener("click", box_50ClickHandler, true);
button.addEventListener("click", buttonClickHandler, true);
body.addEventListener("click", bodyClickHandler, true);
window.addEventListener("click", windowClickHandler, true);