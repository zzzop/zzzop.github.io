const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date("Dec 25, 2020 21:00:00").getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText = Math.floor(distance / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      ));

    //let distance = now;

    (document.getElementById("hours1").innerText = Math.floor(
      (now % day) / hour + 8
    )),
      (document.getElementById("minutes1").innerText = Math.floor(
        (now % hour) / minute
      )),
      (document.getElementById("seconds1").innerText = Math.floor(
        (now % minute) / second
      ));

    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'IT'S MY BIRTHDAY!;
    //}
  }, second);
