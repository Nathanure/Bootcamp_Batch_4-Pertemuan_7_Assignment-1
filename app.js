// Imported modules of local module
const cli = require('./local_modules/readlineCLI.js')

// Imported modules of third-party modules
const valid = require('validator');

// Main async function to start CLI
const contactCli = async () => {
    // Questions asking on someone's biography
    // Question 1, asking name
    const name = await cli.answers("What's your name? ");
    // Name validation
    if (valid.isAlpha(name, 'en-US', { ignore: ' ' })) {
        // Question 2, asking email
        const email = await cli.answers("What's your email? ");
        // Email validation
        if (valid.isEmail(email)) {
            // Question 3, asking phone number
            const telp = await cli.answers("What's your phone number? ");
            // Phone number validation
            if (valid.isMobilePhone(telp, 'id-ID')) {
                // Display the output of all inputted answers
                console.log(`Your name is ${(name)}`);
                console.log(`Your email is ${(email)}`);
                console.log(`Your number is ${(telp)}`);
                // If all validation are passed then,
                // make a directory, if such file doesn't exist yet
                // Make a folder named "data" using cli local module
                cli.fsJSON('./data', './data/contacts.json');
                // Input data to JSON
                cli.saveJSON(name, email, telp);
                console.log('Terima kasih telah memasukkan data');
            // Phone number format is wrong
            } else {
                console.log('Your number format is wrong');
                console.log('Data fail to input');
                cli.close();
            }
        // Email format is wrong
        } else {
            console.log('Your email format is wrong');
            cli.close();
        }
    // Name format is wrong
    } else {
        console.log('Your name contains NOT characters');
        cli.close();
    }
    // Close the readLine module
    cli.close();
};

contactCli();