// délclaration de variables 
let r = 0;
let g = 0;
let b = 0;
let size = 50; 
let grow = true; 
let backgroundcolor = ''; 

function setup() {
  createCanvas(600, 600); //création canvas 600px par 600px
  frameRate(60); //affichage 60fps
  backgroundcolor = random(100, 200); //création du gris
  background(backgroundcolor) 
}

function draw() {
  //nettoyage canvas
  fill(backgroundcolor)
  rect(0, 0, 600, 600);

  //création du cercle
  fill(r, g, b);
  ellipse(300, 300, size, size);


  //conditions d'agrandissement 
  if(size == 50){
    grow = true; 
  }
  if (size == 400){
    grow = false; 
  }

  //nouvelle taille du cercle 
  if (grow == true){
    size = size + 1; 
  }else {
    size = size - 1; 
  }

  //incrémentation des la couleurs 
  r = (r + 1) % 256;
  g = (g + 2) % 256;
  b = (b + 3) % 256;
  
}
