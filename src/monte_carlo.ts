const runForWeeks = (samples, weeks) => {
    const numSamples = samples.length

    const sims: number[] = []
    for (let i = 0; i < 10000; i++) {

        let stories = 0

        for (let week = 0; week < weeks; week++) {
            let index = Math.floor(Math.random() * numSamples);
            stories += samples[index]
        }

        sims.push(stories)
    }

    const sorted = sims
        .sort((n1, n2) => n1 - n2)
        .reverse()

    let results = {}

    for (let i = 0; i < 99; i++) {
        results[i + 1 + "%"] = sorted[i * 100]
    }

    return results

};

const runSimulations = samples => {
    const numSamples = samples.length

    const sims: number[] = []

    for (let i = 0; i < 100; i++) {
        let index = Math.floor(Math.random() * numSamples);
        sims.push(samples[index])
    }

    const sortedSims = sims
        .sort((n1, n2) => n1 - n2)

    console.log(sortedSims)

};

const loadHistory = () => {
    return [3, 10, 7, 3, 5, 12, 4, 7, 3]
}


export {
    loadHistory, runSimulations, runForWeeks
}
