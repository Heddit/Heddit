import React, { Component } from 'react'
import RedditLayout from './RedditLayout'
import cheerio from 'cheerio'
import request from 'request'

class Reddit extends Component {

    state = { articles: [] }

    componentDidMount(){
        this.showReddit();
      }


      showReddit = () =>{

        console.log("scraping reddit")
        var redditArticles = [];
    
        request("https://old.reddit.com/r/webdev/", (error, response, html) => {
            var $ = cheerio.load(html)
            
            $('p.title').each(function () {
                
                var title = $(this).text();
                console.log("title", title)

                // In the currently selected element, look at its child elements (i.e., its a-tags),
                // then save the values for any "href" attributes that the child elements may have
                var link = $(this).children().attr("href");

                var newArticle = {
                    title: title,
                    link: link,
                    // summary: "We don't have one yet, la ta da tee-da, Loren Ipsum, Kitty Cat Poop Unicorn"
                }

                console.log("new Article:", newArticle)
    
                redditArticles.push(newArticle);
            });
    
            this.setState({ articles: redditArticles });
          });
        };
    


    render() {
        let {articles} = this.state
        return (
            <div>
                 { 
                articles.map(
                  (article, index) => {
                    return <RedditLayout key={index} title={article.title} link={article.link} summary={article.summary}  />
                  }
                ) 
              }
                
            </div>
        );
    }
}

export default Reddit;