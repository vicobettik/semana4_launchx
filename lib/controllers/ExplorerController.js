const Reader = require('../utils/Reader');
const ExplorerService = require('../services/ExplorerService');
const FizzbuzzService = require('../services/FizzbuzzService');

class ExplorerController{

    static getExplorersByMission(mission){
        const data = Reader.readJsonFile('explorers.json');
        return ExplorerService.filterByMission(data, mission);
    }

    static getExplorersAmonutByMission(mission){
        const data = Reader.readJsonFile('explorers.json');
        return ExplorerService.getAmountOfExplorersByMission(data, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const data = Reader.readJsonFile('explorers.json');
        return ExplorerService.getExplorersUsernamesByMission(data, mission);
    }

    static fizzBuzzValidation(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;