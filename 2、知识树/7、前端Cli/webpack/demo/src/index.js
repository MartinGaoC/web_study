import './app.css'
function component () {
    const event = document.createElement('div');

    event.innerHTML = 'hello world'
    event.id = 'Event'
    return event;
}




document.body.appendChild(component())