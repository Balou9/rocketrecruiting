import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Home } from './components/Home.js'
import { Service } from './components/Service.js'
import { Developer } from './components/Developer.js'
import { Company } from './components/Company.js'
import { Hello } from './components/Hello.js'

import './App.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Nugget Digital" {...a11yProps(0)} />
          <Tab label="Service" {...a11yProps(1)} />
          <Tab label="Developer" {...a11yProps(2)} />
          <Tab label="Company" {...a11yProps(3)} />
          <Tab label="Contact" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Service/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Developer/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Company/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Hello/>
      </TabPanel>
    </div>
  );
}


export default App;
