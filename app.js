var UiController = (function(){
        return{
            getInput : function(){
                return{
                 description : document.querySelector('.description').value
        
                };
              }
        };
})();




var controller = (function(UICntr){

        
        var ctrlAddItem = function(){
        // 1 . get the user filled input
        console.log("Enter was pressed");
        var input = UICntr.getInput();
        console.log(input); 


        // 2. add the item to the budget contoller

        // 3. Add the item to the ui
        }
       document.querySelector('.btn').addEventListener('click',ctrlAddItem);
        document.addEventListener('keypress', function(event){
  
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
                console.log("erere");
            }
          
    });
})(UiController);