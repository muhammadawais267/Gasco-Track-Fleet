// import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { Card, IconButton } from '@mui/material'
import GoogleMapReact from 'google-map-react'
import UseDialogLocation from 'src/pages/components/UseDialogLocation'

export default function TransitionsModal({ open, onClose }: { open: any; onClose: any }) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        closeAfterTransition

        // slots={{ backdrop: Backdrop }}
        // slotProps={{
        //     backdrop: {
        //         timeout: 500,
        //     },
        // }}
      >
        <Fade in={open}>
          <Card>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 800,
                boxShadow: 24,
                mb: 0
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#561616',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  pl: 2.5,
                  pr: 1,
                  height: 45
                }}
              >
                <Typography style={{ fontSize: '18px', color: 'rgba(255,255,255,1)' }}>Create New Location</Typography>
                <IconButton onClick={() => onClose()}>
                  <svg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1.2em' viewBox='0 0 24 24'>
                    <path
                      fill='#fff'
                      d='M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2m-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8z'
                    />
                  </svg>
                </IconButton>
              </Box>
              <div style={{ height: '70vh', width: '100%', marginBottom: 0, position: 'relative' }}>
                <UseDialogLocation />
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyAZiYuKJh08k7dr0aTf17vIgEwpOju_JvE' }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                ></GoogleMapReact>
              </div>
            </Box>
          </Card>
        </Fade>
      </Modal>
    </div>
  )
}
