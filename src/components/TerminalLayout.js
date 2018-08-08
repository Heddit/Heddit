import React, { Component } from 'react'
import { Container, Form } from 'semantic-ui-react'
import Today from './DateTime'
import TerminalRow from './terminalPlaceholder'
import Navbar from './Navbar'
import './TextColors.css'
import cheerio from 'cheerio'
import request from 'request'


class TerminalLayout extends Component {

    state = { articles: [] }

  componentDidMount(){
    this.showBleacherReport();
  }

  showBleacherReport = () =>{

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
                summary: "We don't have one yet, la ta da tee-da, Loren Ipsum, Kitty Cat Poop Unicorn"
            }

            bleacherReportArticles.push(newArticle);
        });

        this.setState({ articles: bleacherReportArticles });
      });
    };



    render() {
        let {articles} = this.state 
        return (
            <div>
                <Container fluid>
                    <Form wrapped >
                        <Navbar />
                        <p className='y pt'><Today /> </p> 
                        { 
                articles.map(
                  (article) => {
                    return <TerminalRow title={article.title} img={article.img} link={article.link} summary={article.summary}  />
                  }
                ) 
              }
                    </Form>
                </Container> 
            </div>
        );
    }
}

export default TerminalLayout;