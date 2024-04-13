const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let timer;
let time = 0;
let isRunning = false;

function displayTime() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            time++;
            displayTime();
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTimer() {
    time = 0;
    displayTime();
    pauseTimer();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

document.addEventListener('DOMContentLoaded', function() {
    const whiteNoiseAudio = document.getElementById('whiteNoiseAudio');
    const toggleBtn = document.getElementById('toggleWhiteNoiseBtn');

    toggleBtn.addEventListener('click', function() {
        if (whiteNoiseAudio.paused) {
            whiteNoiseAudio.play();
            toggleBtn.textContent = 'pause'; // Update button text
        } else {
            whiteNoiseAudio.pause();
            toggleBtn.textContent = 'Play '; // Update button text
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('addTodoBtn');
    const input = document.getElementById('todoInput');
    const list = document.getElementById('todoList');

    addBtn.addEventListener('click', function() {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = input.value;
            li.className = 'todo-item';
            li.addEventListener('click', function() {
                li.classList.toggle('completed');
            });

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'X';
            removeBtn.className = 'todo-remove-btn';
            removeBtn.onclick = function() {
                list.removeChild(li);
            };

            li.appendChild(removeBtn);
            list.appendChild(li);

            input.value = ''; // Clear input field
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const calendarGrid = document.getElementById('calendarGrid');
    const dropdown = document.getElementById('dropdown');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    // Generate calendar
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarGrid.innerHTML += '<div class="calendar-day"></div>';
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const calendarDay = document.createElement('div');
        calendarDay.textContent = i;
        calendarDay.classList.add('calendar-day');
        calendarGrid.appendChild(calendarDay);

        // Add click event listener to show tasks dropdown
        calendarDay.addEventListener('click', function() {
            const tasksForDay = getTasksForDay(currentYear, currentMonth, i);
            showDropdown(tasksForDay, calendarDay);
        });
    }
});

// Sample function to get tasks for a specific day (replace with your actual implementation)
function getTasksForDay(year, month, day) {
    // Example implementation:
    // Here, you would retrieve tasks for the specified day from your to-do list
    // and return them as an array of strings.
    return ["Task 1", "Task 2"];
}

// Function to show dropdown menu with tasks
function showDropdown(tasks, targetElement) {
    // Clear dropdown
    dropdown.innerHTML = '';

    // Populate dropdown with tasks
    tasks.forEach(task => {
        const dropdownItem = document.createElement('div');
        dropdownItem.textContent = task;
        dropdownItem.classList.add('dropdown-item');
        dropdownItem.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent calendar click event from firing
        });
        dropdown.appendChild(dropdownItem);
    });

    // Position dropdown relative to the clicked date
    dropdown.style.display = 'block';
    dropdown.style.top = targetElement.offsetTop + targetElement.offsetHeight + 'px';
    dropdown.style.left = targetElement.offsetLeft + 'px';

    // Hide dropdown when clicking outside of it
    document.addEventListener('click', hideDropdown);
}

// Function to hide dropdown menu
function hideDropdown() {
    dropdown.style.display = 'none';
    document.removeEventListener('click', hideDropdown);
}

const toggleModeBtn = document.getElementById('toggleModeBtn');
const calendarContainer = document.querySelector('.calendar-container');

toggleModeBtn.addEventListener('click', function() {
    calendarContainer.classList.toggle('dark-mode');
    const mode = calendarContainer.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
    toggleModeBtn.textContent = mode;
});

document.addEventListener('DOMContentLoaded', function() {
    const monthYearBtn = document.getElementById('monthYearBtn');
    updateMonthYearButton(); // Update initially

    monthYearBtn.addEventListener('click', function() {
        // Toggle visibility of dropdown menu or perform other actions if needed
    });
});

function updateMonthYearButton() {
    const currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const monthYearString = `${month} ${year}`;
    document.getElementById('monthYearBtn').textContent = monthYearString;
}
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const noteArea = document.getElementById('note-area');
  
    // Save note to local storage
    noteArea.addEventListener('input', function () {
      localStorage.setItem('dailyNote', noteArea.value);
    });
  
    // Retrieve saved note from local storage
    const savedNote = localStorage.getItem('dailyNote');
    if (savedNote) {
      noteArea.value = savedNote;
    }
  });
  