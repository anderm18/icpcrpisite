import { Box, Paper, Typography } from '@mui/material';
import Typewritter from 'typewriter-effect';


function App() {
  return (
    <>
      <Box sx={{backgroundColor: '#ED1D24', height: '300px'}}>
        <Typography variant='h2' align='center' sx={{fontWeight: 'bold', color: '#fde7e8', paddingTop: '100px'}}>
          <Typewritter 
            onInit={(typewriter) => {
              typewriter.typeString('ICPC @ RPI')
              .start()
            }}
          />
        </Typography>
      </Box>
      <Box sx={{backgroundColor: '#760A0D', minHeight: '50px'}}>
        <Typography align='center' sx={{fontWeight: 'bold', color: 'white', paddingTop: '13px', paddingBottom: '13px'}}>
          Northeastern North America International Collegiate Programming Contest
        </Typography>
      </Box>
      <Box sx={{backgroundColor: '#fde7e8', height: '100vh'}}>
        <Box>
          <Typography align='center' variant='h5' sx={{fontWeight: 'bold', paddingTop: '20px'}}>
            General Information
          </Typography>
          <Typography align='center' sx={{margin: '20px'}}>
            Our site does NOT supply computers, participants will need to bring their own Laptops.<br/>
            Printing services will be provided according to the conditions stated in the official ICPC rules regarding the number of pages printed per team, etc. Teams will need to bring a thumb drive or other storage device that they will use to put all materials they want to be printed on. There should be no other content on the drive other than materials that need to be printed.
          </Typography>
        </Box>
        <Box>
          <Typography align='center' variant='h5' sx={{fontWeight: 'bold', paddingTop: '20px'}}>
            Directions
          </Typography>
          <Typography align='center' sx={{margin: '20px'}}>
            TBD
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
