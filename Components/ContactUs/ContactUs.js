import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

export default function ContactUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function formSubmit(){
        console.log(name)
    }
  return (
    <div style={{paddingLeft:"10%",paddingBottom:"5%"}} id={"contact-us"}>
        <h3>Contact us</h3>
        <Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField id="standard-basic" label="Email" variant="standard" fullWidth={true} onChange={(e)=>{setEmail(e.target.value)}}/>
        </Grid>
        <Grid item xs={4}>
        
        </Grid>
        <Grid item xs={8}>
        <TextField id="standard-basic" label="Name" variant="standard" fullWidth={true} onChange={(e)=>{setName(e.target.value)}}/>
        </Grid>
        <Grid item xs={4}>
          
        </Grid>
        <Grid item xs={8}>
        <TextField
          id="standard-multiline-static"
          label="How can we help you?"
          multiline
          rows={4}
          variant="standard"
          fullWidth={true}
          onChange={(e)=>{setMessage(e.target.value)}}
        />
        </Grid>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={8}>
            <Button variant="contained" onClick={()=>{formSubmit()}}style={{backgroundColor:"#10181d",color:"white"}}>Submit</Button>
        </Grid>
        <Grid item xs={4}>

        </Grid>

      </Grid>
        
        
        
    </div>
  )
}
