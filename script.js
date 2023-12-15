// *****************************************************************************
const array_of_students =[
    {
        id: 'numb 4',
        title: "newTitle",
        price: 205,
        description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smartfunctionality",
        image_url: "./image.avif"
        },
        {
            id: 'numb 7',
            title: "Ergonomic Wooden Tuna",
            price: 743,
            description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
            image_url: "https://i.imgur.com/mp3rUty.jpeg"
            },
            {
                id: 'numb 9',
                title: "Electronic Bronze Chips",
                price: 808,
                description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and fourwheel drive",
                image_url: "https://i.imgur.com/R3iobJA.jpeg"
                },
                {
                    id: 'numb 11',
                    title: "Awesome Bronze Car",
                    price: 382,
                    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
                    image_url: "https://i.imgur.com/cBuLvBi.jpeg"
                    },
                    {
                        id: 'numb 12',
                        title: "Recycled Rubber Cheese",
                        price: 30,
                        description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
                        image_url: "https://i.imgur.com/KeqG6r4.jpeg"
                        }
]

const result = document.getElementById("element");

array_of_students.map((numb,index)=>{
    const {id,title,price,description,image_url} = numb
    const card = document.createElement("div");
    card.setAttribute("class","card")
    result.appendChild(card)
   return card.innerHTML += `
    <div>
    <h5>${id}</h5>
    <h5>${title}</h5>
    <h5>${price}</h5>
    <p>${description}</p>
    </div> 
    ` 
   
  
})
// *******************************************************************************************************