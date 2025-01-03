var age=  document.getElementById("age")
var weight=document.getElementById("weight")
var height=document.getElementById("height")
var message=document.querySelector(".message")
var male=document.getElementById("male")
var female=document.getElementById("female")
var number=document.querySelector(".number")

function countbmi(){
    if(age.value==''||height.value==''||weight.value==''||(male.checked==false && female.checked==false)){
        message.innerHTML="Fill the required field"
    }
    else if(weight.value<0||height.value<0||age.value<0){
        message.innerHTML="Please enter the valid input"
    }
    else{
    
        var p = [age.value, height.value, weight.value];
        var height_m = parseInt(p[1]) / 100; // Convert height to meters
        var bmi = (parseInt(p[2]) / ((parseInt(p[1]) / 100) * (parseInt(p[1]) / 100))).toFixed(3);
        var result = '';
        var curr;
        var tar;
        var result2;
        
        if (bmi < 18.5) {
            
            curr = parseInt(p[2]);
            tar = 18.5 * (height_m * height_m); 
            result2 = (tar - curr).toFixed(2); 
            result = "Underweight. <br> <span style='color: red;'>You deficit " + `${result2}` + " kg</span>";
        }
        else if(bmi>=18.5 && bmi<25){
            curr = parseInt(p[2]);
            tar = 18.5 * (height_m * height_m); 
            result2 = (curr-tar); 
            result2=(curr-result2).toFixed(2);
            let tar2 = 24.9 * (height_m * height_m); 
            let result3 = (tar2-curr); 
            result3= (parseFloat(curr)+parseFloat(result3)).toFixed(2)
            result="Healthy (till " + `${result2}` + "kg-" + `${result3}` +"kg). <br> <span style='color: green;'>Stay fit </span>"
            console.log(result)
        }
        else if(bmi>=25 && bmi<30){
            curr = parseInt(p[2]);
            tar = 24.9 * (height_m * height_m); 
            result2 = (curr - tar).toFixed(2); 
            result="Overweight.<br> <span style='color: red;'>Consider loosing " + `${result2}` + " kg</span>";
        }
        else if(bmi>=30 && bmi<35)
            {
                curr = parseInt(p[2]);
                tar = 24.9 * (height_m * height_m); 
                result2 = (curr - tar).toFixed(2); 
                result="Obese.<br> <span style='color: red;'>Consider loosing " + `${result2}` +"kg </span";
            }
            else{
                curr = parseInt(p[2]);
                tar = 24.9 * (height_m * height_m); 
                result2 = (curr - tar).toFixed(2); 
                result="Extremly Obese. <br><span style='color: red;'> You surplus "+ `${result2}` +"kg </span>";
            }
            message.innerHTML=` ${result}`
            number.innerHTML=bmi
        }
    }
        document.getElementById("submit");
        submit.addEventListener("click",countbmi);