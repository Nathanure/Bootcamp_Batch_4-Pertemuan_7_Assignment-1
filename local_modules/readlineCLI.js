// Imported modules of core module
const readline = require('readline');
const fs = require('fs');

// Creating an interface of input and output with readline module and process function
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const close = () => {
    rl.close();
}

// Function for answer with a parameter(questions) that will be asked
const answers = (questions) => {
    // Promise to callback the requirement that are awaiting in main async function
    return new Promise((resolve, reject) => {
        // Questions and answer for user to input their answers on the respective questions
        rl.question(questions, (answer) => {
            // The resolve (callback in this case) pointed back to the main async function and filled to each variables that are defined in that main async function
            resolve(answer);
        }, () => {
            reject();
        });
    });
}

// Make a directory and JSON file if it hasn't been made yet
const fsJSON = (dirPath, dataPath) => {
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
    if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// Save data into a JSON file
const saveJSON = (name, email, telp) => {
    // Make an object for the answers
    const contactJSON = { name, email, telp };
    // Read the JSON file in dir Path
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    // Parse readline to JSON
    const parseLine = JSON.parse(file);
    // Push the array to JSON
    parseLine.push(contactJSON);
    // Write the file in JSON
    fs.writeFileSync('data/contacts.json', JSON.stringify(parseLine));
}

module.exports = { answers, close, fsJSON, saveJSON };