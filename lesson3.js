let result = document.getElementById("result");

function clickDisplayAC(){
  result.value = "0";
}

function clickDisplayEqual(){
  result.value = eval(result.value);
}

function clickDisplayNum(btn){
  if (result.value == "0" && btn.value =="."){
      result.value = "0.";
    } else if (result.value == "0" && btn.value == "0"){
      result.value = "0";
    } else if (result.value == "0" && btn.value == "00"){
      result.value = "0";
    } else if (result.value == "0"){
      result.value = btn.value;
    } else{
      result.value += btn.value;
  }
}

function clickDisplayOpe(btn){
  let sliceOpe = result.value.slice(-1);
  if (sliceOpe == "+" || sliceOpe == "-"){
    result.value = result.value.slice(0,-1) + btn.value;
  } else if (sliceOpe == "*" || sliceOpe == "/"){
    result.value = result.value.slice(0,-1) + btn.value;
  } else if (sliceOpe == "."){
    result.value = result.value.slice(0,-1) + btn.value;
  } else{
    result.value += btn.value;
  }
}