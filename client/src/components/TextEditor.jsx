import React, { Component } from 'react'
import {Col, Tabs, Tab} from 'react-bootstrap'
import Logo from '../images/eye.png'
import request from "request"
import cheerio from "cheerio"


import './TextEditor.css'
//import { request } from 'http';


class TextEditor extends Component {
    constructor(props) {
        super(props);

        let tabTitle1 = "Reddit",
            tabTitle2 = "Bleacher Report",
            tabTitle3 = "New York Times",
            tabTitle4 = "Settings"

 
        this.state = {
            tab1: tabTitle1,
            tab2: tabTitle2,
            tab3: tabTitle3,
            tab4: tabTitle4
         
        };
    }

 scrapeReddit =() =>{
     console.log("Reddit works")
    //  request("https://www.newyorktimes.com", function(error, response, html) {
    //      console.log(error)
    //  })

    request("https://cors-anywhere.herokuapp.com/https://old.reddit.com/r/webdev/", (error, response, html) => {
      //var $ = cheerio.load(html)
      
      console.log(html)
 
    })

 }

 scrapeNewYorkTimes =() =>{
    console.log("New York Times Works!")
   

   request("https://cors-anywhere.herokuapp.com/https://www.newyorktimes.com", (error, response, html) => {
     //var $ = cheerio.load(html)
     
     console.log(html)

   })

}


 scrapeBleacherReport=() =>{
    console.log('Scraping Bleacher Report\n==================================================');

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
          link: link
        }
        bleacherReportArticles.push(newArticle);

      });

      console.log("bleacher articles:",bleacherReportArticles);
      this.setState({ data: bleacherReportArticles }, () => console.log(this.state));
    });
  }
 



    render() {
        return (
            <div className="text-editor-body">
                <div>
                    <div className='text-editor-container'>
                        <div className='side-nav'>
                            <div>
                                <Col className='side-nav' sm={6} md={2}>
                                <h3>Home</h3>
                                <h3>Menu</h3>
                                </Col>
                            </div>
                            <div>
                                <Col sm={6} md={9}>
                                <Tabs defaultActiveKey={2} id="tabs">
                                    <Tab eventKey={1} title={this.state.tab1} className="tab-style">
                                        Tab 1 content
                                        <button onClick={this.scrapeReddit}>
                                            Scrape Reddit
                                        </button>
                                    </Tab>
                                    <Tab eventKey={2} title={this.state.tab2} className="tab-style">
                                        Tab 2 content
                                        <button onClick={this.scrapeBleacherReport}>
                                            Scrape Bleacher Report
                                        </button>
                                    </Tab>
                                    <Tab eventKey={3} title={this.state.tab3} className="tab-style">
                                        Tab 3 content
                                        <button onClick={this.scrapeNewYorkTimes}>
                                            Scrape New York Times
                                        </button>
                                        
                                    </Tab>
                                    <Tab eventKey={4} title={this.state.tab4} className="tab-style">
                                        Tab 4 content
                                        
                                    </Tab>
                                </Tabs>
                                </Col>

                            </div>
                        </div>
                    </div>
                    <Col sm={1} md={1} className="skin-selector">
                        
                        <img src={Logo} alt='logo' className='logo'/>
                    </Col>
                </div>
            </div>
            
        )
    }
}

export default TextEditor;