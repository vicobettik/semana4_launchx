const Reader = require('./lib/utils/Reader');
const ExplorerService = require('./lib/services/ExplorerService');
const FizzbuzzService = require('./lib/services/FizzbuzzService');
const ExplorerController = require('./lib/controllers/ExplorerController')

const data = Reader.readJsonFile('explorers.json');
// console.log(data)

const explorersInNode = ExplorerService.filterByMission(data, 'node');
// console.log(explorersInNode);

const countExplorersInNode = ExplorerService.getAmountOfExplorersByMission(data, 'node');
// console.log(countExplorersInNode);

const getExplorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(data, 'node');
// console.log(getExplorersUsernamesByMission);

const explorer1 = {name: "Explorer1", score: 1}
const explorer3 = {name: "Explorer3", score: 3}
const explorer5 = {name: "Explorer5", score: 5}
const explorer15 = {name: "Explorer15", score: 15}
const result = FizzbuzzService.applyValidationInExplorer(explorer15)
// console.log(result);

const resultado = ExplorerController.getExplorersUsernamesByMission('node');
console.log(resultado)


