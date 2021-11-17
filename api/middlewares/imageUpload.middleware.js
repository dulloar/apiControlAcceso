const multer = require("multer");
const path = require("path");
const fs = require("fs");

/* UPLOAD V2 - pre execution of a function
saving with its original name */
/* router.post('/images/upload', multer({
    dest: path.join(__dirname, '../../public/uploads'),
}).single('image'), (req, res, next) => {
    console.log(req.file);
    const ext = path.extname(req.file.originalname).toLocaleLowerCase();
    fs.rename(req.file.path, `./src/public/uploads/${req.file.originalname}`, () => {
        res.send('received');
    });
});

module.exports = (req, res, next) => {
        console.log(req.file);
        const ext = path.extname(req.file.originalname).toLocaleLowerCase();
        fs.rename(req.file.path, `./src/public/uploads/${req.file.originalname}`, () => {
            res.send('received');
        });
    } */

  /*   module.exports = {
        multer({
            dest: path.join(__dirname, '../../public/uploads'),
        }).single('image')
    } */