let arr = ["john", "JACOB", "jinGleHeimer", "schmidt"];

function capitalizeNames(arr){

  return arr.map((elem) => {
    let up = elem.slice(1).toLowerCase();
    return elem[0].toUpperCase().concat(up);
  })
}
console.log(capitalizeNames(arr))