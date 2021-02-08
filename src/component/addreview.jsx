import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },

    },
    
    
  }));
  
  


class AddReview extends React.Component {
  state={
    mainTitle:'',
    subjectTitle:'',
    ReviewTitle:'',
    ReviewBody:''

  }
  handleChange = (e) => {

    console.log(e.target.id)
    console.log(e.target.value)
    this.setState({ [e.target.id]: e.target.value });
  }
  onButtonClick = () => {
    console.log("the state is")
     console.log(this.state)
  }

    render(){
        return(
        
          <div style={{width:'35%', margin:'0 auto'}}>
            
            <div style={{display:"table-row",width:"100%",height:"20%",fontSize:"25px",textAlign:"center"}}><font color="blue"><b> Create Review </b> </font> </div><br></br> <div> <TextField onChange={this.handleChange} id="Main Title" label="Main Title:" variant="outlined" /></div><br></br>
           
          <div> <TextField onChange={this.handleChange} id="Subject Title" label="Subject Title:" variant ="outlined" /></div><br></br>
          <div> <TextField onChange={this.handleChange} id="Review Title" label="Review Title:" variant ="outlined" /></div><br></br>
          <div> 
            <TextField style={{ width:"500px"}} 
              multiline
              rows={4}
              rowsMax={10}
              
              onChange={this.handleChange} id="Review Body" label="Review Body:" variant ="outlined"/></div><br></br>
           <Button  variant="contained" onClick={this.onButtonClick}>Add Review</Button>
           </div>

        );
    }
}
export default AddReview;