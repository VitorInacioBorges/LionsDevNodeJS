const { rl } = require('./rl');

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}

module.exports = askQuestion;