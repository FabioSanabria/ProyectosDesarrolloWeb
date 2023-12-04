document.addEventListener('DOMContentLoaded', function () {
  const songForm = document.getElementById('songForm');
  const songText = document.getElementById('songText');
  const songList = document.getElementById('songList');
  const resultDiv = document.getElementById('result');
  const temperatureSlider = document.getElementById('temperatureSlider');
  const user = localStorage.getItem('user');
  var newSongText;

  // Cargar canciones guardadas al iniciar
  loadSavedSongs();

  songForm.addEventListener('submit', function (event) {
      event.preventDefault();

      newSongText = songText.value.trim();

      if (newSongText !== '') {
          // Generar y mostrar la canción
          generateSong(newSongText, temperatureSlider.value);
          saveSong(newSongText);

          songText.value = '';

      }
  });

  function loadSavedSongs() {
      const storedSongs = JSON.parse(localStorage.getItem(user + 'Songs')) || [];
      storedSongs.forEach(song => {
          const listItem = document.createElement('li');
          listItem.classList.add('list-group-item');
          listItem.textContent = song;
          songList.appendChild(listItem);
      });
  }

const generateSong = async (inputData, temperature) => {
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
  .then(data => displayGeneratedSong(data));
}

function showNext() {
  // Muestra los elementos ocultos
  document.querySelector('.user-message').style.display = 'block';
  document.getElementById('result').style.display = 'block';
}

function updateKeyword() {
    var keyword = document.getElementById("songText").value;

    document.getElementById("keywordDisplay").innerText = keyword;

    var resultContent = document.getElementById("result").innerText;

    var firstWord = resultContent.split(' ')[0];

    document.getElementById("keywordDisplay").innerText = firstWord;
}


function displayGeneratedSong(song) {
  console.log(song);

  resultDiv.innerHTML = '';

  const paragraphs = song.split('\n');

  paragraphs.forEach((paragraph) => {
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = paragraph;
    resultDiv.appendChild(resultParagraph);
    updateKeyword();
    showNext();
  });

  localStorage.setItem(user + newSongText, song);
}


  function saveSong(song) {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.textContent = song;
      songList.appendChild(listItem);

      const storedSongs = JSON.parse(localStorage.getItem(user + 'Songs')) || [];
      storedSongs.push(song);
      localStorage.setItem(user + 'Songs', JSON.stringify(storedSongs));
  }

  songList.addEventListener('click', function (event) {
    const clickedItem = event.target;
  
    if (clickedItem.tagName === 'LI') {
      const selectedSongTitle = clickedItem.textContent.trim();
  
      const selectedSongContent = localStorage.getItem(user + selectedSongTitle);
  
      console.log(selectedSongContent);
  
      resultDiv.innerHTML = '';
      const resultParagraph = document.createElement('p');
      resultParagraph.textContent = selectedSongContent;
      resultDiv.appendChild(resultParagraph);
      updateKeyword();
      showNext();
    }
  });
});


/*
document.addEventListener('DOMContentLoaded', function () {
  const lyricsForm = document.getElementById('lyricsForm');
  const lyricsInput = document.getElementById('lyricsInput');
  const lyricsList = document.getElementById('lyricsList');
  const resultContainer = document.getElementById('resultContainer');
  const temperatureRange = document.getElementById('temperatureRange');
  const currentUser = localStorage.getItem('currentUser');
  var newLyricsInput;

  // Cargar letras guardadas al iniciar
  loadSavedLyrics();

  lyricsForm.addEventListener('submit', function (event) {
    event.preventDefault();

    newLyricsInput = lyricsInput.value.trim();

    if (newLyricsInput !== '') {
      generateLyrics(newLyricsInput, temperatureRange.value);
      saveLyrics(newLyricsInput);

      lyricsInput.value = '';
    }
  });

  function loadSavedLyrics() {
    const storedLyrics = JSON.parse(localStorage.getItem(currentUser + 'Lyrics')) || [];
    storedLyrics.forEach(lyric => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.textContent = lyric;
      lyricsList.appendChild(listItem);
    });
  }

  const generateLyrics = async (inputData, temperature) => {
    await fetch('/create', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: [inputData, temperature] }),
    })
      .then(response => response.json())
      .then(data => displayGeneratedLyrics(data));
  };

  function displayGeneratedLyrics(lyrics) {
    console.log(lyrics);

    resultContainer.innerHTML = '';

    const paragraphs = lyrics.split('\n');

    paragraphs.forEach((paragraph) => {
      const resultParagraph = document.createElement('p');
      resultParagraph.textContent = paragraph;
      resultContainer.appendChild(resultParagraph);
    });

    localStorage.setItem(currentUser + newLyricsInput, lyrics);
  }

  function saveLyrics(lyric) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.textContent = lyric;
    lyricsList.appendChild(listItem);

    const storedLyrics = JSON.parse(localStorage.getItem(currentUser + 'Lyrics')) || [];
    storedLyrics.push(lyric);
    localStorage.setItem(currentUser + 'Lyrics', JSON.stringify(storedLyrics));
  }

  lyricsList.addEventListener('click', function (event) {
    const clickedItem = event.target;

    if (clickedItem.tagName === 'LI') {
      const selectedLyricTitle = clickedItem.textContent.trim();

      const selectedLyricContent = localStorage.getItem(currentUser + selectedLyricTitle);

      console.log(selectedLyricContent);

      resultContainer.innerHTML = '';
      const resultParagraph = document.createElement('p');
      resultParagraph.textContent = selectedLyricContent;
      resultContainer.appendChild(resultParagraph);
    }
  });
});

*/