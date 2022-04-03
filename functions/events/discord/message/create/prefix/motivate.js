// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

const quotes = [
  "People will throw stones at you. Don't throw them back. Collect them all and build an empire،",
  "Nothing is impossible, the word itself says I'm possible",
  "I may not be there yet  but I am closer than I was yesterday",
  "I may not be the best... but I sure am trying my best",
  "Fight for your dreams and your dreams will fight for you",
  "Don't quit. Suffer now and live the rest of your life as a champion",
  "no matter your current circumstances if you can imagine something better for yourself you can create it",
  "Being upset will not solve any problem  but getting UP and SET your way to your goals will",
  "Being negative only causes depression. So hold your head up high  put a smile on your face & go live a positive life",
  "Things turn out best for the people who make the best of the way things turn out"
]

let n = Math.floor(Math.random() * quotes.length);

await lib.discord.channels['@0.3.1'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: quotes[n]
});