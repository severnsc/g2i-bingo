const form = document.getElementById("form");
const makeHandlePhrase = (addPhrase) => (e) => {
  e.preventDefault();
  const input = document.getElementById("formInput");
  const phrase = input.value;
  addPhrase(phrase)
    .then((phrases) => console.log(phrases))
    .catch((err) => console.log(err));
};

const handlePhrase = makeHandlePhrase(createPhrase);
form.onsubmit = handlePhrase;
