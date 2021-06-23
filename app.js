// vars
let inputContainer = document.getElementById('input-container');
let circleBtn = document.getElementById('circle-btn');
let rectangleBtn = document.getElementById('rectangle-btn');
let triangleBtn = document.getElementById('triangle-btn');
let squareBtn = document.getElementById('square-btn');
let shapes = document.getElementById('shapes');
let sidePanel = document.getElementById('side-panel');
let shapeName = document.getElementById('shape-name');
let shapeWidth = document.getElementById('width');
let shapeHeight = document.getElementById('height');
let shapeRadius = document.getElementById('radius');
let shapeArea = document.getElementById('area');
let shapePerimeter = document.getElementById('perimeter');

let counter = 1;

//Main class Shape
class Shape {
    constructor() {
        this.base = document.createElement('div');

        this.base.addEventListener('dblclick', function() {
            this.remove();
        })

        this.base.addEventListener('click', function() {
            this.info();
        }.bind(this));
    }
    //methods to create appearence
    howToLook() {
        $(this.base).css({
            "backgroundColor": this.randColor(),
            "position": 'absolute',
            "height": this.height + 'px',
            "width": this.width + 'px',
            //where to appear in box
            "top": this.long,
            "left": this.lat,
        })
    }
    
    whereInBox() {
        this.lat = Math.floor(Math.random() * (601 - this.width));
        this.long = Math.floor(Math.random() * (601 - this.height));
    }
    
    randColor() {
        let randCol = "#" + Math.floor(Math.random() * 16777215).toString(16);
        return randCol;
    }
    
    putInContainer() {
        shapes.appendChild(this.base);
    }
    
    info() {
        // this.shapeName = `Shape Name: ${this.name}</br>`;
        $(shapeName).html(`Shape Name: ${this.name}`);
        // this.shapeWidth = `<br>Width: ${this.width}`;
        $(shapeWidth).html(`<br>Width: ${this.width}`);
        // this.shapeHeight = `<br>Height: ${this.height}`;
        $(shapeHeight).html(`<br>Height: ${this.height}`);
        // this.shapeRadius = `Radius: ${this.radius}</br>`;
        $(shapeRadius).html(`<br>Radius: ${this.radius}`);
        // this.shapeArea = `Area: ${this.area}</br>`;
        $(shapeArea).html(`<br>Area: Gonna skip that`);
        // this.shapePerimeter = `Perimeter: ${this.perimeter}</br>`;
        $(shapePerimeter).html(`Perimeter: And that`);
    }



}

class Square extends Shape {
    constructor(sideLen) {
        super();
        this.color = this.randColor();
        this.sideLen = sideLen;
        this.width = sideLen;
        this.height = sideLen;
        this.name = "Square";
        this.whereInBox();
        this.howToLook();
        this.putInContainer();
    }
}

let sq = document.getElementById('square');

squareBtn.addEventListener('click', () => {
    if (sq) {
        console.log(new Square(sq.value))
    }
})

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.color = this.randColor();
        this.width = width;
        this.height = height;
        this.name = "Rectangle";
        this.whereInBox();
        this.howToLook();
        this.putInContainer();
    }
}

let rectWid = document.getElementById('rectangle-height');
let rectHeight = document.getElementById('rectangle-width');

rectangleBtn.addEventListener('click', () => {
    if(rectWid && rectHeight) {
        console.log(new Rectangle(rectWid.value, rectHeight.value))
    }
})

class Circle extends Shape {
    constructor(radius) {
        super();
        this.color = this.randColor();
        this.radius = radius;
        this.name = "Circle";
        this.width = radius * 2;
        this.height = radius * 2;
        this.whereInBox();
        this.howToLook();
        this.putInContainer();
    }

    howToLook() {
        $(this.base).css({
            "background-color": this.randColor(),
            "position": "absolute",
            "height": this.height + "px",
            "width": this.width + "px",
            "top": this.long,
            "left": this.lat,
            "border-radius": this.radius + "px",
        });
    }
}

let cir = document.getElementById('circle');


circleBtn.addEventListener('click', () => {
    if(cir) {
        console.log(new Circle(cir.value))
    }
})

class Triangle extends Shape {
    constructor(height) {
        super();
        this.color = this.randColor();
        this.width = height;
        this.height = height;
        this.name = "Triangle";
        this.whereInBox();
        this.howToLook();
        this.putInContainer();
    }

    howToLook() {
        $(this.base).css({
            "position": "absolute",
            "left": this.lat,
            "top": this.long,
            "width": 0 + "px",
            "height": 0 + "px",
            "border-bottom": `${this.width}px solid ${this.randColor()}`,
            "border-left": this.width + "px solid transparent",
        });
    }
}

let tri = document.getElementById('triangle');


triangleBtn.addEventListener('click', () => {
    if(tri) {
        console.log(new Triangle(tri.value))
    }
})

