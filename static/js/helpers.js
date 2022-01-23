
function renderWarInfo(userData){
    const descrip = document.querySelector('#descrip')
    descrip.textContent = ' Points';
    const count = userData.points;
    const span = document.getElementById('pointid');
    span.textContent = count;
    

};


function renderName(name){
    const accountNameHolder = document.getElementById('noob-name')
    accountNameHolder.textContent = name;
}

function clearForm(){
    const form = document.querySelector('form');
    form.reset();
}

function renderError(err){
    const error = document.createElement('div');
    error.textContent = `Oh no! ${err}`;
    error.className = 'error';
    error.onclick = closeError;
    document.querySelector('header').appendChild(error);
}


function closeError(){
    const error = document.querySelector('.error');
    error.remove();
}

module.exports = { clearForm, renderName, renderWarInfo, renderError, closeError }
