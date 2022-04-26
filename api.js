const Reader = require('./lib/utils/Reader');
const ExplorerService = require('./lib/services/ExplorerService');

const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get( '/v1/explorers/:mission', (req, res) => {
    console.log(`Api explorers GET request ${new Date()}`);
    console.log(`Getting explorers with mission ${req.params.mission}`);
    const data = Reader.readJsonFile('explorers.json');
    const result = ExplorerService.filterByMission(data, req.params.mission);
    res.status(200).json(result);

})

app.get( '/v1/explorers/amount/:mission', (req, res) => {
    console.log(`Api explorers GET request ${new Date()}`);
    console.log(`Getting number of explorers with mission ${req.params.mission}`);
    const data = Reader.readJsonFile('explorers.json');
    const result = ExplorerService.getAmountOfExplorersByMission(data, req.params.mission);
    res.status(200).json(result);

})

app.get( '/v1/explorers/usernames/:mission', (req, res) => {
    console.log(`Api explorers GET request ${new Date()}`);
    console.log(`Getting explorers name with mission ${req.params.mission}`);
    const data = Reader.readJsonFile('explorers.json');
    const result = ExplorerService.getExplorersUsernamesByMission(data, req.params.mission);
    res.status(200).json(result);

})


app.listen(port, () => {
    console.log(`App listening in port ${port}`)
});