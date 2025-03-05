// button-1:
document.getElementById('btn-completed')
  .addEventListener('click', function () {
    const navNumber = document.getElementById('nav-number').innerText;
    const taskNumber = document.getElementById('task-number').innerText;

    const convertedNavNumber = parseInt(navNumber);
    const convertedTaskNumber = parseInt(taskNumber);

    if (convertedNavNumber > 0) {
      const sum = convertedNavNumber + 1;
      const sum1 = convertedTaskNumber - 1

      document.getElementById('nav-number').innerText = sum;
      document.getElementById('task-number').innerText = sum1;
      alert('Board Updated Successfully');
      document.getElementById("btn-completed").disabled = true;

      // time and title with activity log:
      const currentTime = new Date().toLocaleTimeString();
      const time = document.getElementById("currentTime").innerText;
      const box1Title = document.getElementById('box-1-title').innerText;
      const activity = document.getElementById('activity-log');
      const p = document.createElement('p');
      p.innerText = `
      You have completed the task ${box1Title} at ${currentTime}
      `
      activity.appendChild(p);



    }
    else {
      alert("No more tasks to complete!");
    }
  })

// button-2:
document.getElementById('btn-completed-2')
  .addEventListener('click', function () {
    const navNumber = document.getElementById('nav-number').innerText;
    const taskNumber = document.getElementById('task-number').innerText;

    const convertedNavNumber = parseInt(navNumber);
    const convertedTaskNumber = parseInt(taskNumber);

    if (convertedNavNumber > 0) {
      const sum = convertedNavNumber + 1;
      const sum1 = convertedTaskNumber - 1

      document.getElementById('nav-number').innerText = sum;
      document.getElementById('task-number').innerText = sum1;
      alert('Board Updated Successfully');
      document.getElementById("btn-completed-2").disabled = true;

      // time and title with activity log:
      const currentTime = new Date().toLocaleTimeString();
      const time = document.getElementById("currentTime").innerText;
      const box1Title = document.getElementById('box-2-title').innerText;
      const activity = document.getElementById('activity-log');
      const p = document.createElement('p');
      p.innerText = `
      You have completed the task ${box1Title} at ${currentTime}
      `
      activity.appendChild(p);
    }
    else {
      alert("No more tasks to complete!");
    }
  })
// button-3:
document.getElementById('btn-completed-3')
  .addEventListener('click', function () {
    const navNumber = document.getElementById('nav-number').innerText;
    const taskNumber = document.getElementById('task-number').innerText;

    const convertedNavNumber = parseInt(navNumber);
    const convertedTaskNumber = parseInt(taskNumber);

    if (convertedNavNumber > 0) {
      const sum = convertedNavNumber + 1;
      const sum1 = convertedTaskNumber - 1

      document.getElementById('nav-number').innerText = sum;
      document.getElementById('task-number').innerText = sum1;
      alert('Board Updated Successfully');
      document.getElementById("btn-completed-3").disabled = true;

      // time and title with activity log:
      const currentTime = new Date().toLocaleTimeString();
      const time = document.getElementById("currentTime").innerText;
      const box1Title = document.getElementById('box-3-title').innerText;
      const activity = document.getElementById('activity-log');
      const p = document.createElement('p');
      p.innerText = `
       You have completed the task ${box1Title} at ${currentTime}
       `
      activity.appendChild(p);
    }
    else {
      alert("No more tasks to complete!");
    }
  })
// button-4:
document.getElementById('btn-completed-4')
  .addEventListener('click', function () {
    const navNumber = document.getElementById('nav-number').innerText;
    const taskNumber = document.getElementById('task-number').innerText;

    const convertedNavNumber = parseInt(navNumber);
    const convertedTaskNumber = parseInt(taskNumber);

    if (convertedNavNumber > 0) {
      const sum = convertedNavNumber + 1;
      const sum1 = convertedTaskNumber - 1

      document.getElementById('nav-number').innerText = sum;
      document.getElementById('task-number').innerText = sum1;
      alert('Board Updated Successfully');
      document.getElementById("btn-completed-4").disabled = true;

      // time and title with activity log:
      const currentTime = new Date().toLocaleTimeString();
      const time = document.getElementById("currentTime").innerText;
      const box1Title = document.getElementById('box-4-title').innerText;
      const activity = document.getElementById('activity-log');
      const p = document.createElement('p');
      p.innerText = `
       You have completed the task ${box1Title} at ${currentTime}
       `
      activity.appendChild(p);
    }
    else {
      alert("No more tasks to complete!");
    }
  })
// button-5:
document.getElementById('btn-completed-5')
  .addEventListener('click', function () {
    const navNumber = document.getElementById('nav-number').innerText;
    const taskNumber = document.getElementById('task-number').innerText;

    const convertedNavNumber = parseInt(navNumber);
    const convertedTaskNumber = parseInt(taskNumber);

    if (convertedNavNumber > 0) {
      const sum = convertedNavNumber + 1;
      const sum1 = convertedTaskNumber - 1

      document.getElementById('nav-number').innerText = sum;
      document.getElementById('task-number').innerText = sum1;
      alert('Board Updated Successfully');
      document.getElementById("btn-completed-5").disabled = true;

      // time and title with activity log:
      const currentTime = new Date().toLocaleTimeString();
      const time = document.getElementById("currentTime").innerText;
      const box1Title = document.getElementById('box-5-title').innerText;
      const activity = document.getElementById('activity-log');
      const p = document.createElement('p');
      p.innerText = `
       You have completed the task ${box1Title} at ${currentTime}
       `
      activity.appendChild(p);
    }
    else {
      alert("No more tasks to complete!");
    }
  })
// button-6:
document.getElementById('btn-completed-6')
  .addEventListener('click', function () {
    const navNumber = document.getElementById('nav-number').innerText;
    const taskNumber = document.getElementById('task-number').innerText;

    const convertedNavNumber = parseInt(navNumber);
    const convertedTaskNumber = parseInt(taskNumber);

    if (convertedNavNumber > 0) {
      const sum = convertedNavNumber + 1;
      const sum1 = convertedTaskNumber - 1

      document.getElementById('nav-number').innerText = sum;
      document.getElementById('task-number').innerText = sum1;
      alert('Board Updated Successfully');
      document.getElementById("btn-completed-6").disabled = true;

      // time and title with activity log:
      const currentTime = new Date().toLocaleTimeString();
      const time = document.getElementById("currentTime").innerText;
      const box1Title = document.getElementById('box-6-title').innerText;
      const activity = document.getElementById('activity-log');
      const p = document.createElement('p');
      p.innerText = `
       You have completed the task ${box1Title} at ${currentTime}
       `
      activity.appendChild(p);

      alert('Congrats!!! You have completed all the current task')
    }
    else {
      alert("No more tasks to complete!");
    }
  })


// clear history 
document.getElementById('clear-btn')
  .addEventListener('click', function () {
    let activityLog = document.getElementById("activity-log");
    let newEntries = document.querySelectorAll("#activity-log .entry");
    newEntries.forEach(entry => entry.remove());
  });


// Adding main.html
document.getElementById('news-container')
  .addEventListener('click', function () {
    window.location.href = 'main.html';
  })

// random color:
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById('random-color')
  .addEventListener('click', function () {
    body.style.backgroundColor = getRandomColor();
  })


// current date:

const date = new Date();
let days = date.getDay()
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-Mar ${month}-${year}`;

document.getElementById("date").innerHTML = currentDate;

