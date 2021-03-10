const puppeteer = require('puppeteer')
const fs = require('fs')

async function scrape (url) {
const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)

    

  course_names = course_names.split("\n");
  course_numbers = course_numbers.split("\n");
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

// scrape("https://semo.edu/bulletin/courses.html")
