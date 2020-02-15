// let Novruz = {
//     name: 'Novruz',
//     surname: 'Qoca',
//     age: 25
// }
// function Person(name, surname, age){
//     this.Name = name;
//     this.Surname = surname;
//     this.Age = age;
//     this.fulName = this.Name + ' ' +this.Surname;
// }

// let Hesen = new Person ('Hesen', 'Aliyev', 23);
// let Yusif = new Person ('Yusif', 'Aliyev', 23);

// console.log(Person)
// console.log(Hesen)
// console.log(Yusif)


// function CustomMap() {
//     this.keys = [];
//     this.values = {};

//     this.Add = function (key, value) {
//         this.keys.push(key);
//         this.values = value;
//     }


// }


// let map = new CustomMap();
// map.Add('list1', ['a','b','c','d']);

// console.log(map)


// function Car(model, color, engine, fuel, maxSpeed) {
//     this.Model = model;
//     this.Color = color;
//     this.Engine = engine;
//     this.Fuel = fuel;
//     this.MaxSpeed = maxSpeed;
//     this.Sportcar = function () {
//         if (this.MaxSpeed > 180) {
//            return "Sport Car"
//         }else{
//             return "Not Sport Car"
//         }
//     }
//     this.isSport = this.Sportcar();
// }


// let BMW = new Car('M5', 'Black', '5.5', 'oil', 360,);
// let Mercedes = new Car('GL', 'Red', '2.5', 'oil', 280);
// let VAZ = new Car('07', 'White', '0.8', 'oil', 120);

// console.log(BMW)
// console.log(Mercedes)
// console.log(VAZ)


// function Rectangle(x, y) {
//     this.X = x;
//     this.Y = y;

//     this.Area = function () {
//         return this.X * this.Y
//     }
//     this.Perimetr = function () {
//         return 2 * (this.X + this.Y)
//     }
//     this.isArea = this.Area();
//     this.isPerimetr = this.Perimetr();
// }


// let Products = []

// function Product(price, name, color, picture) {
//     this.Price = price;
//     this.Name = name;
//     this.Color = color;
//     this.Picture = picture;
//     if (this.Price <= 0) {
//         this.Price = 0;
//     }
//     if (this.Price > 10) {
//         this.EDV = "EDV var"
//     } else {
//         this.EDV = "EDV yoxdur"
//     }
// }


// let iphone8 = new Product(-500, 'Iphone 8', 'white', '/asserts/apple.png')
// let iphone10 = new Product(700, 'Iphone X', 'black', '/asserts/apple.png')
// let iphone11 = new Product(1500, 'Iphone 11', 'white', '/asserts/apple.png')
// let iphone11P = new Product(1800, 'Iphone 11 Pro', 'gray', '/asserts/apple.png')
// let iphone11PM = new Product(2200, 'Iphone 11 ProMax', 'green', '/asserts/apple.png')

// Products.push(iphone8)
// Products.push(iphone10)
// Products.push(iphone11)
// Products.push(iphone11P)
// Products.push(iphone11PM)

// console.log(Products)

// for (let i = 0; i < Products.length; i++) {

//     let div = document.createElement('div');
//     let name = document.createElement('p');
//     let price = document.createElement('p');
//     let color = document.createElement('p');
//     let edv = document.createElement('p');
//     let img = document.createElement('img');
//     let body = document.querySelector('body');

//     body.style.display = 'flex';
//     body.style.justifyContent = 'space-between';
//     div.style.width = '200px';
//     div.style.textAlign = 'center';
//     img.style.width = '200px';
//     img.src = Products[i].Picture
//     name.innerText = Products[i].Name
//     price.innerText = Products[i].Price
//     color.innerText = Products[i].Color
//     edv.innerText = Products[i].EDV

//     body.appendChild(div);
//     div.appendChild(img);
//     div.appendChild(name);
//     div.appendChild(price);
//     div.appendChild(color);
//     div.appendChild(edv);
// }
let obj = {}
let input = document.querySelector('input');
let list1 = document.querySelector('.list1');
let list2 = document.querySelector('.list2');
let Select = document.querySelector('select')
let sel = Select.value;

input.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
        if (sel == 'list1') {
            if (obj['list1'] == undefined) {
                obj['list1'] = []
            }
            obj['list1'].push(input.value)
            list1.innerText += ' ' + input.value
            input.value = "";
        }
        if (sel == 'list2') {
            if (obj['list2'] == undefined) {
                obj['list2'] = []
            }
            obj['list2'].push(input.value)
            list2.innerText += ' ' + input.value
            input.value = "";
        }
    }
})

Select.addEventListener('change', function () {
    sel = Select.value;
})