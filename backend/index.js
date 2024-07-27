const express = require('express');
const cors = require('cors');
const {sendWhatsappMsg} = require('./wbmMsgController');

const app = express();

app.use(cors());

let fetchRes = async () => {
  try {
    const res = await fetch(
      "https://codeforces.com/api/contest.list?gym=false"
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};

(async () => {
  try {
    const res = await fetchRes();
    let data = null;

    if(res){
        data = await res.json();
    }

    console.log(res);
    console.log(data);
    if ((data && data.status === "OK")) {
      const allContests = data.result;
      const reqContests = allContests.filter((obj) => {
        return obj.phase == "BEFORE";
      });
      console.log(reqContests);
      if (reqContests.length > 0) {
        //Send whatsapp msg.
        sendWhatsappMsg(reqContests);
      }
    }
  } catch (err) {
    console.log(err);
  }
})();

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
