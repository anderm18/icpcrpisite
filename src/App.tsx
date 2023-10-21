import { Box, CardContent, Paper, Toolbar, Tooltip, Typography } from '@mui/material';
import Typewritter from 'typewriter-effect';
import L from 'leaflet';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const iconStyle = {
  width: '36px',
  height: 'auto',
} as const;

function LeafletMapComponent() {
  const position: [number, number] = [42.729907, -73.67663];

  const defaultIcon = L.icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

  return (
    <Box sx={{margin: 'auto', width: {xs: '100%', sm: '80%', md: '50%'}}}>
      <MapContainer center={position} zoom={15} style={{ width: '100%', height: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={defaultIcon}>
          <Popup>
            Rensselaer Union<br/><br/>
            1761 15th St, <br/>
            Troy, NY <br/>
            12180
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}

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
      <Box sx={{backgroundColor: '#fde7e8', height: 'auto', paddingBottom: '50px'}}>
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
            The event will kickoff at the RPI Student Union<div style={{marginBottom:'20px'}}/>
            <LeafletMapComponent/>
            <br/>You may also want to follow the <a href='https://info.rpi.edu/visit/directions'>driving directions for RPI.</a>
            Once you arrive, please pull into the Horseshoe-shaped dropoff area in the front of the Union. The kickoff event is held in the entry lobby of the Union.
          </Typography>
        </Box>
        <Box>
          <Typography align='center' variant='h5' sx={{fontWeight: 'bold', paddingTop: '20px'}}>
            Tentative Schedule
          </Typography>
          <Typography align='center' sx={{margin: '20px'}}>
            ~10:30 AM EST - Opening ceremony begins<br/>
            11:00 AM EST - Contest begins<br/>
            3:00 PM EST - Scoreboard freezes<br/>
            4:00 PM EST - Contest finishes<br/>
            Shortly after - Closing ceremony/results
          </Typography>
        </Box>
        <Box>
          <Typography align='center' variant='h5' sx={{fontWeight: 'bold', paddingTop: '20px'}}>
            Locations
          </Typography>
          <Typography align='center' sx={{margin: '20px'}}>
            Located in the Rensselaer Union Rooms 3418, 3202, 3502, 3602 and the Darrin Communication Center 232, 236, and 239, and the Voorhees Computing Center North 219 and South 208
          </Typography>
        </Box>
      </Box>
      <Box sx={{backgroundColor: '#760A0D', minHeight: '50px'}}>
        <Toolbar sx={{height: 'auto', color: 'white'}}>
          <CardContent sx={{margin: 'auto'}}>
              <Tooltip title={"we should probably put someones email here"} enterTouchDelay={0}>
                  <EmailIcon sx={iconStyle} style={{ marginLeft: '10px', marginRight: '10px' }}/>
              </Tooltip>
              <a href={"https://github.com/anderm18/icpcrpisite"} style={{color: 'white', margin: '10px'}}><GitHubIcon sx={iconStyle}/></a>
          </CardContent>
        </Toolbar>
      </Box>
    </>
  );
}

export default App;
