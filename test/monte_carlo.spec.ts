import {loadHistory, runForWeeks, runSimulations} from '../src/monte_carlo'

it('load samples', () => {
    expect(loadHistory()).toEqual([3, 10, 7, 3, 5, 12, 4, 7, 3])
})

it('run simulations', () => {
    runSimulations([3, 10, 7, 3, 5, 12, 4, 7, 3])
})

it('run simulations for weeks', () => {
    const samples = [3, 10, 7, 3, 5, 12, 4, 7, 3]

    let allSims = '"5%","25%","50%","75%","95%"\n'

    for (let week = 1; week < 11; week++) {
        const thisWeek = runForWeeks(samples, week)
        allSims += `"${week}", "${thisWeek['5%']}","${thisWeek['25%']}","${thisWeek['50%']}","${thisWeek['75%']}","${thisWeek['95%']}"
`
    }

    console.log(allSims)

})


