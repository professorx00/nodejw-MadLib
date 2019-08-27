const inquirer = require("inquirer");
function camp() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter a Relative",
            name: "relative"
        },
        {
            type: "input",
            message: "Enter a adjective",
            name: "adj1"
        },
        {
            type: "input",
            message: "Enter a adjective",
            name: "adj2"
        },
        {
            type: "input",
            message: "Enter a adjective",
            name: "adj3"
        },
        {
            type: "input",
            message: "Enter a person in the room",
            name: "person"
        },
        {
            type: "input",
            message: "Enter a adjective",
            name: "adj4"
        },
        {
            type: "input",
            message: "Enter a adjective",
            name: "adj5"
        },
        {
            type: "input",
            message: "Enter a verb ending in ed",
            name: "verbED1"
        },
        {
            type: "input",
            message: "Enter a body part",
            name: "bodyPart"
        },
        {
            type: "input",
            message: "Enter a verb ending in ing",
            name: "verbING1"
        },
        {
            type: "input",
            message: "Enter a plural noun",
            name: "nouns"
        },
        {
            type: "input",
            message: "Enter a noun",
            name: "noun"
        },
        {
            type: "input",
            message: "Enter a adverb",
            name: "adverb"
        },
        {
            type: "input",
            message: "Enter a verb",
            name: "verb1"
        },
        {
            type: "input",
            message: "Enter a verb",
            name: "verb2"
        },
        {
            type: "input",
            message: "Enter a Relative",
            name: "relative2"
        },
        {
            type: "input",
            message: "Enter a Person in room",
            name: "person2"
        }
    ]).then((answers) => {

        console.log(

            `Dear ${answers.relative},
I am having a(n) ${answers.adj1} time at camp. The counselour is ${answers.adj2} and the food is ${answers.adj3}. I met ${answers.person} and we became ${answers.adj4} friends. Unfortunately, ${answers.person} is ${answers.adj5} and I ${answers.verbED1} my ${answers.bodyPart} so we could not go ${answers.verbING1} like everybody else. I need more ${answers.nouns} and a ${answers.noun} sharpener, so please ${answers.adverb} ${answers.verb1} more when you ${answers.verb2} back.

Your ${answers.relative2},
${answers.person2}`
        )
        process.exit()
    })

    
}
function dragon() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please enter a color",
                name: "color"
            },
            {
                type: "input",
                message: "Please enter a superlative(ending is est)",
                name: "superlative"
            },
            {
                type: "input",
                message: "Please enter a adjective",
                name: "adj1"
            },
            {
                type: "input",
                message: "Please enter a body parts",
                name: "bodyParts"
            },
            {
                type: "input",
                message: "Please enter a body part",
                name: "bodyPart"
            },
            {
                type: "input",
                message: "Please enter a noun",
                name: "noun"
            },
            {
                type: "input",
                message: "Please enter a animal(plural)",
                name: "animals"
            },
            {
                type: "input",
                message: "Please enter a adjective",
                name: "adj2"
            },
            {
                type: "input",
                message: "Please enter a adjective",
                name: "adj3"
            },
            {
                type: "input",
                message: "Please enter a adjective",
                name: "adj4"
            },
        ]).then(answers => {
            console.log(`The ${answers.color} Dragon is the ${answers.superlative} Dragon of all. It has ${answers.adj1} ${answers.bodyParts}, and a ${answers.bodyPart} shaped like a ${answers.noun}. It loves to eat ${answers.animals}, although it will feast on nearly anything. It is ${answers.adj2} and ${answers.adj3}. You must be ${answers.adj4} around it, or you may end up as it is meal!`)
         
           process.exit();
        })
       
}

inquirer.prompt([
    {
        type: "list",
        message: "Do you want dragon story or camp story?",
        choices: ["Dragon Story","Camp Story"],
        name:"story"
    }
]).then((choice)=>{
    console.log(choice)
    if(choice.story === "Dragon Story"){
        dragon();
    }
    else{
        camp();
    }
})