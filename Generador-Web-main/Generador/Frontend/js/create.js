document.addEventListener('DOMContentLoaded', function () {
  const user = localStorage.getItem('user');
  const form = document.getElementById('form ');
  const list = document.getElementById('list');
  const outputTag = document.getElementById('result');
  const temperature = document.getElementById('temperature');
  const textInput  = document.getElementById('textInput ');
  var newSongText;

  // Cargar canciones guardadas al iniciar
  getSongs();

  form .addEventListener('submit', function (event) {
      event.preventDefault();

      newSongText = textInput .value.trim();

      if (newSongText !== '') {
          // Generar y mostrar la canción
          createSong(newSongText, temperature.value);
          addSongs(newSongText);

          textInput .value = '';

      }
  });

  function getSongs() {
      const songs = JSON.parse(localStorage.getItem(user + 'Songs')) || [];
      songs.forEach(song => {
          const listItem = document.createElement('li');
          listItem.classList.add('list-group-item');
          listItem.textContent = song;
          list.appendChild(listItem);
      });
  }

const createSong = async (inputData, temperature) => {
  await fetch('/create', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: [inputData, temperature] }),
  }).then(response => response.json())
  .then(data => showSongs(data));
}

function showNext() {
  // Muestra los elementos ocultos
  document.querySelector('.user-message').style.display = 'block';
  document.getElementById('result').style.display = 'block';
  document.getElementById('loader').style.display = 'block';
}

function updateInformation() {
    var keyword = document.getElementById("textInput ").value;

    document.getElementById("keywordDisplay").innerText = keyword;

    var resultContent = document.getElementById("result").innerText;

    var firstWord = resultContent.split(' ')[0];

    document.getElementById("keywordDisplay").innerText = firstWord;
}


function showSongs(song) {
  console.log(song);

  outputTag.innerHTML = '';

  const paragraphs = song.split('\n');

  paragraphs.forEach((paragraph) => {
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = paragraph;
    outputTag.appendChild(resultParagraph);
    updateInformation();
    showNext();
  });

  localStorage.setItem(user + newSongText, song);
}


  function addSongs(song) {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.textContent = song;
      list.appendChild(listItem);

      const songs = JSON.parse(localStorage.getItem(user + 'Songs')) || [];
      songs.push(song);
      localStorage.setItem(user + 'Songs', JSON.stringify(songs));
  }

  list.addEventListener('click', function (event) {
    const clickedItem = event.target;
  
    if (clickedItem.tagName === 'LI') {
      const selectedSongTitle = clickedItem.textContent.trim();
  
      const selectedSongContent = localStorage.getItem(user + selectedSongTitle);
  
      console.log(selectedSongContent);
  
      outputTag.innerHTML = '';
      const resultParagraph = document.createElement('p');
      resultParagraph.textContent = selectedSongContent;
      outputTag.appendChild(resultParagraph);
      updateInformation();
      showNext();
    }
  });
});
