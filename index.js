console.log('My code is running');

let TDLArr = [];
let list = document.querySelector("#TDL");
let addItemButton = document.querySelector("#addItemButton");
let listInputBox = document.querySelector("#listInputBox");
let listInputString = "";

const addListItem = (item) => {
    TDLArr.push(listInputString);
    console.log(TDLArr);
    updateHTMLList();
};

// function that updates our html list
const updateHTMLList () => {
    list.innerHTML = "";
    for (let item of TDLArr) {
        list.appendChild("<li>TEST</li>");
    }
};

listInputBox.addEventListener("input", (event) => {
    listInputString = event.target.value;
});

addItemButton.addEventListener("click", addListItem);