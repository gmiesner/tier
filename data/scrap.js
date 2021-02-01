const puppeteer = require('puppeteer')
const fs = require('fs')

async function scrape (url) {
const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)

    var movies = await page.evaluate(() => {

			let stri = document.querySelector('#courseinventorycontainer').innerText.split("\n");

			let n = [];
			for (i in stri){ if (stri[i].startsWith('ARCH')){ n.push(stri[i]) }}



			for (i in n){ n[i] = n[i].split("\n") }
			// for (i in n){ n[i].pop()}
			n = n.join("\n")
			n = n.split('\n')
			for (i in n){ n[i] = n[i].split(' ') }
			let  number = [];
			for (i in n){ number.push(n[i][0]); n[i].shift()}
			for (i in n){ n[i] = n[i].join(" ")}
      for (i in number){ number[i] = number[i].replace(":", "")}
        var movieArr = [];
        for (var i = 0; i < n.length; i++) {
          movieArr[i] = {
            number: number[i],
            title: n[i],
          };
        }
        return movieArr;
      })
      fs.writeFile("./cOMP.json", JSON.stringify(movies, null, 3),  (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("Great Success");
    });

browser.close()

}

scrape("http://catalog.missouri.edu/courseofferings/archst/")
