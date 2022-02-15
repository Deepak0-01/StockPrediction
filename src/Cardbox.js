import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { pushTicker } from './features/tickerSlice';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

 
function Cardbox({name,symbol,market,tzone,marketState}) {

  

  console.log(name)
    return (
        <Box sx={{ width: 390,maxHeight:300,margin:"6px",marginBottom:"20px"
        }}>
      <Card style={{backgroundImage:"linear-gradient(315deg, #0cbaba 0%, #380036 74%)"}} variant="outlined">

      <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="white" gutterBottom>
       {name}
        </Typography>
        <Typography variant="h5" component="div" color="white">
         {symbol}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="white">
       {market}
        </Typography>
        <Typography variant="body2"  color="gray">
       {tzone}
          <br />
        
        </Typography>
        <Typography variant="body2"  color="gray">
        {marketState}
        <br />
      
      </Typography>
      </CardContent>
      <CardActions>
        <Link to="/"><Button className="visualize__button" style={{color:"white",backgroundColor:"#53552c",borderRadius:"4px", marginLeft:"2px"}} size="medium">Visualize and Predict</Button></Link>
      </CardActions>
    </React.Fragment>
      
      
      </Card>
    </Box>
    )
}

export default Cardbox







