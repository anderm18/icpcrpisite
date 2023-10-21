import { Box, Paper, Typography } from '@mui/material';


function App() {
  return (
    <>
      <Paper sx={{backgroundColor: '#760A0D', height: '500px'}}>
        <Typography align='center' variant='h2' sx={{paddingTop: '100px', color: 'white'}}>
          ICPC @ RPI
        </Typography>
        <Typography align='center' sx={{margin: '20px', color: 'white'}}>
          Northeastern North America International Collegiate Programming Contest
        </Typography>
      </Paper>
      <Box sx={{backgroundColor: '#fde7e8', height: '100vh'}}>
        <Typography align='center' variant='h5' sx={{paddingTop: '20px'}}>
          General Information
        </Typography>
        <Typography align='center' sx={{margin: '20px'}}>
          Our site does NOT supply computers, participants will need to bring their own Laptops.<br/>
          Printing services will be provided according to the conditions stated in the official ICPC rules regarding the number of pages printed per team, etc. Teams will need to bring a thumb drive or other storage device that they will use to put all materials they want to be printed on. There should be no other content on the drive other than materials that need to be printed.
        </Typography>
      </Box>
    </>
  );
}

export default App;
