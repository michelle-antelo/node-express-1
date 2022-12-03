const axios = require('axios');

const fs = require('fs');
const process = require('process');
const cheerio = require('cheerio');

// Gathers Urls from the file passed in
gatherURLs = (file, callback) => {
    try {
        let contents = fs.readFileSync(file, 'utf-8').split('\n');
        callback(null, contents)
    }
    catch (err) { callback(err) }
}

getData = (url, callback) => {
    axios.get(url)
        .then(resp => callback(null, resp))
        .catch(err => callback(err )) 
}    

writeFile = (title, data) => {

    fs.writeFile(`./files/${title}.txt`, data, "utf8", (err)=> {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Wrote to ${title}`);
    });
}

const mainProcess = async (file) => {
    gatherURLs(file, (err, contents)=> {
        if (err) {
            console.error("URL ERROR:", err);
            process.exit(1);
        } else {
            contents.forEach(url => {
                getData(url, (err, resp)=>{
                    if (err) console.log(`Couldn't download ${url}`)
                    else {
                        let title = url.slice(url.lastIndexOf('//')+2, url.indexOf('.')+4)
                        writeFile(title, resp.data)
                    }
                })
            });
        }
    });
}


console.log("Starting_App")
mainProcess("urls.txt")