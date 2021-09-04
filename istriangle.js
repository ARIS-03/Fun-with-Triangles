//queryselector of chechifTriangle

const inputs = document.querySelectorAll('.angle-input')
const isTriangleBtn = document.querySelector('#is-triangle-btn');

const output = document.querySelector('#output');

//Sum the triangle

function sumofAngles(angle1,angle2,angle3) {

    const sum= angle1+angle2+angle3;
    return sum;


}



function isTriangle() {
    sum = sumofAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));


    if (sum===180)
    output.innerText ="Yay, The angles from a triamgle";


    else 
        output.innerText = "Oh Oh! The angles don't form a triangle"
    }



isTriangleBtn.addEventListener("click", isTriangle);



const quizform = document.querySelector('#quizform');
const quizBtn = document.querySelector('#quizBtn');
const quizDisplay=document.querySelector('#quizDisplay');

const correctAnswers = ["90","Right-Angled"];

function calculateScore(){

    let score = 0;
    let index = 0;

    const formAnswers = new FormData(quizform);
    for (let value of formAnswers.values())
    {
        if(value===correctAnswers[index]){

            score+=1;
        }
        index=index+1;
    }
    quizDisplay.innerText="Score is:" +score;
}
quizBtn.addEventListener("click",calculateScore);






const hypoInputs=document.querySelectorAll('.sideInput');
const hypoBtn=document.querySelector('#hypoBtn');
const hypoDisplay=document.querySelector('#hypoDisplay');

//functions of hypotenuse

function calculateSumOfSquares(a,b){

   const sumOfSides=(a*a)+( b*b);
   console.log(sumOfSides);
   return sumOfSides;
}

function calculateHypo(){

    const sumofSides=calculateSumOfSquares(Number(hypoInputs[0].value),Number(hypoInputs[1].value),3);
    const hypo=Math.sqrt(sumofSides);
    hypoDisplay.innerText="The Hypotenuse is ="+ hypo;
 }
 
 if(hypoBtn)
 {
    hypoBtn.addEventListener("click",calculateHypo);
 }



  //queryselector of area
const areaInputs=document.querySelectorAll('.areaInput');
const areaBtn=document.querySelector('#areaBtn');
const areaDisplay=document.querySelector('#areaDisplay');

//functions of area

function calculateProductOfSides(a,b){

   const productOfSides=(a*b);
   console.log(productOfSides);
   return productOfSides;
}

function calculatearea(){

    const productOfSides=calculateProductOfSides(Number(areaInputs[0].value),Number(areaInputs[1].value),3);
    const area=0.5*productOfSides;
    areaDisplay.innerText="The Area is ="+ area;
 }
 
 if(areaBtn)
 {
    areaBtn.addEventListener("click",calculatearea);
 }









