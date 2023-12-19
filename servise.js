const xlsx = require('xlsx');
const schema = require('../model/schema');

const app = {
    convert(file) {

        const createFile = xlsx.readFile(file.path);

        const sheetName = createFile.SheetNames[0];

        const sheetData = xlsx.utils.sheet_to_json(createFile.Sheets[sheetName]);

        return schema.create(sheetData);

    }
}


module.exports = app;
