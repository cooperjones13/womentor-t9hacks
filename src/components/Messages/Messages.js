import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';

var mockConversations = [
    {
        mentorName:"Cooper Jones",
        mentorUsername:"cooperjonesphotos",
        messages:[
            {
                timestamp: "23980412",
                message:"Hey I wanted to congratulate you on the internship! I knew you could do it",
                inbound:true,
            }
        ]
    }, 
    {
        mentorName:"Madi Heath",
        mentorUsername:"madheat",
        messages:[
            {
                timestamp: "23920030",
                message:"I'm so proud of you, you killed that interview! Lets meet up and grab drinks to celebrate",
                inbound:true,
            },
            {
                timestamp: "2000000",
                message:"I just got back from my interview! your advice really helped out!",
                inbound:false,
            },

        ]
    }
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      p={3}
    >
      {value === index && children}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: `calc(100vh - 64px)`,
    marginLeft: 0,
    marginTop: 64,

  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "300px",
  },
}));

const sentBackground = {
  padding: '5px 10px 5px 15px',
  marginTop: '5px',
  marginLeft: '150px',
  borderRadius: '15px',
  backgroundColor:'#6E5AA2',
  color: '#F9F7FF'
  

}

const recievedBackground = {
  padding: '5px 10px 5px 15px',
  borderRadius: '15px',
  marginTop: '5px',
  marginRight: '150px',
  backgroundColor: '#5f5c66',
  color: '#F9F7FF'
}


export default function Messages() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [pending, setPending] = React.useState('');

  const [conversations, setConversations] = React.useState(mockConversations)

  const handleChange = event => {
    setPending(event.target.value);
  };

  const handleSelection = (event, newValue) => {
    setValue(newValue);
  };

  const sendPending = () => {
    if(!pending){return}
    console.log(pending)
    console.log(conversations)
    let updatedConvo = JSON.parse(JSON.stringify(conversations));
    updatedConvo[value].messages.push(
      {
        timestamp: "23980412",
        message:pending,
        inbound:false,
      }
    )
    setConversations(updatedConvo);
    setPending("");
  }



  return (
    <div className={classes.root}>
        <div className={classes.toolbar}/>
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleSelection}
            aria-label="Vertical tabs example"
            className={classes.tabs}

        >
            {conversations.map((convo, index) => (
                <Tab label={convo.mentorName} {...a11yProps(index)} key={index} />
            ))}
        </Tabs>
            {conversations.map((convo, index) => (
                <TabPanel value={value} index={index} key={index} style={{backgroundColor:'#EDEBF2', display:"flex", color:'blue', flexDirection:"column", justifyContent:"space-between", height: "100%"}}>
                    <Box style={{height:'100%'}}>
                      {convo.messages.map((msg, i) => (
              
                          <Box key={msg.message} style={msg.inbound?recievedBackground:sentBackground}>
                              {msg.message}
                          </Box>
                      ))}
                    </Box>
                    <Box style={{width:"100%", display: "flex", flexDirection:"row", justifyContent:"space-between"}}>
                      <TextField
                        id="filled-multiline-flexible"
                        label="Message"
                        multiline
                        rowsMax="4"
                        value={pending}
                        onChange={handleChange}
                        variant="filled"
                        style={{
                          width:"75%"
                        }}
                      />
                      <Button variant="contained" color="primary" style={{
                          width:"20%" 
                        }} onClick={sendPending}>
                        Submit
                      </Button>
                    </Box>
              

                </TabPanel>
            ))}

    </div>
  );
}
