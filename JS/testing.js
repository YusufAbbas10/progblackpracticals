const nouns = ["weirdo", "penguin", "nugget", "computer", "milkshake"];
const adjectives = ["joyful", "cringe", "auraless", "stinky", "boring"];
const verbs = ["dances", "plays", "destroys", "sweeps", "consumes"];
const adverbs = ["lazily", "joyfully", "sadly", "annoyingly", "cringely"];

function generateSentence() {
  const random_noun = Math.floor(Math.random() * nouns.length);
  const random_adjective = Math.floor(Math.random() * adjectives.length);
  const random_verb = Math.floor(Math.random() * verbs.length);
  const random_adverb = Math.floor(Math.random() * adverbs.length);

  const sentence = `The ${nouns[random_noun]} ${adjectives[random_adjective]} ${verbs[random_verb]} ${adverbs[random_adverb]}`;

  document.getElementById("sentence").innerHTML = sentence;
}

document.getElementById("generate").addEventListener("click", generateSentence);
