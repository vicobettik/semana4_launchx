const FizzbuzzService = require('../../lib/services/FizzbuzzService');

describe('Test for FizzbuzzService', () => {
  
    test('Return an object with propertie trick = 1', () => {
        const explorer1 = {name: "Explorer1", score: 1}
        const result = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(result.trick).toBe(1)
    })
    
    test('Return an object with propertie trick = FIZZ', () => {
        const explorer3 = {name: "Explorer3", score: 3}
        const result = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(result.trick).toBe('FIZZ')
    })

    test('Return an object with propertie trick = BUZZ', () => {
        const explorer5 = {name: "Explorer5", score: 5}
        const result = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(result.trick).toBe('BUZZ')
    })

    test('Return an object with propertie trick = FIZZBUZZ', () => {
        const explorer15 = {name: "Explorer15", score: 15}
        const result = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(result.trick).toBe('FIZZBUZZ')
    })

})
