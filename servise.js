const xlsx = require('xlsx');
const schema = require('../model/schema');

const app = {
    //upload xl file & convert xl sheet data in json format then save data in mongodb
    convert(file) {

        const createFile = xlsx.readFile(file.path);

        const sheetName = createFile.SheetNames[0];

        const sheetData = xlsx.utils.sheet_to_json(createFile.Sheets[sheetName]);

        return schema.create(sheetData);

    }
}


module.exports = app;
