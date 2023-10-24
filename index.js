const express = require('express');
const app = express();
const serverPort = 3010;

app.get('/playerclass', (req, res) => {
  const playerClass = [
    { id: 1, class: 'Warrior' },
    { id: 2, class: 'Drood' },
    { id: 3, class: 'Monk' },
    { id: 4, class: 'Demon Hunter' },
    { id: 5, class: 'Paladin' },
    { id: 6, class: 'Shaman' },
    { id: 7, class: 'Rogue' },
    { id: 8, class: 'Death Knight' },
    { id: 9, class: 'Hunter' },
    { id: 10, class: 'Evoker' },
    { id: 11, class: 'Mage' },
    { id: 12, class: 'Priest' },
    { id: 13, class: 'Warlock' },
  ];

  res.json(playerClass);
  console.log(req.query);
});

app.get ('/', (req, res) =>{
console.log("I got a", req);
res.send('Hello Client !!!');
});

app.get('/playerclass/:id', ({req}) => {
    const classId = parseInt(req.params.id);
});

app.listen(serverPort, () => {
  console.log(`Server Working, port: ${serverPort}`);
});
