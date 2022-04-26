const Reader = require('../../lib/utils/Reader');

describe('Test for Reader', () => {
  
    test('1)Reading data from file returns data', () => {
        const data = Reader.readJsonFile('explorers.json');
        expect(data.length).not.toBe(0);
    })
    

})
