import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  tabs:{
    justifyContent:'center',
  },
  label:{
    color:"red",
    minWidth:'auto'
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


export default function FullWidthTabs() {
  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
        <Box align="center">
            <h2>how does it work</h2>
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          className="aaaa"
        >
          <Tab className={classes.label} label="sell" {...a11yProps(0)} />
          <Tab className={classes.label} label="buy" {...a11yProps(1)} />
          <Tab className={classes.label} label="rent" {...a11yProps(2)} />
        </Tabs>
     
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box display="flex" >
              <Box>
                  <span><img src="https://www.jnext.co.in/wp-content/uploads/2019/06/logo-org-transparent.png" style={{maxWidth:"80px"}} alt="service"/></span>
                  <Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Box>
              </Box>
              <Box>
                  <span><img src="https://www.jnext.co.in/wp-content/uploads/2019/06/logo-org-transparent.png" style={{maxWidth:"80px"}} alt="service"/></span>
                  <Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Box>
              </Box>
              <Box>
                  <span><img src="https://www.jnext.co.in/wp-content/uploads/2019/06/logo-org-transparent.png" style={{maxWidth:"80px"}} alt="service"/></span>
                  <Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</Box>
              </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
    </div>
  );
}