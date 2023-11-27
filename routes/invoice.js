var express = require('express');
var router = express.Router();
var pdf = require("pdf-creator-node");
var fs = require("fs");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a invoice');
});

router.post("/", (req, res) => {
    //   download(
    //     `https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=${data}`,
    //     function () {
      //       console.log("done");
      //     }
    //   );
  

  
  
          const html = req.body;
  
          var options = {
              format: "A4",
              border: "5mm",
            };
    
            var users = [
              {
                imgurl: `http://empasoft.mn:5000/static/pdf/qr.png`,
              },
            ];
    
  
        
            var document = {
              html: html,
              data: {
                users: users,
              },
              path: "../public/pdf/invoice.pdf",
              type: "",
            };
          pdf
            .create(document, options)
            .then(() => {
              var dataPDF = fs.readFileSync("../public/pdf/invoice.pdf");
              res.contentType("application/pdf");
              res.send(dataPDF);
            })
            .catch((error) => {
              console.error(error);
            });
  
  });
  


module.exports = router;
