const select = (selector) => document.querySelector(selector)

const form = select('.form')


const validate = (e) => {
    const title = select('#title')
    const content = select('#content')
    const thumbnail = select('#thumbnail')
    const title = select('#title')
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('form is submit')
})