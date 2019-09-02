function check(){
    var condType = document.getElementsByName('group2');
    for(i = 0; i < 1; i++){
      if( condType[i].checked )     
      var  unit = condType[i].value;
              if (unit === "all"){
                  var roh = 0.0000000265;         
              }
              else {
                  var roh = 0.0000000168;
                           }   
                        }
    
    
   var	loadValue= document.getElementById('loadValue').value;
    var	len = document.getElementById('len').value;
    var	permDrop = document.getElementById('permDrop').value;
     var sysVolt =document.getElementById('sysVolt').value;
     var fp=document.getElementById('Fp').value;


    function area(){

        fp = 0.8;
    
    var loadType = document.getElementsByName('group1');
    
    for (i=0; i < loadType.length; i++) {

   if  (loadType[i].checked)   
    if (loadType[i].value=="tPhase"){
        var loadUnit = document.getElementsByName('group3');
     for (i=0; i < loadUnit.length; i++) {
        if  (loadUnit[i].checked)   
         if(loadUnit[i].value =="pow") {
            A = (((100*loadValue*roh*len)/((100 - permDrop)*(3*(sysVolt*sysVolt)))) * 1000000);
            document.getElementById('answer').innerHTML = A;
                         }
          else {
            var A = (((100 *loadValue * roh * len)/(( 3 * (100 -permDrop)) * (sysVolt**2)))*(10**6));
            document.getElementById('answer').innerHTML = A;
              }
              
    }
   
    
    }
   else  if(loadType[i].value=="sPhase") { 
   var loadUnit = document.getElementsByName('group3');
   for (i=0; i < loadUnit.length; i++) {
      if  (loadUnit[i].checked)    
       if(loadUnit[i].value =="pow") {
           var A = (((100*loadValue*roh*len)/((100-permDrop)*(fp*(sysVolt*sysVolt)))) * 1000000);
           document.getElementById('answer').innerHTML = A;
                       }
        else {
           var A = (((100*loadValue*roh*len)/((100-permDrop)*(sysVolt)))* 1000000);
           document.getElementById('answer').innerHTML = A;
            } 
           
} 
   
    }

   else {
        var loadUnit = document.getElementsByName('group3');
     for (i=0; i < loadUnit.length; i++) {
        if  (loadUnit[i].checked)    
         if(loadUnit[i].value =="pow") {
            var A = (100*loadValue*roh*len)/((100-permDrop)*(sysVolt*sysVolt)) * 1000000;
            document.getElementById('answer').innerHTML = A;
                         }
          else {
            var A = (((100*loadValue*roh*len)/((100-permDrop)*(sysVolt)))* 1000000);
            document.getElementById('answer').innerHTML = A;
              } 
            
 }
 
    }

   
}
    
    }
        area();
    
}
