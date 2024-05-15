
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const useStyles = makeStyles({
  card: {
    width: 300,
    margin: 20,
   
    
  },
  media: {
    height: 200,
  },
});

const DataLink = ({ name, url, image }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href={url} target="_blank" rel="noopener noreferrer">
        <CardMedia
          className={classes.media}
          component="img"
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DataLink;
