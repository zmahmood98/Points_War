

const { getData } = require('./apiHelpers');
const { clearForm, renderName} = require('./helpers');


function submitHandler(e){
    e.preventDefault()
    let usernamee = e.target['inputt'].value
    let usernameee = usernamee.toLowerCase()
    renderName(usernameee)
    getData(usernameee)
    clearForm()
}

module.exports = { submitHandler }
