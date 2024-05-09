let baseURL = "http://numbersapi.com"

// 1
async function getFavNumFact(num){
    let res = await axios.get(`${baseURL}/${num}/trivia?json`)
    console.log(res)
    return res;
}

// 2
let promises = []
async function getMulNumFacts(num){
    for (let i = 0; i < num; i++){
        promises.push(axios.get((`${baseURL}/random/trivia?json`)))
    }
    let masterPromise = await Promise.all(promises);
    for(let i = 0; i < masterPromise.length; i++){
        console.log(masterPromise[i].data.text)
    }
    return masterPromise;
}

