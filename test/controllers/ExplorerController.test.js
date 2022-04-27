const ExplorerController = require('../../lib/controllers/ExplorerController')

describe('Test for ExplorerController', () => {
  
    test('1) Return explorers with mission = node', () => {
        const result = ExplorerController.getExplorersByMission('node');
        expect(result.length).toBe(10);
    })

    test('2) Return amount of explorers with mission = node', () => {
        const result = ExplorerController.getExplorersAmonutByMission('node');
        expect(result.amount).toBe(10);
    })

    test('3) Return names of explorers with mission = node', () => {
        const result = ExplorerController.getExplorersUsernamesByMission('node');
        expect(result.length).toBe(10);
    })
    

})
