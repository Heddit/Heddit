import cheerio from 'cheerio'
import request from 'request'

export function showBleacherReport(){

  console.log("scraping bleacher")
  var bleacherReportArticles = [];

  request("https://bleacherreport.com", (error, response, html) => {
      var $ = cheerio.load(html)
      
      $('.articleSummary').each(function () {
          var title = $(this).children('.commentary').children('h3').text();
          // console.log(title);
          var img = $(this).children('.articleMedia').children('a').children('img').attr('src');
          // console.log(img);
          var link = $(this).children('.articleMedia').children('a').attr('href');
          // console.log(link);

          var newArticle = {
              title: title,
              img: img,
              link: link,
              summary: "We don't have one yet"
          }

          bleacherReportArticles.push(newArticle);
      });
    });

    return bleacherReportArticles;
  };