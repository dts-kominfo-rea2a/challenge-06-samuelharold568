// TODO: import module bila dibutuhkan di sini
const fs = require('fs')
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let array1;
  let array2;
  let array3;
  fs.readFile(file1, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    array1= data;
    console.log(fnCallback)
  });

  fs.readFile(file2, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    array2 = data;
    console.log(fnCallback)
  });

  fs.readFile(file3, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    array3 = data;
    console.log(fnCallback)
  });
  
  fnCallback.join(array1, array2, array3);
};


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
