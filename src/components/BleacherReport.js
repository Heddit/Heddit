import React, { Component } from 'react'
// import cheerio from 'cheerio'
// import {firebase} from '../base.js'
// import request from 'request'

class BleacherReport extends Component {

      // constructor(props){
  //   super()
  //   this.state = {

  //   }
  // }

  // scrapeBleacherReport = () => {
  //      console.log('Scraping Bleacher Report\n==================================================');

  //      var bleacherReportArticles = [];

  //      request("https://bleacherreport.com", (error, response, html) => {
  //          var $ = cheerio.load(html)

  //          $('.articleSummary').each(function () {
  //              var title = $(this).children('.commentary').children('h3').text();
  //              // console.log(title);
  //              var img = $(this).children('.articleMedia').children('a').children('img').attr('src');
  //              // console.log(img);
  //              var link = $(this).children('.articleMedia').children('a').attr('href');
  //              // console.log(link);
  //              var newArticle = {
  //                  title: title,
  //                  img: img,
  //                  link: link
  //              }
  //              bleacherReportArticles.push(newArticle);

  //          });

  //          console.log("bleacher articles:", bleacherReportArticles);
  //          firebase.database().ref('/scaped-sites').push({
  //            screpedData: bleacherReportArticles,
  //            uid: this.props.uid
  //          })
  //          // this.setState({ data: bleacherReportArticles }, () => console.log(this.state));
  //      });
  //  }

    render() {
        // const listItems = this.props.items.map((eachItem, key) =>
        // <p key={eachItem.key}>{eachItem.item} <button onClick={() => this.deleteItem(eachItem.key)}>x</button></p>
        // );
    
        // /// here
        // const listSites = this.props.sites.map((eachItem, key) =>
        //     <p key={eachItem.key}>{eachItem.screpedData[0]} <button onClick={() => this.deleteItem(eachItem.key)}>x</button></p>
        // );

        return (
            <div>
                <h1>Bleacher Report</h1>
                {/* <button type="button" onClick={this.scrapeBleacherReport}>Scrape Bleacher</button> */}
            </div>
        );
    }
}

export default BleacherReport;