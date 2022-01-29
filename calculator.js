
// for showing what is being clicked
function showit(id){
    document.getElementById("calculation").innerHTML += document.getElementById(id).innerHTML
}



// for removing one digit form last when remove button clicked
 function removeit(){
     let innerContent = document.getElementById("calculation").innerHTML;
     document.getElementById("calculation").innerHTML = innerContent.slice(0,-1)
 }


// solving the whole expression
 function solve(){

    try{






    let innerContent = document.getElementById("calculation").innerHTML;

    let parsedContent = "";

    let rootStatus = "no";
    for (let i of innerContent){

        // condition if there was a root symbol used previously in the expression
        if (rootStatus =="yes"){

            // if the value of i is not a number then root the value till now first then move further
            if (isNaN(i)){
                parsedContent += "**(1/2)";
                rootStatus = "no";
            }
        }

        // when no need to convert the symbol
        if (i != "×" &&  i != "÷" && i != "√"){
            parsedContent += i
        }
        // when Symbol conversion needed
        else{
            if (i=="×"){
                parsedContent += "*"
            }
            else if(i=="÷"){
                parsedContent += "/"
            }
            else{
                rootStatus = "yes"
                     }
        }
    }

    // if there was a root and there was no operator after that then root the whole expression
    if (rootStatus =="yes"){
            parsedContent += "**(1/2)";
    }

    
    let solution = eval(parsedContent)
    document.getElementById("calculation").innerHTML = solution
    
    
}






catch(err){
    
    document.getElementById("calculation").innerHTML = "Error"
}


 }



//  to clear the display 

function clearit(){
    document.getElementById("calculation").innerHTML = ""
}