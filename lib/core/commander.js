const action = require('./action');
const commander = function(program) {
  program
  .command('create <project> [other...]')
  .alias('c')
  .description('创建项目')
  .action(action)
}
module.exports = commander