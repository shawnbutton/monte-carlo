import {loadHistory, runForRangeOfWeeks, runForWeek, runSimulations} from '../src/monte_carlo'

it('load samples', () => {
    expect(loadHistory()).toEqual([3, 10, 7, 3, 5, 12, 4, 7, 3])
})

it('run simulations', () => {
    runSimulations([3, 10, 7, 3, 5, 12, 4, 7, 3])
})

it('run simulations for weeks', () => {
    const samples = [3, 7, 3, 10, 3, 9, 10, 3, 8, 4, 7, 3]

    runForRangeOfWeeks(samples, 25)

})


