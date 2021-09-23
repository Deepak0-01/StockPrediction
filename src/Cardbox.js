import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';


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
        <Box sx={{ width: 325,maxHeight:300,margin:"4px",marginBottom:"20px"
        }}>
      <Card style={{backgroundImage:"linear-gradient(to bottom right, #91CEFE , #AB60D7)"}} variant="outlined">

      <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
       {name}
        </Typography>
        <Typography variant="h5" component="div"  color="text.secondary">
         {symbol}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       {market}
        </Typography>
        <Typography variant="body2">
       {tzone}
          <br />
        
        </Typography>
        <Typography variant="body2">
        {marketState}
        <br />
      
      </Typography>
      </CardContent>
      <CardActions>
        <Link to="/stock-predict"><Button style={{color:"white"}} size="medium">Visualize and Predict</Button></Link>
      </CardActions>
    </React.Fragment>
      
      
      </Card>
    </Box>
    )
}

export default Cardbox





