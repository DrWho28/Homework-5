//defining moment
const Moment = moment()
let time = new Date().getTime()
let today = moment(time).format('dddd MMMM Do YYYY')
console.log(today)

//getting DOM elements
const TodaysDate = document.getElementById('todays-date')

//changing the date to be dynamic
TodaysDate.innerText = today