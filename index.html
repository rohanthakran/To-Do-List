var DataContoller =(function(){

    var data1 = function(description){
        
        this.description =description;
    };
    var data =[];

    return {
        additem: function(des){ 
            var newItem;
            
            newItem  = new data1(des);
            data.push(newItem);
            return newItem;

            
        },
       testing: function(){
           console.log(data);
       }
    }
})();


var UiController = (function(){


        return{
            getInput : function(){
            return{
                 description : document.querySelector('.description').value
        
                };
            },
                
         addList :function(description){
                    var html, newItem;
                   html = '<div class="item"> <div class="check"><i class="far fa-check-circle"></i></div><p>%Description%</p><button class="delete"><i class="far fa-trash-alt"></i></button> </div> '
                
                  newItem = html.replace('%Description%', description);
                  document.querySelector('.list1').insertAdjacentHTML('beforeend', newItem);
                }
            
        }
                 
        
})();




var controller = (function(UICntr, DataC){

        var setupEventListners = function(){
            document.querySelector('.btn').addEventListener('click', ctrlAddItem);
            document.addEventListener('keypress', function(event){
      
                if(event.keyCode === 13 || event.which === 13){
                    ctrlAddItem();
                    
                }
              
        });

    };
        var ctrlAddItem = function(){
        // 1 . get the user filled input
        console.log("Enter was pressed");
        var input = UICntr.getInput();
        
        var newItem = DataC.additem(input.description);
        console.log(newItem.description);

        UICntr.addList(input.description);

        // 2. add the item to the budget contoller

        // 3. Add the item to the ui
        }
      
        return {
            init: function(){
                console.log("application is started");
                setupEventListners();
                
            }
        }
})(UiController, DataContoller);
controller.init();
