function getInputValue(id){
    const base=document.getElementById(id);
    const baseValue=base.value;
    const baseValueInt=parseFloat(baseValue);
    return baseValueInt;
}
//function for set value to the area text
function setValue(id,result){
    const resultText=document.getElementById(id);
    resultText.innerText=result;
}
//code for triangle
function calculetAria(){  
const base=getInputValue('base-input');
 const height=getInputValue('height-input')
//  console.log(heightValueInt);
    const result=0.5*base*height;
    console.log(result);
    setValue('result-text',result);
}

//code for rectangle

function rectangleAria(){
    const wide=getInputValue('wide-input')
    const length=getInputValue('length-input');
    console.log(wide,length);
    const result=wide*length;
    setValue('result-text1',result);
}

