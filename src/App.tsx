import { Box, Paper, Typography } from '@mui/material';
import Typewritter from 'typewriter-effect';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


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
      <Box sx={{backgroundColor: '#fde7e8', height: 'auto', marginBottom: '100px'}}>
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
            The event will be hosted in the RPI Student Union<div style={{marginBottom:'20px'}}/>
            <LeafletMapComponent/>
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
