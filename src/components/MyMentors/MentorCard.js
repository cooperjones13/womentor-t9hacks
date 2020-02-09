import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 250,
      marginBottom: 10,
      marginRight: 10,
    },
    avatar:{
        color: '#fff',
        backgroundColor: theme.palette.primary.dark,
      },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    
  }));

export default function MentorCard({data}){

      const classes = useStyles();
    
      return (
        <Card className={classes.root} variant="outlined">
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height='auto'
            image="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
            title="Contemplative Reptile"
            />
            <CardContent>
                <Typography variant="h5">
                    {data.fullName}
                </Typography>
                <Typography variant="subtitle1">
                    {data.title}
                </Typography>
                <Divider />
                <Typography variant="subtitle2">
                    {"@" + data.username}
                </Typography>
                <Typography variant="body1" component="p">
                    {data.bio}
                </Typography>
            </CardContent>  
        
        </Card>
      );
}