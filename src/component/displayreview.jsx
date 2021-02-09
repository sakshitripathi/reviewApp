import React from 'react';
import Card from "@material-ui/core/Card";

class DisplayReview extends React.Component {
    createCard = (reviews) => {

        let cards = []
        for(let i=0;i<reviews.length;i++){
            cards.push( <Card
                style={{
                  backgroundColor:'lightgrey',
                  width: "40%",
                  height:"30%",
                  borderRadius: "2px",

                  paddingLeft: "9px",
                  paddingTop: "8px",
                }}
              >   <font style={{fontSize: "15px"}}>
                    <b>Title:</b>  {reviews[i].reviewTitle}
                      
                  </font><br/>
                  <font style={{fontSize: "15px"}}>
                  <b>Submitted by:</b>   {reviews[i].username}<br></br>
                  <b>Submitted on:</b>   {reviews[i].timeStamp}

                  </font>
                  <br style={{lineHeight:"50px"}}></br>
                  <font style={{fontSize: "15px"}}>
                      <b>Review : </b>{reviews[i].review}
                  </font>
                  
                
              </Card>)
            cards.push(<br/>)
        }
        return cards
    }

render(){
    var data = [
        {
          subjectTitle: "Iphone 11",
          snippet: {
            username: "sanjol",
            date: "7/2/2021",
            desc:
              "i had i7 plus in the past.. just get the iphone 11, it's like day and night experience.. seriously, ...",
          },
          reviews: [
            {
              timeStamp: "Sun , Feb 07 2021 14:19:13 GMT+0530 (India Standard Time)",
              username: "Peter",
              reviewTitle: "Great performance",
              review: "demo review",
            },
            {
              timeStamp: "Sun , Feb 07 2021 14:19:30 GMT+0530 (India Standard Time)",
              username: "Sanjol",
              reviewTitle: "mind blowing performance",
              review:
                "i had i7 plus in the past.. just get the iphone 11, it's like day and night experience.. seriously, forget about iphone 7 plus.. it was great but back in 2016. currently i'm using 2xNew devices: iphone 11 pro max and iphone 11.they are almost the same experience.. even the LCD screen is amazing ..battery life almost the same, just the camera is better on pro max",
            },
          ],
        },
      ];
   return(
       <div>
       <center><font><h2><b>Subject Title: </b>{data[0].subjectTitle}</h2></font> </center>  
         <center>{this.createCard(data[0].reviews)}</center> 
      </div>
      
      

   );
}
}export default DisplayReview;