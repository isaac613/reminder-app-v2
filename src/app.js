const figlet = require("figlet");
const inquirer = require("inquirer");
const { addNote, listNotes, removeNotes } = require("../utils/notes");

const topLevelQuestion = [
  {
    type: `list`,
    name: `options`,
    message: `what would you like to do?`,
    choices: [`add note`, `list notes`, `delete note`, `exit`],
    default: [`add note`],
  },
];

const addQuestion = [
  {
    type: "input",
    name: `add`,
    message: `What would you like to add?`,
  },
];

const removeQuestion = [
  {
    type: `input`,
    name: `remove`,
    message: `What would you like to remove?`,
  },
];

const main = () => {
  console.log(
    figlet.textSync("Notes App!", {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );
};

const app = async () => {
  const answers = await inquirer.prompt(topLevelQuestion);
  if (answers.options == `add note`) {
    console.log("Adding a note...");
    const answer = await inquirer.prompt(addQuestion);
    addNote(answer.add);
    console.log(answer);
    app();
  } else if (answers.options == `list notes`) {
    console.log("Listing Notes");
    listNotes();
    app();
  } else if (answers.options == `delete note`) {
    console.log("deleting note");
    listNotes();
    const answer = await inquirer.prompt(removeQuestion);
    console.log(answer);
    removeNotes();

    app();
  } else if (answers.options == `exit`) {
    console.log("toodle doo");
  }
};

main();
app();
