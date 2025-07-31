const showMenu = require('./showMenu');
const rl = require('./rl');
const register = require('./register');
const remove = require('./remove');
const show = require('./show');
const edit = require('./edit');
const highest_lowest = require('./highest_lowest');
const askQuestion = require('./askQuestion');

async function menuInput(){
    let cond = true;
    while(cond){
        showMenu();
        let input = await askQuestion('Choose an option => ');
        input = parseInt(input);
        switch(input){
            case 1: 
                await register();
                break;
            case 2: 
                await remove(); 
                break;
            case 3: 
                await show(); 
                break;
            case 4: 
                await edit(); 
                break;
            case 5: 
                await highest_lowest(); 
                break;
            case 6:
                cond = !cond;
                rl.close();
                break;
            default:
                menuInput();
                console.log('\nInvalid Option.');
        }
    }
}

module.exports = menuInput;