const util = require("util");
const multer = require("multer");
const { v4:uuid } = require('uuid');
const maxSize = 2 * 1024 * 1024;
const storage = multer.diskStorage({
    destination: './videos',
    filename(req,file,cb){
        const newFileName = `${uuid()}-${file.originalname}`
        cb(null, newFileName);
    }
})

const uploadVideoFile = multer({
    storage:storage
}).single("videoFile");

let uploadFileMiddleware = util.promisify(uploadVideoFile);
module.exports = uploadFileMiddleware;
