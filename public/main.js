const select = (selector) => document.querySelector(selector)

const form = select('.form')
const message = select('.message')

const displayMessage = (color,text) => {
 message.style.visibility = 'visible'
 message.style.backgroundColor = color
 message.style.test = text
}
const validate = (e) => {
    const title = select('#title').value
    const content = select('#content').value
    const thumbnail = select('#thumbnail').value
    const category = select('#category').value

    if(!title || !content || !thumbnail || category === '0') {
        displayMessage('red','Please fill all fields')
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('form is submit')
})