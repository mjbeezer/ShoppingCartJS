//list of items
let Inventory =
    [     
        {
            name: "Soda",
            price: 1.99
        },
        {
            name: "Candy",
            price: 0.99
        },
        {
            name: "Smokes",
            price: 5.99
        },
        {
            name: "Beer",
            price: 2.99
        },
        {
            name: "Sammich",
            price: 5.99
        }
    ];

let ShoppingCart = 
    [

    ]

function loadTableData(items) 
    {
        const table = document.getElementById("testBody");
        items.forEach( item => 
        {
          let row = table.insertRow();
          let name = row.insertCell(0);
          name.innerHTML = item.name;
          let price = row.insertCell(1);
          price.innerHTML = item.price;
          let addButton = row.insertCell(2);
          let combine = item.name + "," + item.price;
          addButton.innerHTML = `<button id=${combine} onClick=AddItem(this.id)>Add Item</button>`;
        });
    }
      loadTableData(Inventory);

let clickCount = 0;
function AddItem(cartItem)
    {
        alert(cartItem);
        clickCount++;
        let result = cartItem.split(",");
        let item = {name: result[0], price: result[1]};
        ShoppingCart.push(item);
    }

function CheckOut()
    {
        let total = 0;
        ShoppingCart.forEach
        (
            item => 
            {
                console.log(item.name, item.price);
                total += item.price;
            }
        )
        console.log(total);
    }