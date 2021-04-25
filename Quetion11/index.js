const csvtojson = require('csvtojson')

const fs = require('fs')

// const csvfilepath = "netflix_titles.csv"

// csvtojson()

const csvFilePath='netflix_titles.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);


    fs.writeFileSync("output.json",JSON.stringify(json), "utf-8", (err) => {
        if(err) console.log(err)
    })
  
})


