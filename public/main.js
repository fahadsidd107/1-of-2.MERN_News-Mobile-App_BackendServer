const select = (selector) => document.querySelector(selector)

const form = select('.form')
const message = select('.message')

const displayMessage = (color,text) => {
 message.style.visibility = 'visible'
 message.style.backgroundColor = color
 message.innerText = text
 setTimeout(() => {
    message.style.visibility = 'hidden'
 }, 3000)
}
const validate = (e) => {
    const title = select('#title').value
    const content = select('#content').value
    const thumbnail = select('#thumbnail').value
    const category = select('#category').value

const accepted = ['png','jpeg','jpg']

    if(!title || !content || !thumbnail || category === '0') {
       return displayMessage('red','Please fill all fields')
    }

const extension = thumbnail.split('.').pop()
console.log(extension)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('form is submit')
    validate()
})