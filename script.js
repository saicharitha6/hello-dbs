const sub = document.getElementById('button')
const id = document.getElementById('id')
const username = document.getElementById('name')
const emailId = document.getElementById('emailid')
const loc = document.getElementById('location')
const time = document.getElementById('apptime')
const schedule = document.getElementById('schedules')

sub.addEventListener('click',()=>{
    schedule.append(createDiv())
})

function createDiv() {

    const outerDiv = document.createElement('div')
    const statusDiv = document.createElement('div')
    const detailsDiv = document.createElement('div')
    const timeTag = document.createElement('h2')
    const placeTag = document.createElement('h2')

    outerDiv.className='event'
    detailsDiv.className='details'
    timeTag.className='time'
    timeTag.textContent = time.value
    placeTag.className='place'
    placeTag.textContent=loc.value
    statusDiv.className='status'
    statusDiv.textContent='Pending'

    detailsDiv.append(timeTag,placeTag)
    outerDiv.append(detailsDiv,statusDiv)

    return outerDiv

}