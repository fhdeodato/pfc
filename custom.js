setTimeout(()=>{
   console.log("PFC");
   if(document.getElementById("endChatItem")){
      document.getElementById("endChatItem").click();
   }
   setTimeout(()=>{
      if(document.getElementById("endChatConfirm")){
         document.getElementById("endChatConfirm").click();
      }
   }, 200);
}, 200);
