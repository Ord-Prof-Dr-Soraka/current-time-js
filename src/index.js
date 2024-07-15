import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import MicroModal from "micromodal";

dayjs.extend(utc)
dayjs.extend(timezone)

document.addEventListener('DOMContentLoaded', () => {
    MicroModal.init()
})

let span = document.getElementById("span")
let h1 = document.getElementById("h1")
let p = document.getElementById("p")

let zone = dayjs.tz.guess()

function changeTimezone(timezone) {
    zone = timezone
}

function updateTime() {
    const today = dayjs().tz(zone)
    let hour = today.format("h:mm:ss A")
    let date = today.format("dddd, D MMMM, YYYY")

    if (span) {
        span.innerHTML = zone
    } else {
        console.error("Element with id 'span' is not found.");
    }

    if (h1) {
        h1.innerHTML = hour
    } else {
        console.error("Element with id 'span' is not found.");
    }

    if (p) {
        p.innerHTML = date
    } else {
        console.error("Element with id 'span' is not found.");
    }
}

updateTime()

setInterval(updateTime, 1000)

window.changeTimezone = changeTimezone