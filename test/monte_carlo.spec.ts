import {loadHistory, runForWeeks, runSimulations} from '../src/monte_carlo'

describe('load samples', () => {
  it('should pass this test', () => {
    expect(loadHistory()).toEqual([3, 10, 7, 3, 5, 12, 4, 7, 3])
  })
})

describe('run simulations', () => {
  it('should pass this test', () => {
    runSimulations([3, 10, 7, 3, 5, 12, 4, 7, 3])
  })
})

describe('run simulations for weeks', () => {
  it('should pass this test', () => {
    runForWeeks([3, 10, 7, 3, 5, 12, 4, 7, 3], 10)
  })
})


