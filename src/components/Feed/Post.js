import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'

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

export default function Post({post}){

      const classes = useStyles();
    
      return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                avatar={
                    <Avatar aria-label="" className={classes.avatar} >
                      {post.fullName?post.fullName[0]:"N/A"}
                    </Avatar>
                  }
                title={(<Typography variant="h6">{post.fullName?post.fullName:"ERROR: UNKNOWN USER"}</Typography>)}
                subheader={"@" + post.username}
            />
            
            <CardContent>
                <Typography variant="body1" component="p">
                    {post.content}
                </Typography>
            </CardContent>

        </Card>
      );
}