class FizzbuzzService{

    static applyValidationInExplorer(explorer){
        const score = explorer.score;
        if (score % 3 == 0 && score % 5 == 0) {
            return({
                name: explorer.name,
                score: explorer.score,
                trick: 'FIZZBUZZ'
            })
        }
        else if(score % 3 == 0){
            return({
                name: explorer.name,
                score: explorer.score,
                trick: 'FIZZ'
            })
        }
        else if(score % 5 == 0){
            return({
                name: explorer.name,
                score: explorer.score,
                trick: 'BUZZ'
            })
        }
        else{
            return({
                name: explorer.name,
                score: explorer.score,
                trick: explorer.score
            })
        }
    }

    static applyValidationInNumber(number){
        if (number % 3 == 0 && number % 5 == 0) {
            return({
                score: number,
                trick: 'FIZZBUZZ'
            })
        }
        else if(number % 3 == 0){
            return({
                score: number,
                trick: 'FIZZ'
            })
        }
        else if(number % 5 == 0){
            return({
                score: number,
                trick: 'BUZZ'
            })
        }
        else{
            return({
                score: number,
                trick: number
            })
        }
    }

}

module.exports = FizzbuzzService;

