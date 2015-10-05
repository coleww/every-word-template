every-word-template
----------------

a starter project for [everyword](https://twitter.com/everyword) inspired bots. all credit unto [Allison Parrish](http://www.decontextualize.com/).


```
  git clone https://github.com/coleww/every-word-template.git
  cd every-word-template
  npm install
  // put yr word list in words.js
  // put yr twitter credentials in config.js
  // replace the "SOMETHING" on line 10 of bot.js with yr everyword gimmick
  // the bot stores it's current index in the `current` file, and incremements it every time it is called! 
```

### NOTE: this will not work on heroku due to the ephemeral filesystem. if you need to re-deploy yr bot after beginning it's task, be sure to update the value inside `current` so that it stays on track.


http://www-01.sil.org/linguistics/wordlists/english/wordlist/wordsEn.txt this is a probably cool wordlist. probably peruse the wordlist and double check for any cusses or things that might carry weird or negative connotations within the context of yr everyword bot

[corpora](https://github.com/dariusk/corpora) might be useful for doing shorter run every word events around more limited and specific meme concepts. these works are unlikely to stand the test of time, but thats ok i guess.
