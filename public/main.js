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

const accepted = ['png','jpeg','jpg','PNG','JPEG','JPG']

    if(!title || !content || !thumbnail || category === '0') {
       return displayMessage('red','Please fill all fields')
    }

const extension = thumbnail.split('.').pop()
if(!accepted.includes(extension)) {
    return displayMessage('red','Please upload a png, jpeg or jpg image')
}else{
    displayMessage('green','Post created successfully')
    form.reset()
}
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('form is submit')
    validate()
})