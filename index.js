const input = document.querySelector ( 'input')

function addingEventListner (){
    input.addingEventListner ( 'click',function (event){
        return "clicked"
    });
}