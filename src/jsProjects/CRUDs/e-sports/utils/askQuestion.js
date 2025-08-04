const rl = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}

module.exports = { askQuestion, rl };