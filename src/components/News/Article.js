import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 750,
      marginBottom: 10
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

export default function Article({article}){

      const classes = useStyles();
    
      return (
        <Card className={classes.root} variant="outlined">

            <CardHeader
                title={(<Typography variant="h6">{article.title}</Typography>)}
                subheader={"By: " + Article.author}
            />
            <CardMedia
                component="img"
                alt={article.title}
                maxHeight="300"
                image={article.urlToImage}
                title={article.title}
            />
            
            <CardContent>
                <Typography variant="body1" component="p">
                    {article.description}
                </Typography>
            </CardContent>

            <CardActions>
              {/* <Button size="small" color="primary">
                Save
              </Button> */}
              <Button size="small" color="primary" href={article.url}>
                Learn More
              </Button>
            </CardActions>

        </Card>
      );
}