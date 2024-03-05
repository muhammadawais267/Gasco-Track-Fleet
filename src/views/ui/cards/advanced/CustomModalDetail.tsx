// import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { Card, Grid, IconButton, Link, CardContent, Divider } from '@mui/material'

export default function CustomModalDetail({ open, onClose }: { open: any; onClose: any }) {
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
                width: 600,
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
                <Typography style={{ fontSize: '18px', color: '#fff' }}>Detailed Vehicle Info</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                  }}
                >
                  <IconButton onClick={() => onClose()}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='1.2em' height='1.2em' viewBox='0 0 24 24'>
                      <path
                        fill='#fff'
                        d='M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2m-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8z'
                      />
                    </svg>
                  </IconButton>
                </Box>
              </Box>
              <Card
                sx={{
                  height: '500px',
                  borderBottomLeftRadius: '12px',
                  borderBottomRightRadius: '12px',
                  borderTopLeftRadius: '0px',
                  borderTopRightRadius: '0px',
                  overflowY: 'scroll'
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      borderRadius: '8px',
                      pl: 2.5,
                      pr: 1,
                      height: 45
                    }}
                  >
                    <Typography style={{ fontSize: '18px', color: '#000' }}>Vehicle Info</Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                      }}
                    >
                      <Link href='#'>
                        <span
                          style={{
                            fontSize: '16px',
                            color: '#4DA3CE',
                            textDecoration: 'underline',
                            marginRight: '5px'
                          }}
                        >
                          Track Live Location
                        </span>
                      </Link>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      mt: 2,
                      px: 4
                    }}
                  >
                    <Grid container spacing={8}>
                      <Grid item xs={12} sm={12} md={6}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Brand Name</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>Toyota</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Modal</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>Dyna</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Year Of Manufacture</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>2018</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Vehicle Code</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>H10</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <img src='/images/cards/truck.png' alt='truck' height={120} width={120} />
                        </Box>
                      </Grid>
                      <Divider />
                      <Grid item xs={12} sm={12} md={12} sx={{ mt: 0, pt: 0 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Engine Number</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>JTFA032323</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Chassis Number</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>LY50-002323</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Registration Number</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>XCHI090</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Engine HP</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>109</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Engine Type</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>3.7 - Litre 148</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Tyre Number</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>JTFA09999</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Load Battery Capacity</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>6000 Kg</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Mileage</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>50670 km</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Engine Condition</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>Oil Change Needed</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Tyre Condition</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>Good</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Break Condition</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>Medium</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Total Trips</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>250</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Running Hours</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>878 Hours</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            borderRadius: '8px',
                            pl: 2.5,
                            pr: 1,
                            height: 45,
                            my: 5
                          }}
                        >
                          <Typography style={{ fontSize: '18px', color: '#000' }}>Current Status</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Status</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>On Route</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Starting Location</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>City Name</Typography>
                        </Box>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 1.5
                          }}
                        >
                          <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Destination</Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>City Name</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Card>
        </Fade>
      </Modal>
    </div>
  )
}
