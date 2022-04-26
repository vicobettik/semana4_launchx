const ExplorerService = require('../../lib/services/ExplorerService')

describe('Test for ExplorerService', () => {
  
    test('1) Return explorers with mission = node', () => {
        const explorer1 = {name: "Explorer1", mission: 'node'};
        const explorer2 = {name: "Explorer2", mission: 'js'};
        const result = ExplorerService.filterByMission([explorer1, explorer2], 'node');
        expect(result.length).toBe(1);
    })

    test('2) Return amount of explorers with mission = node', () => {
        const explorer1 = {name: "Explorer1", mission: 'javascript'};
        const explorer2 = {name: "Explorer2", mission: 'js'};
        const result = ExplorerService.getAmountOfExplorersByMission([explorer1, explorer2], 'node');
        expect(result).toBe(0);
    })

    test('3) Return names of explorers with mission = node', () => {
        const explorer1 = {name: "Explorer1", mission: 'javascript'};
        const explorer2 = {name: "Explorer2", mission: 'node'};
        const result = ExplorerService.getExplorersUsernamesByMission([explorer1, explorer2], 'node');
        expect(result).toContain('Explorer2');
    })
    

})
