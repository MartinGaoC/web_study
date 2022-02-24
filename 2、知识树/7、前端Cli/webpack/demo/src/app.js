import './app.css'

function component () {
    const event = document.createElement('div');

    event.innerHTML = 'app'
    event.id = 'AppEvent'

    return event;
}




document.body.appendChild(component())