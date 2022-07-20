let span=document.getElementsByTagName('span');
let div=document.getElementsByClassName('div');
console.log("hii")
let l=0;
 
span[1].onclick=()=>{
 l++;
//  if(l==0 || l==1 ){
//     span.style.color="black"
//  }
 for(let  i of div){

     if(l==0){i.style.left ="0px";}
    //    if(l==0){
    //       span.style.color="white"
    //       console.log("hii")
      
     if(l==1){i.style.left="-740px";}
     if(l==2){i.style.left="-1100px";}
     
    
     
     // if(l==4){i.style.left="-2960px";}
     if(l>2){l=2 }
 }
}

span[0].onclick=()=>{
 l--;
 for(let  i of div){
     if(l==0){i.style.left ="0px";}
     if(l==1){i.style.left="-740px";}
    //  if(l==2){i.style.left="-1480px";}
     // if(l==3){i.style.left="-2220px";}
  
     if(l<0){l=0 }
 }
}