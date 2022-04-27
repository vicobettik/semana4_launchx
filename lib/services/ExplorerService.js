class ExplorerService{

    static filterByMission(explorers, mission){
       return explorers.filter( (explorer) => explorer.mission == mission );
    }

    static getAmountOfExplorersByMission(explorers, mission){

        const amountExplorers = explorers.filter( (explorer) => explorer.mission == mission ).length;
        return ({
            mission: mission,
            amount: amountExplorers
        })
    }

    static getExplorersUsernamesByMission(explorers, mission){
        return explorers.filter( (explorer) => explorer.mission == mission )
            .map( (explorer) => explorer.name)
    }
}

module.exports = ExplorerService;