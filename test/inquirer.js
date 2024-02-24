var inquirer = require('inquirer');
const { program } = require('commander')
inquirer.prompt([
  {
    type: 'input',
    name: 'username',
    message: '你的名字是？'
  }
]).then((answer) => {
  console.log(answer);
});