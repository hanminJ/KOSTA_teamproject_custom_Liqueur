import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import dummy from '../data.json';

export default function ActionAreaCard() {
  return (
    dummy.wisky.map(sul=>(
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={sul.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {sul.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {sul.label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   ))
    )
}