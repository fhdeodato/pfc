setTimeout(()=>{
   console.log("PFC");
   if(document.getElementById("endChatItem")){
      document.getElementById("endChatItem").click();
   }
   setTimeout(()=>{
      document.getElementById("endChatConfirm").click();
   }, 200);
}, 200);
