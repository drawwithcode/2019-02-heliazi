function preload(){

}
  var colorList1 = ['#FF00FF','#DDA0DD','#6495ED'];
  var colorList2 = ['#800080','#4B0082', '#FFE4E1', '#B0C4DE'];

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(8);
}

function draw() {
  // ellipse
     for( var x= 0; x<width; x+=200){

  for(var y=0; y<height; y+=200){

          fill(color(random(colorList1)));
          noStroke();
  ellipse(x,y,100,100);
         }
       }
       for( var i= 90; i<width; i+=200){

           for(var t=90; t<height; t+=200){

          fill(color(random(colorList1)));
            noStroke();
      rect(i,t,20,20);
           }
         }


  //rect 2
  for( var z= 0; z<width; z+=200){

      for(var m=0; m<height; m+=200){

       fill(color(random(colorList2)));
       noStroke();
  rect(z+20,m+20,70,70);
      }
    }
    for( var i= 90; i<width; i+=200){

        for(var t=90; t<height; t+=200){

         fill(color(random(colorList2)));
         noStroke();

   rect(i,t,90,100);
        }
      }
  //rect 3
      for( var z= 0; z<width; z+=200){

          for(var m=0; m<height; m+=200){

           fill(color(random(colorList1)));
           noStroke();
      rect(z+50,m+50,50,50);
          }
        }
        for( var i= 90; i<width; i+=200){

            for(var t=90; t<height; t+=200){

             fill(color(random(colorList1)));
             noStroke();

       rect(i,t,50,50);
            }
          }
  //rect 4
    for( var z= 0; z<width; z+=200){

      for(var m=0; m<height; m+=200){

           fill(color(random(colorList2)));
           noStroke();
        rect(z+60,m+60,20,20);
          }
        }
       for( var i= 90; i<width; i+=200){

       for(var t=90; t<height; t+=200){

      fill(color(random(colorList2)));
      noStroke();
      rect(i,t,30,30);
         }
    }

}
