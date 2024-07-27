// import pkg from 'follow-redirects';
// const {https} = pkg;

// export const sendWhatsapp = (data) => {
    
// var options = {
//     'method': 'POST',
//     'hostname': 'gg3enw.api.infobip.com',
//     'path': '/whatsapp/1/message/template',
//     'headers': {
//         'Authorization': 'App 3632867d854f293d1e42df0b20525015-997ca08b-8f13-42bb-b080-cc9beeabb5d4',
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     'maxRedirects': 20
// };

// let messageText = data.map((obj)=>{
//     return obj.name;
// });

// var req = https.request(options,  (res)=> {
//     var chunks = [];

//     res.on("data", (chunk) => {
//         chunks.push(chunk);
//     });

//     res.on("end", (chunk) => {
//         var body = Buffer.concat(chunks);
//         console.log(body.toString());
//     });

//     res.on("error", (error)=> {
//         console.error(error);
//     });
// });

// var postData = JSON.stringify({
//     "messages": [
//         {
//             "from": "447860099299",
//             "to": "918542002309",
//             "messageId": "119cc18a-e1fb-4152-a059-9d88b6cbfdbf",
//             "content": {
//                 "templateName": "message_test",
//                 "templateData": {
//                     "body": {
//                         "placeholders":["XYZ"],
//                         "type":"TEXT",
//                         "text":`You have ${messageText.length} contests today on codeforces... \n{...messageText}`,
//                     }
//                 },
//                 "language": "en"
//             }
//         }
//     ]
// });

// req.write(postData);

// req.end();
// }