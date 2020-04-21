const g2iPhrasesArray = [
  { text: "Stephen sends someone to the corner" },
  { text: 'Chris says "fucking (any big word here)"' },
  { text: "LeBrun references Harry Potter" },
  { text: 'Rhona says "I haven\'t seen that movie" or "I fell asleep in it"' },
  { text: "Christie makes a pun" },
  { text: 'Devan asks, "Is there a Clubhouse ticket for that?"' },
  { text: "Gabe makes a Loom video" },
  { text: 'Chris says "I do what I want"' },
  { text: "Someone talks about rock climbing" },
  { text: 'Pariss or Stephen says "Word"' },
  { text: "Someone gets caught day drinking" },
  { text: "Gabe or Bryn react with a Heart emoji" },
  { text: "Rhona or Chris react with raised-hands emoji" },
  { text: "Dylan references Lord of the Rings" },
  { text: "Lee creeps on a thread and then throws in his opinion" },
  { text: "Lee sends a gif or meme" },
  { text: 'Rhona says "I need to go to CrossFit"' },
  { text: "Someone drops a Tweet in Slack" },
  {
    text:
      "Any time a developer tells you something inappropriate or weird about their life",
  },
  { text: "First call of the day gets canceled" },
  { text: "Christie doesn't get a reference #homeschooled" },
  { text: "Stephen posts a bird picture" },
  { text: "Chris Cap'n Crunch Meme" },
  { text: "Dylan shows up for a niche conversation" },
  { text: "LeBrun @channel's developer success team about anything" },
  { text: "LeBrun cancels your subscription to a software product" },
  { text: "Every time someone uses an Upvote emoji" },
  { text: "Bryn does a dance (rain dance, React dance, dev dance...)" },
  { text: 'Chris says "We can iterate on that"' },
  { text: 'Pablo says "cool cool cool"' },
  { text: "Stephen goes Fly Fishing" },
  { text: "Tejas rejects a PR with over comments" },
  { text: "Tejas builds something over night" },
];

const getG2iPhrases = () => {
  return Promise.resolve(g2iPhrasesArray);
};
