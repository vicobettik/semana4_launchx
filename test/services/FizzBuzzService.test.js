const FizzbuzzService = require('../../lib/services/FizzbuzzService');

describe('Test on FizzBuzzService', () => {
  
    test('Test on FizzBuzzValidation', () => {
      const number1 = 1;
      const number3 = 3;
      const number5 = 5;
      const number15 = 15;

      const res = FizzbuzzService.applyValidationInNumber(1);
      expect(res.trick).toBe(1);
    })
    
    
})
