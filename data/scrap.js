const puppeteer = require('puppeteer')
const fs = require('fs')

async function scrape (url) {
const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)

    

<<<<<<< HEAD
  course_names = course_names.split("\n");
  course_numbers = course_numbers.split("\n");
=======
			let stri = document.querySelector('#courseinventorycontainer').innerText.split("\n");

			let n = [];
			for (i in stri){ if (stri[i].startsWith('I')){ n.push(stri[i]) }}



			for (i in n){ n[i] = n[i].split("\n") }
			// for (i in n){ n[i].pop()}
			n = n.join("\n")
			n = n.split('\n')
			for (i in n){ n[i] = n[i].split(' ') }
			let  number = [];
			for (i in n){ number.push(n[i][0]); n[i].shift()}
			for (i in n){ n[i] = n[i].join(" ")}
      for (i in number){ number[i] = number[i].replace(":", "")}
>>>>>>> eea00778cbff9f0310621438e8a2a376c72f48d9
        var movieArr = [];
        for (var i = 0; i < course_names.length; i++) {
          movieArr[i] = {
            number: course_numbers[i],
            title: course_names[i],
          };
        }
        return movieArr;
      })
      fs.writeFile("semo.json", JSON.stringify(movies, null, 3),  (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("Great Success");
    });

browser.close()

}

<<<<<<< HEAD
// scrape("https://semo.edu/bulletin/courses.html")
=======
scrape("http://catalog.missouri.edu/courseofferings/ital/")
>>>>>>> eea00778cbff9f0310621438e8a2a376c72f48d9
