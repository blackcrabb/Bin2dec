let bin = document.getElementById("bin");
let dec = document.getElementById("dec");

window.onload = function(){
    bin.value = 0;
    dec.value = 0;
}
function getinput(){
    
    var sum = 0;
    var str = bin.value;
    var s =str.length ;
    if(s >8){
        alert("Cannot take more than 8") 
    }

    var j=0;
    while(j<s){
        if(str[j]==1 || str[j]==0)
        {
            j++;
        }else{
            alert("only 0/1 please");
            dec.value=0;
            break;
        }
    }
    
    for(let i=0;i<s;i++)
    {
        
        if(str[i] == 1){
            sum= sum + Math.pow(2,s-i-1);
        }
    }
    dec.value = sum;
    
    console.log("Finish")
}


