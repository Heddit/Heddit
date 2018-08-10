import React, { Component } from 'react'
import NYTLayout from './NYTLayout'
import cheerio from 'cheerio'
import request from 'request'

class NYT extends Component {
    state = { articles: [] }
  
    componentDidMount(){
      this.showNYT();
    }
  
    showNYT = () =>{
  
      console.log("scraping NYT")
      var NYTArticles = [];
  
      request("https://www.newyorktimes.com", (error, response, html) => {
          var $ = cheerio.load(html)
          
          $("h2.story-heading").each(function() {

            // Save the text of the element in a "title" variable
            var title = $(this).children().text().trim();
        
            // In the currently selected element, look at its child elements (i.e., its a-tags),
            // then save the values for any "href" attributes that the child elements may have
            var link = $(this).children().attr("href");
        
  
              var newArticle = {
                  title: title,
                  img: "placeholder",
                  link: link,
                  // summary: "We don't have one yet, la ta da tee-da, Loren Ipsum, Kitty Cat Poop Unicorn"
              }
  
              NYTArticles.push(newArticle);
          });
  
          this.setState({ articles: NYTArticles });
        });
      };
  
      render() {
          let {articles} = this.state 
          return (
              <div>
                { 
                  articles.map(
                    (article, index) => {
                      return <NYTLayout key={index} title={article.title} img={article.img} link={article.link} summary={article.summary}  />
                    }
                  ) 
                }
                  
              </div>
          );
      }
  }
  
  export default NYT;