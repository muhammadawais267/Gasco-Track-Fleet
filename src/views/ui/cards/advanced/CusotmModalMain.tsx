// import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { Card, CardContent, Grid, IconButton, Link } from '@mui/material'

export default function CusotmModalMain({ open, onClose }: { open: any; onClose: any }) {
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
                <Typography style={{ fontSize: '18px', color: 'rgba(255,255,255,1)' }}>H23</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                  }}
                >
                  <Link href='#'>
                    <span style={{ fontSize: '16px', color: '#fff', textDecoration: 'underline', marginRight: '5px' }}>
                      Delivery History
                    </span>
                  </Link>
                  <IconButton size='small' aria-label='settings' className='' sx={{ color: 'text.secondary' }}>
                    <svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M20 0V16.5475H16.25V20.3662H0V3.81866H3.75V0H20ZM18.75 15.2746V1.27289H5V3.81866H7.5V5.09155H1.25V19.0933H15V12.7289H16.25V15.2746H18.75ZM9.18945 11.9035L8.31055 11.0085L14.1113 5.09155H10V3.81866H16.25V10.1831H15V5.99649L9.18945 11.9035Z'
                        fill='white'
                      />
                    </svg>
                  </IconButton>
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
                  height: '100%',
                  borderBottomLeftRadius: '12px',
                  borderBottomRightRadius: '12px',
                  borderTopLeftRadius: '0px',
                  borderTopRightRadius: '0px'
                }}
              >
                <CardContent>
                  <Grid container spacing={8}>
                    <Grid item xs={12} sm={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Last Updated</Typography>
                        </Box>
                        <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>2024-01-01 - 09:01 PM</Typography>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Speed</Typography>
                        </Box>
                        <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>75 Kmph</Typography>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Departure Location</Typography>
                          <IconButton>
                            <svg
                              width='10'
                              height='13'
                              viewBox='0 0 10 13'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M9.01904 2.16937C8.12485 0.810469 6.57679 0 4.875 0C3.17322 0 1.62516 0.810469 0.733126 2.16937C-0.163233 3.52625 -0.241178 5.18781 0.518779 6.61578C0.525275 6.62594 0.53177 6.63609 0.5361 6.64625L4.44414 12.7725C4.53508 12.9127 4.69963 13 4.875 13C4.96135 13.0002 5.04627 12.9793 5.12143 12.9395C5.19658 12.8996 5.25939 12.842 5.30369 12.7725L9.21174 6.64625C9.21823 6.63609 9.22473 6.62594 9.22906 6.61578C9.99334 5.18781 9.91107 3.52422 9.01904 2.16937ZM2.68606 4.30625C2.68606 3.17484 3.66903 2.25266 4.875 2.25266C6.08097 2.25266 7.06394 3.17484 7.06394 4.30625C7.06394 5.43766 6.08097 6.35984 4.875 6.35984C3.66903 6.35984 2.68606 5.43969 2.68606 4.30625Z'
                                fill='#FF9900'
                              />
                            </svg>
                          </IconButton>
                        </Box>
                        <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>City</Typography>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Departure Time</Typography>
                          <IconButton>
                            <svg
                              width='10'
                              height='13'
                              viewBox='0 0 10 13'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M9.01904 2.16937C8.12485 0.810469 6.57679 0 4.875 0C3.17322 0 1.62516 0.810469 0.733126 2.16937C-0.163233 3.52625 -0.241178 5.18781 0.518779 6.61578C0.525275 6.62594 0.53177 6.63609 0.5361 6.64625L4.44414 12.7725C4.53508 12.9127 4.69963 13 4.875 13C4.96135 13.0002 5.04627 12.9793 5.12143 12.9395C5.19658 12.8996 5.25939 12.842 5.30369 12.7725L9.21174 6.64625C9.21823 6.63609 9.22473 6.62594 9.22906 6.61578C9.99334 5.18781 9.91107 3.52422 9.01904 2.16937ZM2.68606 4.30625C2.68606 3.17484 3.66903 2.25266 4.875 2.25266C6.08097 2.25266 7.06394 3.17484 7.06394 4.30625C7.06394 5.43766 6.08097 6.35984 4.875 6.35984C3.66903 6.35984 2.68606 5.43969 2.68606 4.30625Z'
                                fill='#FF9900'
                              />
                            </svg>
                          </IconButton>
                        </Box>
                        <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>08:30 PM</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
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
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Engine Status</Typography>
                        </Box>
                        <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>Running</Typography>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>ETA To Destination</Typography>
                        </Box>
                        <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>30 Minutes</Typography>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between'
                        }}
                      >
                        <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                          <Typography sx={{ fontWeight: 600, fontSize: '16px' }}>Travel Duration</Typography>
                        </Box>
                        <Typography sx={{ fontWeight: 400, fontSize: '16px' }}>12 Minutes</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Card>
        </Fade>
      </Modal>
    </div>
  )
}
