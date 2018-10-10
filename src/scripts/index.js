let JSONgene = require('./JSONgenerator');

let GPAdata;

async function uploadFile() {
    return new Promise(function (resolve, reject) {
            let fileSelector = $('<input type="file">');
            fileSelector.change(function () {
                let files = fileSelector[0].files;
                if (files.length) {
                    resolve(files[0]);
                } else {
                    reject(new Error('Upload Error'));
                }
            });
            fileSelector.click();
        })
    }

$('#button-upload').click(async function() {
    try {
        const file = await uploadFile();
        GPAdata = JSONgene.pdf_to_JSON(file);
        console.log(GPAdata);
    } catch(err) {
        throw new Error(err);
    }
});

// let bindings = {
//     version: "1.0.0",
//     msgbox: {
//         title: '',
//         text: ''
//     }
// }

// function showMsgbox(title, text) {
// 	bindings.msgbox.title = title;
// 	bindings.msgbox.text = text;
// 	$('#message').openModal();
// }
