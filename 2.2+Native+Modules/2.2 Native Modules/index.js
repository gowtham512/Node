const fs = require('fs');

fs.writeFile("message.txt","Hello from gowtham",(err) => {
    const err = createError(404, 'This is a custom 404 error');
    if (err) throw err;
    console.log('The file has been saved!');
  }); 