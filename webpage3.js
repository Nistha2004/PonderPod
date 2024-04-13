// script.js
document.addEventListener('DOMContentLoaded', function () {
  const noteArea = document.getElementById('note-area');
  const saveButton = document.getElementById('save-button');

  // Retrieve saved note from local storage
  const savedNote = localStorage.getItem('dailyNote');
  if (savedNote) {
    noteArea.value = savedNote;
  }

  // Save note to local storage
  saveButton.addEventListener('click', function () {
    const noteText = noteArea.value.trim();
    if (noteText !== '') {
      localStorage.setItem('dailyNote', noteText);
      alert('Note saved successfully!');
    } else {
      alert('Please enter a note before saving.');
    }
  });
});
