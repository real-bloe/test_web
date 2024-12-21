document.getElementById('jokeButton').addEventListener('click', function() {
  const jokes = [
    "Why don’t skeletons fight each other? They don’t have the guts!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats!",
    "I’m reading a book on anti-gravity. It’s impossible to put down!",
    "Why do cows wear bells? Because their horns don’t work!"
  ];

  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  
  document.getElementById('joke').innerText = randomJoke;
});
