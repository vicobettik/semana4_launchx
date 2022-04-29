const ExplorerController = require('./controllers/ExplorerController');

const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get( '/v1/explorers/:mission', (req, res) => {

    console.log(`Api explorers GET request ${new Date()}`);
    console.log(`Getting explorers with mission ${req.params.mission}`);
    const result = ExplorerController.getExplorersByMission(req.params.mission);
    res.status(200).json(result);

})

app.get( '/v1/explorers/amount/:mission', (req, res) => {

    console.log(`Api explorers GET request ${new Date()}`);
    console.log(`Getting number of explorers with mission ${req.params.mission}`);
    const result = ExplorerController.getExplorersAmonutByMission(req.params.mission);
    res.status(200).json(result);

})

app.get( '/v1/explorers/usernames/:mission', (req, res) => {

    console.log(`Api explorers GET request ${new Date()}`);
    console.log(`Getting explorers name with mission ${req.params.mission}`);
    const result = ExplorerController.getExplorersUsernamesByMission(req.params.mission);
    res.status(200).json(result);

})

app.get( '/v1/fizzbuzz/:number', (req, res) => {

    console.log(`Api explorers GET request ${new Date()}`);
    console.log(`Getting fizzbuzz validation ${req.params.number}`);
    const result = ExplorerController.fizzBuzzValidation(req.params.number);
    res.status(200).json(result);

})


app.listen(port, () => {
    console.log(`App listening in port ${port}`)
});