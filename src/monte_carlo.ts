import * as fs from "node:fs";

const runForWeek = (samples, weeks) => {
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

    for (let i = 0; i < 100000; i++) {
        let index = Math.floor(Math.random() * numSamples);
        sims.push(samples[index])
    }

    const sortedSims = sims
        .sort((n1, n2) => n1 - n2)

    console.log(sortedSims)

};

const runForRangeOfWeeks = (samples, weeks) => {
    let allSims = '"95%","80%","50%","20%","5%"\n'

    for (let week = 1; week < weeks + 1; week++) {
        const thisWeek = runForWeek(samples, week)
        allSims += `${week},${thisWeek['95%']},${thisWeek['80%']},${thisWeek['50%']},${thisWeek['20%']},${thisWeek['5%']}
`
    }

    fs.writeFileSync('output.csv', allSims)
}


export {
    runSimulations, runForWeek, runForRangeOfWeeks
}

