import {runForRangeOfWeeks, runForWeek, runSimulations} from '../src/monte_carlo'

it('run simulations for weeks', () => {
    const samples = [3, 7, 3, 10, 3, 9, 10, 3, 8, 4, 7, 3]

    runForRangeOfWeeks(samples, 25)
})


