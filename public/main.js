const select = (selector) => document.querySelector(selector)

const form = select('.form')

form.eventListener('submit', (e) => {
    e.preventDefault()
    console.log('form is submit')
})