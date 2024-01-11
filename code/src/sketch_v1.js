const nombreLigne = 30; 
const longueur = 50; 
const variation = 150; 
const dureeTransition = 100;  
const noiseScale=0.02;
const boostSetup = 10;
const strokeW = 2;  



function setup() {
  createCanvas(1025, 615); //width/2 = 512.5
  frameRate(1); 
  background(0);
  strokeWeight(strokeW);


  let hauteur = 0; 
  let espaceLigne = height/(nombreLigne+1); 
  let startChange = (width/2)-(longueur/2); 
  let endChange =  (width/2)+(longueur/2); 

  for(let j=0; j < nombreLigne; j++ ){ 
    hauteur = hauteur+espaceLigne; 
    let ligneUnique = random() * width; 
    let boost=0;
    let ajout = variation/dureeTransition; 

      

    for (let x=-width; x < width*2; x++) {      
      
      if(x > startChange-ligneUnique && x < endChange-ligneUnique){
        boost = variation; 
      }
      else if (x > startChange-ligneUnique-dureeTransition && x <startChange-ligneUnique){
        if (boost<variation){
          boost=boost+ajout; 
        }
      
      }
      else if (x > endChange-ligneUnique && x < endChange-ligneUnique+dureeTransition){
        if (boost>boostSetup){
          boost=boost-ajout; 
        }
      }

      else if(x < startChange-ligneUnique-dureeTransition || x > endChange-ligneUnique+dureeTransition){
         boost=boostSetup; 
       }


      let noiseVal = noise(x*noiseScale, noiseScale);
      stroke(255);
      let scale = -noiseVal*boost;
      line(x+ligneUnique, hauteur+scale, x+ligneUnique, hauteur+scale+2);
      stroke(0);
      line(x+ligneUnique, height, x+ligneUnique, hauteur+scale+2);
     

     
    }

  }
  fill(0);
  noStroke();
  rect(0, 0, width/4, height);
  rect(width, 0, -width/4, height);



  

}




function draw() {

 
}
