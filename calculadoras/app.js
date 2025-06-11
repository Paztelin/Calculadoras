
/*funcion para obtener el valor al oprimir los botones*/
function addToDisplay(value){
    document.getElementById("display").value +=value
}

/*funcion para limpiar la calculadora*/
function clearDisplay(){
    document.getElementById("display").value = "";
} 

function calculate(){
    try{
        document.getElementById("display").value = eval
            (document.getElementById("display").value)

        }catch (error){
            document.getElementById("display").value = "Error";
        }
}