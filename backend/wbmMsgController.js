const wbm = require('wbm');

exports.sendWhatsappMsg = async (data) => {
    try{
        const contacts = [
            '918542002309'
        ]
        const contests = [];
        data.forEach((obj,i)=>{
            contests.push(obj.name);
        });
        const message = `Hi Uday, 🫡
        `;
        
        wbm.start().then(async () => {
            await wbm.send(contacts,message);
            await wbm.end();
        }).catch((err)=>{console.log(err)});
    }catch(err){
        console.log(err);
    }
}