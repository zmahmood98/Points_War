const { renderWarInfo} = require("./helpers")
const inputt = document.getElementById("inputt");

function getData(){
    let inputValue = inputt.value.toLowerCase();
    fetch(`https://points-war.herokuapp.com/war/${inputValue}`)
        .then((response) => response.json())
        .then(renderWarInfo)
        console.log('it worked')
}


module.exports = { getData }

