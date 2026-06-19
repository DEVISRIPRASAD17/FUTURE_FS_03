function calculateBMI(){

    let weight =
    document.getElementById("weight").value;

    let height =
    document.getElementById("height").value;

    if(weight === "" || height === ""){

        document.getElementById("result")
        .innerHTML = "Please enter all values";

        return;
    }

    height = height / 100;

    let bmi =
    weight / (height * height);

    let category = "";

    if(bmi < 18.5){
        category = "Underweight";
    }
    else if(bmi < 25){
        category = "Normal Weight";
    }
    else if(bmi < 30){
        category = "Overweight";
    }
    else{
        category = "Obese";
    }

    document.getElementById("result")
    .innerHTML =
    `Your BMI: ${bmi.toFixed(1)} (${category})`;
}


/* CONTACT FORM */

document
.getElementById("contactForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const message =
    document.getElementById("userMessage").value;

    try{

        const response = await fetch(
            "http://localhost:5000/contact",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    message
                })
            }
        );

        const result =
        await response.json();

        document.getElementById("message")
        .innerHTML =
        result.message;

        document
        .getElementById("contactForm")
        .reset();

    }
    catch(error){

        document.getElementById("message")
        .innerHTML =
        "Backend Connection Failed";

    }

});