console.log('My code is running');

let TDLArr = [];
let list = document.querySelector("#TDL");
let addItemButton = document.querySelector("#addItemButton");
let listInputBox = document.querySelector("#listInputBox");
let listInputString = "";

//updates HTML from To do list array (TDL)
const  addListItem = (item) => {
    TDLArr.push(listInputString);
    console.log(TDLArr);
    updateHTMLList();
};

// function that updates our html list
const  updateHTMLList = () => {
    list.innerHTML = "";
    for (let item of TDLArr) {
      let newLi = createlipkg (item);
        list.appendChild(newLi);
    }
};

// function to
const createlipkg = (textboxlabel) => {
    let lipkg = Object.assign(document.createElement('li'), {
      //id: '',
      class: 'listItem'
    });
    let checkboxlabel = Object.assign(document.createElement('label'), {
      //id: '',
      class: 'itemLabel',
      innerHTML: textboxlabel
    });
    //creates checkbox with attributes
    let checkbox = Object.assign(document.createElement('input'), {
      type: 'checkbox',
    });
    //creates remove list button with attributes
    let removelistbutton = Object.assign(document.createElement('button'), {
      class: 'removeButton',
      type: 'button',
      innerHTML: 'Remove'
    });
    // adds event-listener for strike through
    checkbox.addEventListener("change", (event) => {
      if (checkbox.checked === true) {
        checkboxlabel.style.textDecoration = 'line-through';
      } else if (checkbox.checked === false) {
        checkboxlabel.style.textDecoration = 'None';
      }
    });
    removelistbutton.addEventListener("click", () => {
      TDLArr = TDLArr.filter((value) => {
        return value !== checkboxlabel.innerHTML
      });
      updateHTMLList();
    });
    //adds objects to lipkg
    lipkg.appendChild(checkbox);
    lipkg.appendChild(checkboxlabel);
    lipkg.appendChild(removelistbutton);
    return lipkg;
}
// adds inputbox value to listinputstring
listInputBox.addEventListener("input", (event) => {
    listInputString = event.target.value;
});

//eventlistner to call addListItm when Add Item button is clicked
addItemButton.addEventListener("click", addListItem);
