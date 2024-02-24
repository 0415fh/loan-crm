#!/usr/bin/env node
const { program } = require('commander');
// console.log('loan-cli');
// if(process.argv[2] == '--help'){
//   console.log('已获取到help参数');
// }
program.option('-f --framwork <framwork>', '设置框架');
program.parse(process.argv);