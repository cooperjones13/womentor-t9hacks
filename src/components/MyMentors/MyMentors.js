import React from 'react'
import MentorCard from './MentorCard'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

export default function MyMentors(){

    const classes = makeStyles(theme => ({
        content: {
          flexGrow:1,
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          paddingTop: theme.spacing(1),
          fontFamily: 'Nunito Sans',
          display:'flex',
          flexWrap:'wrap',
          flexDirection:'row',
          maxWidth: 1300,
          justifyContent:'center',
        },
        container:{
            marginTop: 72,
        },
        toolbar: theme.mixins.toolbar,
        pageHeading: {
            display:'inline',
            paddingLeft: 24,
            paddingTop: 64
        }
        }));

    const mockMentor = [
        {
            "fullName":"Cooper Jones",
            "username":"cooperjonesphotos",
            "title":"Front-End Developer"
        },
        {
            "fullName":"Madi Heath",
            "username":"madheat",
            "title":"UX Designer"
        },
        {
            "fullName":"Cassandra Goodby",
            "username":"cassandragoodby",
            "title":"UX Engineer"
        }
    ]

    return(
        <div className={classes().container}>
            <Typography variant="h4" className={classes().pageHeading}>
                My Mentors
            </Typography>
            <div className={classes().content}>
                {mockMentor.map(userData =>(
                    <MentorCard data={userData} key={userData.username}/>
                ))}
            </div>
        </div>
    )
}