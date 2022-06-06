window.onload = function() {
   const faceElement = document.querySelector("#face");
   const happyBtn = document.querySelector("#happy");
   const sadBtn = document.querySelector("#sad");
   const angryBtn = document.querySelector("#angry");
   const confusedBtn = document.querySelector("#confused");

   
      happyBtn.addEventListener("click", function () {
         store.dispatch({ type: "HAPPY"});
         const currentFace = store.getState();
         faceElement.innerText = currentFace.happy;
      })

      sadBtn.addEventListener("click", function () {
         store.dispatch({ type: "SAD"});
         const currentFace = store.getState();
         faceElement.innerText = currentFace.sad;
      })

      angryBtn.addEventListener("click", function () {
         store.dispatch({ type: "ANGRY"});
         const currentFace = store.getState();
         faceElement.innerText = currentFace.angry;
      })

      confusedBtn.addEventListener("click", function () {
         store.dispatch({ type: "CONFUSED"});
         const currentFace = store.getState();
         faceElement.innerText = currentFace.confused;
      })


}