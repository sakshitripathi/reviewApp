import React from "react";
import ReactDOM from "react-dom";
import Card from "@material-ui/core/Card";


class DisplayReview extends React.Component {
    createCard = (reviews) => {

        let cards = []
        for(let i=0;i<reviews.length;i++){
            cards.push( <Card
                style={{
                  backgroundColor:'	#A9A9A9',
                  width: "40%",
                  height:"30%",
                  borderRadius: "2px",

                  paddingLeft: "9px",
                  paddingTop: "10px",
                }}
                raised='true'
              >   <font style={{fontSize: "17px",color:'#101010', fontFamily:"serif"}}>
                    <b>{reviews[i].reviewTitle}</b>
                      
                  </font><br/>
                  <font style={{float:"left",fontSize: "13px", color : '#101010', fontFamily:"serif"}}>
                  <b>Posted by:</b>   {reviews[i].username}  </font>
                  <font style={{float:"right",fontSize: "13px", color : '#101010', fontFamily:"serif"}}>
                  <b>Posted on:</b>   {reviews[i].timeStamp}
</font>
                
                  <br style={{lineHeight:"30px"}}></br>
                 <font style={{fontSize: "15px",color:'black', fontFamily:"serif"}}>
                      {reviews[i].review}
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
              timeStamp: "07/02/2021 14:19:13",
              username: "Peter",
              reviewTitle: "Great performance",
              review: "Demo review",
            },
            {
              timeStamp: "07/02/2021 14:19:30",
              username: "Sanjol",
              reviewTitle: "Mind blowing performance",
              review:
                "I had i7 plus in the past.. just get the iphone 11, it's like day and night experience.. seriously, forget about iphone 7 plus.. it was great but back in 2016. currently i'm using 2xNew devices: iphone 11 pro max and iphone 11.they are almost the same experience.. even the LCD screen is amazing ..battery life almost the same, just the camera is better on pro max",
            },
            {
              timeStamp: "08/02/2021 11:19:30",
              username: "Derek",
              reviewTitle: "Just amazing",
              review:
                "the iPhone 11 is the phone most people who are upgrading to a new iPhone this year should get. It’s an excellent phone, with one of the best cameras I’ve ever seen on a smartphone and terrific battery life",
            }
          ],
        },
      ];
   return(
       <div style={{backgroundImage:'url(/bg_image.jpg)', height:"1000px"}}>
       <center><font style={{fontFamily:"serif",color:'#101010',fontSize:"20px"}}><u><h2><b>Subject Title: </b>{data[0].subjectTitle}</h2></u></font> </center>  
         <center>{this.createCard(data[0].reviews)}</center> 
      </div>
      
      

   );
}
}export default DisplayReview;