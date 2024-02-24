var download = require('download-git-repo');
download('drect:', './xxx', {clone: true}, (err) => {
  console.log(err);
})