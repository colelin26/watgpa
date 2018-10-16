let GPAdata;


// $(document).ready(function() {
//     let options = {
//             beforeSubmit: showRequest, 
//             // pre-submit callback success: showResponse 
//             // post-submit callback 
//         }; 
//             // bind to the form's submit event 
//             $('#frmUploader').submit(function () { $(this).ajaxSubmit(options); 
//                 // always return false to prevent standard browser submit and page navigation return false; 
//             }); }); 
//             // // pre-submit callback function 
//              function showRequest(formData, jqForm, options) { 
//                  alert('Uploading is starting.'); return true; 
//                 }

//             // // post-submit callback 
//             function showResponse(responseText, statusText, xhr, $form) { alert('status: ' + statusText + '\n\nresponseText: \n' + responseText ); }

// async function uploadFile() {
//     return new Promise(function (resolve, reject) {
//             let fileSelector = $('<input type="file">');
//             fileSelector.change(function () {
//                 let files = fileSelector[0].files;
//                 if (files.length) {
//                     resolve(files[0]);
//                 } else {
//                     reject(new Error('Upload Error'));
//                 }
//             });
//             fileSelector.click();
//         })
//     }

// $('#button-upload').click(async function() {
//     try {
//         const file = await uploadFile();
//         GPAdata = JSONgene.pdf_to_JSON(file);
//         console.log(GPAdata);
//     } catch(err) {
//         throw new Error(err);
//     }
// });