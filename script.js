<h1 id="heading"></h1>

<script>
  const words = ["Hello,", "I'm", "Diksha", "Joshi"];
  let i = 0;

  function showWord() {
    if (i < words.length) {
      document.getElementById("heading").innerHTML +=
        `<span style="font-size:3.5rem; font-weight:900; color:black;">${words[i]} </span>`;
      i++;
      setTimeout(showWord, 700); // delay between words
    }
  }

  showWord();
</script>
