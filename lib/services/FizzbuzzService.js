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

}

module.exports = FizzbuzzService;

