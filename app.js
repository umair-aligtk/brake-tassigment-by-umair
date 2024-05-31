function submit(){
    let text = document.getElementById("text").value;

   if(text=== "[{()}]"){
   alert("The Brakets You Are Entered are right!")
   }

   else if(text === '()'){
    alert(" The Brakets You Are Entered are right!")
   }

   else if(text === '{}'){
    alert(" The Brakets You Are Entered are right!")
   }

   else if(text === '[]'){
    alert(" The Brakets You Are Entered are right!")
   }

   else if(text === '{()}'){
    alert("The Brakets You Are Entered are right!")
   }


   else{
   alert("please enter right brakets ")
   }
};