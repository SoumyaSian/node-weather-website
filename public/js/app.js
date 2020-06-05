console.log('Client side Javascript file loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


// messageOne.textContent = 'From JS'
// messageTwo.textContent = 'From HBS'


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = search.value

    messageOne.textContent = 'Loading..'
    messageTwo.textContent = ' '

    fetch('/weather?address=' + location).then((res) => {
        res.json().then((forcastData) => {
            if (forcastData.error) {
                // console.log(forcastData.error)
                messageOne.textContent = forcastData.error
            } else {
                // console.log(forcastData.forcast)
                // console.log(forcastData.location)
                messageOne.textContent = forcastData.location 
                messageTwo.textContent = forcastData.forcast  

            }
        })
    })
})
