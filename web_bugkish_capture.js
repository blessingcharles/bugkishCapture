const puppeteer = require('puppeteer');
const { exit } = require('process');
const file_name = process.argv[2];
const fs = require('fs');

if (!file_name) {
  throw `.............please provide an valid url file ..................
  eg : node web_bugkish_capture.js <filename>
  
  `;
}
var dir = 'Screenshots';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

async function doScreenCapture(url, site_name,browser) {
    
        //let browser = await puppeteer.launch({ headless: false });

        let page = await browser.newPage();
        await page.goto(url);
        await page.waitFor(1000);
        
        await page.screenshot({ path:`./Screenshots/${site_name}.png`, fullPage: true });
        await page.close();
     
    
 
  }
async function run() {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    console.log('running............./');
    
    var text = fs.readFileSync(file_name).toString().split("\n");

    for (let i = 0; i < text.length; i++) {
            try{
                await doScreenCapture(text[i], "image"+i,browser)
                console.log(text[i]+"---> stored in Screenshots/image"+i+" [succesful]");

            }
            catch(err){
                console.log(text[i]+" Failed to capture :( ");
             } 
             if(i==text.length-1){
                await browser.close();
                process.exit(0);
                
            }
             
          
        }
 }

run();
