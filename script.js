/* eslint-disable no-mixed-spaces-and-tabs */
/** Add any JavaScript you need to this file. */

var productList = [
    {
        src: "./images/piano2.jpg",
        type: "keyboard",
        description: "Yamaha - Model YDP144R - Wooden Color, 88 Keys",
        name: "U1 Grand Piano",
        price: "$3000"
    },
    {
        src: "./images/piano6.jpg",
        type: "keyboard",
        description: "Yamaha - Model RockJam - Digital Piano, 88 keys",
        name: "88 Keys Synth Workstation",
        price: "$2199"
    },
    {
        src: "./images/piano5.jpg",
        type: "keyboard",
        description: "Yamaha - Digital Piano - Black Color",
        name: "Arius YDP-164 Digital Piano",
        price: "$2500"
    },
    {
        src: "./images/piano1.jpg",
        type: "keyboard",
        description: "Yamaha - Model L515Wh",
        name: "88-Key Digital Piano- Black ",
        price: "$1950"
    },
    {
        src: "./images/piano3.jpg",
        type: "keyboard",
        description: "Yamaha - Digital Organ",
        name: "Vintage Electone Organ ",
        price: "$10500"
    },

    {
        src: "./images/piano4.jpg",
        type: "keyboard",
        description: "Yamaha - USB Midi Keyboard - 49Mk3",
        name: "M-Audio ",
        price: "$1000"
    },
    {
        src: "./images/guitar1.jpg",
        type: "guitar",
        description: "Yamaha - Wooden Color, Steel Strings ",
        name: "C40-Classical Guitar ",
        price: "$200"
    },
    {
        src: "./images/guitar2.jpg",
        type: "guitar",
        description: "Yamaha - Beginners Guitar",
        name: "F325D Acoustic Guitar ",
        price: "$189"
    },
    {
        src: "./images/guitar-elec2.jpg",
        type: "guitar",
        description: "Yamaha - 41 Full Size - 6 Strings",
        name: "APX Electric Guitar ",
        price: "$400"
    },
    {
        src: "./images/guitar-elec1.jpg",
        type: "guitar",
        description: "Yamaha - Full size, Solid Elctric Guitar Kit",
        name: "500 Seies Bass Guitar ",
        price: "$689"
    },
    {
        src: "./images/guitar3.jpg",
        type: "guitar",
        description: "Yamaha - Wooden Color- Beginners Guitar",
        name: "FG800M Acoustic Guitar ",
        price: "$249"
    },
    {
        src: "./images/guitar5.jpg",
        type: "guitar",
        description: "Yamaha - Wooden Color - Steel Strings",
        name: "AG800M Acoustic Guitar ",
        price: "$500"
    }
];

function getItemByType(itemType) {
    var itemShow = [];
    productList.forEach(function(item) {
        if (item.type === itemType) {
            itemShow.push(item);
        }
    });
    return itemShow;
}

function createImg(src) {
    var img = document.createElement("img");
    img.src = src;
    img.alt = "";

    return img;
}

function createInfoDiv(item) {
    let infoDiv = document.createElement("div");
    infoDiv.classList.add("details-product");
    var dataName = [item.name];
    dataName.forEach(function(name) {
        var node = document.createTextNode(name);
        var para = document.createElement("p");
        para.appendChild(node);
        infoDiv.appendChild(para);
        para.classList.add("infor-name");
    });
    var data = [item.description, item.price];
    data.forEach(function(value) {
        var node = document.createTextNode(value);
        var para = document.createElement("p");
        para.appendChild(node);
        infoDiv.appendChild(para);
        para.classList.add("information");
    });
    var button = document.createElement("button");
    var textButton = document.createTextNode("Buy Now!");
    button.appendChild(textButton);
    button.classList.add("buttonBuy");
    infoDiv.appendChild(button);
    return infoDiv;
}

function createProductDiv(item) {
    let productDiv = document.createElement("div");
    productDiv.classList.add("container-product");
    var img = createImg(item.src);
    var infoDiv = createInfoDiv(item);
    productDiv.appendChild(img);
    productDiv.appendChild(infoDiv);
    return productDiv;
}

function itemsToBigDiv(productList) {
    clearDiv();
    let bigDiv = document.querySelector(".item-list");
    let listLen = productList.length;

    for (let i = 0; i < listLen; i++) {
        let product1 = createProductDiv(productList[i]);

        let row = document.createElement("div");
        row.appendChild(product1);

        bigDiv.appendChild(row);
    }

    return bigDiv;
}

function clearDiv() {
    var div = document.querySelector(".item-list");
    div.innerHTML = "";
}

function setup() {
    document.querySelector("#all").onclick = function() {
        itemsToBigDiv(productList);
    };
    document.querySelector("#keyboard").onclick = function() {
        itemsToBigDiv(getItemByType("keyboard"));
    };

    document.querySelector("#guitar").onclick = function() {
        itemsToBigDiv(getItemByType("guitar"));
    };
}

window.onload = setup();
window.onload = itemsToBigDiv(productList);
