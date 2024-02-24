var inquirer = require('../../node_modules/inquirer/lib/inquirer');
var config = require('../../config');
const action = async (project, args) => {
  // 命令行执行的逻辑代码
  await inquirer.prompt([
    {
      type: 'list',
      name: 'framwork',
      choices: config.framwork, 
      message: '请选择您所使用的框架'
    }
  ])
  // 下载代码模板
}
module.exports = action