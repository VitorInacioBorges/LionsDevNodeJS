const { rl } = require('./constants');

function askQuestion(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    });
}

module.exports = askQuestion;