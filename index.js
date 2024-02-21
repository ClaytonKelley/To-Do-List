console.log('My code is running');

let TDLArr = [];
let list = document.querySelector("#TDL");
let addItemButton = document.querySelector("#addItemButton");
let listInputBox = document.querySelector("#listInputBox");
let listInputString = "";

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

const createlipkg = (textboxlabel) => {
    let lipkg = document.createElement('li')
    let checkboxlabel = Object.assign(document.createElement('label'), {
      //id: '',
      //class: '',
      innerHTML: textboxlabel
    });

    //let checkboxlabel = document.createElement('label')
    //checkboxlabel.setAttribute('innerHTML', )
    let checkbox = Object.assign(document.createElement('input'), {
      type: 'checkbox',
    });
    // document.createElement('input')
    // checkbox.setAttribute('type', 'checkbox')
    let removelistbutton = Object.assign(document.createElement('button'), {
      type: 'button',
      innerHTML: 'Remove'
    });
    checkbox.addEventListener("change", (event) => {
      if (checkbox.checked === true) {
        checkboxlabel.style.textDecoration = 'line-through';
      } else if (checkbox.checked === false) {
        checkboxlabel.style.textDecoration = 'None';
      }
    })
    lipkg.appendChild(checkbox);
    lipkg.appendChild(checkboxlabel);
    lipkg.appendChild(removelistbutton);
    return lipkg;
}

listInputBox.addEventListener("input", (event) => {
    listInputString = event.target.value;
});



addItemButton.addEventListener("click", addListItem);
