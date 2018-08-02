 window.onload = function (){
              
        
          var body = document.getElementsByTagName('body')[0];
          var table = document.createElement('TABLE');
          var tblB = document.createElement('TBODY');
                  table.appendChild(tblB);
          
          function randomNumber(min, max) {
                   return min + Math.floor(Math.random() * (max + 1 - min));
                  }
  
          function getRandomColor(){
                  var hex = Math.floor(Math.random() * 0xFFFFFF);
                  return "#" + ("000000" + hex.toString(16)).substr(-6);
          }  
  
          for (var i = 0; i < 10; i++){
                  var tr = document.createElement('TR');
                  tblB.appendChild(tr);
                  tr.addEventListener('click', getRandomColor);
  
                  for(var j = 0; j < 10; j++){
                          var td = document.createElement('TD');
                          td.textContent = randomNumber(1, 99);
                          tr.appendChild(td);       
                  }
          }
          body.appendChild(table);        
          console.log(tblB.rows.length);
             
  //         // top
          for (var l = 0; l < tblB.rows.length - 9  ; l++){
              for (var y = 0; y < tblB.rows.length; y++){
                   tblB.rows[l].cells[y].style.background = 'red' 
              }    
  
          }
  
  //         // right
          for (var l = 1; l < tblB.rows.length; l++){
                  tblB.rows[l].cells[9].style.background = 'red';
          }
  
          // left
          for (var l = 1; l < tblB.rows.length; l++){
                  tblB.rows[l].cells[0].style.background = 'red';   
          }
          
          // bottom
          for (var l = 9; l < tblB.rows.length  ; l++){
              for (var y = 0; y < tblB.rows.length; y++){
                   tblB.rows[l].cells[y].style.background = 'red'; 
              }    
          }
  
          for (var d = 0, c = 0; d < tblB.rows.length , c < tblB.rows.length - 2; c++, d++) {
                  tblB.rows[d + 1].cells[c + 1].style.background = getRandomColor();
                  
  
          }
  
  
            for (var d = 0, c = tblB.rows.length - 1; d < tblB.rows.length , c > 1 ; c--, d++) {
                  tblB.rows[d + 1].cells[c - 1].textContent = 'cool';
  
          }

          

  }
 

 