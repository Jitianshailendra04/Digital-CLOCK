 const form =  document.querySelector('form')
 // This use case gives us Empty value 
 //const height   =parseInt(document.querySelector('#height').value)

 form.addEventListener('submit',function(e){
e.preventDefault()
const height   = parseInt(document.querySelector('#height').value)
const weight   = parseInt(document.querySelector('#weight').value)
const results  = document.querySelector('#results')


if (height === '' || height < 0 || isNaN(height)) {
results.innerHTML = `please enter valid height ${height}`;
}
else if (weight === '' || height < 0 || isNaN(weight)) {
    results.innerHTML = `please enter valid height ${weight}`;
    }
    else{
        const bmi =(weight / ((height * height)/ 10000)).toFixed(2);
   // show  Text

   results,this.innerHTML =`<span> ${bmi}</span>`;
    }



 });