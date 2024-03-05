// ** React Imports

// ** MUI Imports
import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Icons Imports

// ** Hooks Imports

const CrmPlanUpgrade = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <>
      {open ? (
        <Card sx={{ height: '480px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ fontWeight: '700', fontSize: '18px', marginLeft: '2px' }}>Vehicle Alerts</span>
              </Typography>
              <IconButton onClick={() => handleClose()}>
                <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                  <path
                    fill='#000'
                    d='M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2m-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8z'
                  />
                </svg>
              </IconButton>
            </Box>
            <Card sx={{ mt: 3, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '12px' }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start'
                    }}
                  >
                    <IconButton>
                      <svg width='17' height='11' viewBox='0 0 17 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M13.4522 1.1559L9.86739 8.80165C9.55326 9.58817 8.99891 10.0455 8.38913 10.0455C7.89022 10.0455 7.46522 9.78938 7.225 9.38697C6.9663 8.9114 6.98478 8.32608 7.29891 7.83221L11.9924 0.38767C12.2326 0.0218443 12.713 -0.106195 13.1011 0.0950092C13.4891 0.296213 13.637 0.753495 13.4522 1.1559ZM14.7087 3.36915C14.4315 3.07648 13.9696 3.05819 13.6554 3.33256C13.3598 3.60693 13.3413 4.06421 13.6185 4.37516C14.838 5.69214 15.5217 7.41151 15.5217 9.22235C15.5217 9.62476 15.8543 9.954 16.2609 9.954C16.6674 9.954 17 9.62476 17 9.22235C17 7.04569 16.187 4.96048 14.7087 3.36915ZM9.0913 2.16192C9.49783 2.1985 9.84891 1.90584 9.88587 1.50344C9.92283 1.10103 9.62717 0.753495 9.22065 0.716912C8.98044 0.698621 8.74022 0.680329 8.5 0.680329C3.80652 0.680329 0 4.52149 0 9.24064C0 9.64305 0.332609 9.97229 0.73913 9.97229C1.14565 9.97229 1.47826 9.64305 1.47826 9.24064C1.47826 5.32631 4.61957 2.14363 8.5 2.14363C8.70326 2.12534 8.90652 2.14363 9.0913 2.16192Z'
                          fill='#DD0000'
                        />
                      </svg>
                    </IconButton>
                    <Box>
                      <Typography fontWeight={700}>Harsh Breaking</Typography>
                      <Typography>HIO - James</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end'
                    }}
                  >
                    <Typography>2024-01-01</Typography>
                    <Typography>08:45 PM</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ mt: 1.5, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '12px' }}>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start'
                    }}
                  >
                    <IconButton>
                      <svg width='17' height='11' viewBox='0 0 17 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M13.4522 1.1559L9.86739 8.80165C9.55326 9.58817 8.99891 10.0455 8.38913 10.0455C7.89022 10.0455 7.46522 9.78938 7.225 9.38697C6.9663 8.9114 6.98478 8.32608 7.29891 7.83221L11.9924 0.38767C12.2326 0.0218443 12.713 -0.106195 13.1011 0.0950092C13.4891 0.296213 13.637 0.753495 13.4522 1.1559ZM14.7087 3.36915C14.4315 3.07648 13.9696 3.05819 13.6554 3.33256C13.3598 3.60693 13.3413 4.06421 13.6185 4.37516C14.838 5.69214 15.5217 7.41151 15.5217 9.22235C15.5217 9.62476 15.8543 9.954 16.2609 9.954C16.6674 9.954 17 9.62476 17 9.22235C17 7.04569 16.187 4.96048 14.7087 3.36915ZM9.0913 2.16192C9.49783 2.1985 9.84891 1.90584 9.88587 1.50344C9.92283 1.10103 9.62717 0.753495 9.22065 0.716912C8.98044 0.698621 8.74022 0.680329 8.5 0.680329C3.80652 0.680329 0 4.52149 0 9.24064C0 9.64305 0.332609 9.97229 0.73913 9.97229C1.14565 9.97229 1.47826 9.64305 1.47826 9.24064C1.47826 5.32631 4.61957 2.14363 8.5 2.14363C8.70326 2.12534 8.90652 2.14363 9.0913 2.16192Z'
                          fill='#DD0000'
                        />
                      </svg>
                    </IconButton>
                    <Box>
                      <Typography fontWeight={700}>High RPM</Typography>
                      <Typography>HIO - James</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end'
                    }}
                  >
                    <Typography>2024-01-01</Typography>
                    <Typography>08:50 PM</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ height: '480px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                <img src='/images/cards/truck.png' alt='' />
                <span style={{ fontWeight: '500', marginLeft: '2px' }}>TSL317AH</span>
              </Typography>
              <IconButton onClick={() => handleClickOpen()}>
                <svg width='19' height='20' viewBox='0 0 19 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M3.00222 7.99114C3.00167 6.74357 3.38973 5.52682 4.11249 4.50994C4.83524 3.49306 5.85679 2.72656 7.03519 2.31695C6.98956 2.03105 7.00649 1.73865 7.08483 1.45993C7.16317 1.18121 7.30104 0.9228 7.48894 0.702535C7.67683 0.482269 7.91028 0.30539 8.17317 0.184101C8.43606 0.0628115 8.72213 0 9.01165 0C9.30117 0 9.58724 0.0628115 9.85013 0.184101C10.113 0.30539 10.3465 0.482269 10.5344 0.702535C10.7223 0.9228 10.8601 1.18121 10.9385 1.45993C11.0168 1.73865 11.0337 2.03105 10.9881 2.31695C12.1646 2.72824 13.184 3.49546 13.9049 4.5122C14.6257 5.52893 15.0123 6.74479 15.0111 7.99114V13.9956L18.0133 15.997V16.9978H0V15.997L3.00222 13.9956V7.99114ZM11.0081 17.9985C11.0081 18.5293 10.7973 19.0384 10.4219 19.4138C10.0466 19.7891 9.53747 20 9.00665 20C8.47582 20 7.96674 19.7891 7.59139 19.4138C7.21604 19.0384 7.00517 18.5293 7.00517 17.9985H11.0081Z'
                    fill='#999999'
                  />
                  <circle cx='14.0741' cy='5.92593' r='3.7037' fill='#FF0000' />
                </svg>
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography
                sx={{ display: 'flex', alignItems: 'center', fontWeight: '400', color: '#747474', fontSize: '14px' }}
              >
                Status
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'center', color: '#98CBE5', fontWeight: '500' }}>
                In Transit
              </Typography>
            </Box>

            <Typography sx={{ mt: 4.5, mb: 2, fontWeight: 600, fontSize: '0.875rem' }}>Route Details:</Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Departure Location</Typography>
                <IconButton>
                  <svg width='10' height='13' viewBox='0 0 10 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.01904 2.16937C8.12485 0.810469 6.57679 0 4.875 0C3.17322 0 1.62516 0.810469 0.733126 2.16937C-0.163233 3.52625 -0.241178 5.18781 0.518779 6.61578C0.525275 6.62594 0.53177 6.63609 0.5361 6.64625L4.44414 12.7725C4.53508 12.9127 4.69963 13 4.875 13C4.96135 13.0002 5.04627 12.9793 5.12143 12.9395C5.19658 12.8996 5.25939 12.842 5.30369 12.7725L9.21174 6.64625C9.21823 6.63609 9.22473 6.62594 9.22906 6.61578C9.99334 5.18781 9.91107 3.52422 9.01904 2.16937ZM2.68606 4.30625C2.68606 3.17484 3.66903 2.25266 4.875 2.25266C6.08097 2.25266 7.06394 3.17484 7.06394 4.30625C7.06394 5.43766 6.08097 6.35984 4.875 6.35984C3.66903 6.35984 2.68606 5.43969 2.68606 4.30625Z'
                      fill='#FF9900'
                    />
                  </svg>
                </IconButton>
              </Box>
              <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Abuja</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Destination</Typography>
                <IconButton>
                  <svg width='10' height='13' viewBox='0 0 10 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.01904 2.16937C8.12485 0.810469 6.57679 0 4.875 0C3.17322 0 1.62516 0.810469 0.733126 2.16937C-0.163233 3.52625 -0.241178 5.18781 0.518779 6.61578C0.525275 6.62594 0.53177 6.63609 0.5361 6.64625L4.44414 12.7725C4.53508 12.9127 4.69963 13 4.875 13C4.96135 13.0002 5.04627 12.9793 5.12143 12.9395C5.19658 12.8996 5.25939 12.842 5.30369 12.7725L9.21174 6.64625C9.21823 6.63609 9.22473 6.62594 9.22906 6.61578C9.99334 5.18781 9.91107 3.52422 9.01904 2.16937ZM2.68606 4.30625C2.68606 3.17484 3.66903 2.25266 4.875 2.25266C6.08097 2.25266 7.06394 3.17484 7.06394 4.30625C7.06394 5.43766 6.08097 6.35984 4.875 6.35984C3.66903 6.35984 2.68606 5.43969 2.68606 4.30625Z'
                      fill='#FF9900'
                    />
                  </svg>
                </IconButton>
              </Box>
              <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Minna</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Departure Time</Typography>
                <IconButton>
                  <svg width='10' height='13' viewBox='0 0 10 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.01904 2.16937C8.12485 0.810469 6.57679 0 4.875 0C3.17322 0 1.62516 0.810469 0.733126 2.16937C-0.163233 3.52625 -0.241178 5.18781 0.518779 6.61578C0.525275 6.62594 0.53177 6.63609 0.5361 6.64625L4.44414 12.7725C4.53508 12.9127 4.69963 13 4.875 13C4.96135 13.0002 5.04627 12.9793 5.12143 12.9395C5.19658 12.8996 5.25939 12.842 5.30369 12.7725L9.21174 6.64625C9.21823 6.63609 9.22473 6.62594 9.22906 6.61578C9.99334 5.18781 9.91107 3.52422 9.01904 2.16937ZM2.68606 4.30625C2.68606 3.17484 3.66903 2.25266 4.875 2.25266C6.08097 2.25266 7.06394 3.17484 7.06394 4.30625C7.06394 5.43766 6.08097 6.35984 4.875 6.35984C3.66903 6.35984 2.68606 5.43969 2.68606 4.30625Z'
                      fill='#FF9900'
                    />
                  </svg>
                </IconButton>
              </Box>
              <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>08:30 PM</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Distance</Typography>
                <IconButton>
                  <svg width='10' height='13' viewBox='0 0 10 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.01904 2.16937C8.12485 0.810469 6.57679 0 4.875 0C3.17322 0 1.62516 0.810469 0.733126 2.16937C-0.163233 3.52625 -0.241178 5.18781 0.518779 6.61578C0.525275 6.62594 0.53177 6.63609 0.5361 6.64625L4.44414 12.7725C4.53508 12.9127 4.69963 13 4.875 13C4.96135 13.0002 5.04627 12.9793 5.12143 12.9395C5.19658 12.8996 5.25939 12.842 5.30369 12.7725L9.21174 6.64625C9.21823 6.63609 9.22473 6.62594 9.22906 6.61578C9.99334 5.18781 9.91107 3.52422 9.01904 2.16937ZM2.68606 4.30625C2.68606 3.17484 3.66903 2.25266 4.875 2.25266C6.08097 2.25266 7.06394 3.17484 7.06394 4.30625C7.06394 5.43766 6.08097 6.35984 4.875 6.35984C3.66903 6.35984 2.68606 5.43969 2.68606 4.30625Z'
                      fill='#FF9900'
                    />
                  </svg>
                </IconButton>
              </Box>
              <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>30 Km</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Estimated Delivery Time</Typography>
                <IconButton>
                  <svg width='10' height='13' viewBox='0 0 10 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.01904 2.16937C8.12485 0.810469 6.57679 0 4.875 0C3.17322 0 1.62516 0.810469 0.733126 2.16937C-0.163233 3.52625 -0.241178 5.18781 0.518779 6.61578C0.525275 6.62594 0.53177 6.63609 0.5361 6.64625L4.44414 12.7725C4.53508 12.9127 4.69963 13 4.875 13C4.96135 13.0002 5.04627 12.9793 5.12143 12.9395C5.19658 12.8996 5.25939 12.842 5.30369 12.7725L9.21174 6.64625C9.21823 6.63609 9.22473 6.62594 9.22906 6.61578C9.99334 5.18781 9.91107 3.52422 9.01904 2.16937ZM2.68606 4.30625C2.68606 3.17484 3.66903 2.25266 4.875 2.25266C6.08097 2.25266 7.06394 3.17484 7.06394 4.30625C7.06394 5.43766 6.08097 6.35984 4.875 6.35984C3.66903 6.35984 2.68606 5.43969 2.68606 4.30625Z'
                      fill='#FF9900'
                    />
                  </svg>
                </IconButton>
              </Box>
              <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>33 Minutes</Typography>
            </Box>

            <Typography sx={{ mt: 4.5, mb: 2, fontWeight: 600, fontSize: '0.875rem' }}>Vehicle Status:</Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Vehicle State</Typography>
                <IconButton>
                  <svg width='10' height='13' viewBox='0 0 10 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.01904 2.16937C8.12485 0.810469 6.57679 0 4.875 0C3.17322 0 1.62516 0.810469 0.733126 2.16937C-0.163233 3.52625 -0.241178 5.18781 0.518779 6.61578C0.525275 6.62594 0.53177 6.63609 0.5361 6.64625L4.44414 12.7725C4.53508 12.9127 4.69963 13 4.875 13C4.96135 13.0002 5.04627 12.9793 5.12143 12.9395C5.19658 12.8996 5.25939 12.842 5.30369 12.7725L9.21174 6.64625C9.21823 6.63609 9.22473 6.62594 9.22906 6.61578C9.99334 5.18781 9.91107 3.52422 9.01904 2.16937ZM2.68606 4.30625C2.68606 3.17484 3.66903 2.25266 4.875 2.25266C6.08097 2.25266 7.06394 3.17484 7.06394 4.30625C7.06394 5.43766 6.08097 6.35984 4.875 6.35984C3.66903 6.35984 2.68606 5.43969 2.68606 4.30625Z'
                      fill='#FF9900'
                    />
                  </svg>
                </IconButton>
              </Box>
              <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Running</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ mr: 2, display: 'flex', mb: 0.4, alignItems: 'center' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Vehicle Speed</Typography>
                <IconButton>
                  <svg width='10' height='13' viewBox='0 0 10 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M9.01904 2.16937C8.12485 0.810469 6.57679 0 4.875 0C3.17322 0 1.62516 0.810469 0.733126 2.16937C-0.163233 3.52625 -0.241178 5.18781 0.518779 6.61578C0.525275 6.62594 0.53177 6.63609 0.5361 6.64625L4.44414 12.7725C4.53508 12.9127 4.69963 13 4.875 13C4.96135 13.0002 5.04627 12.9793 5.12143 12.9395C5.19658 12.8996 5.25939 12.842 5.30369 12.7725L9.21174 6.64625C9.21823 6.63609 9.22473 6.62594 9.22906 6.61578C9.99334 5.18781 9.91107 3.52422 9.01904 2.16937ZM2.68606 4.30625C2.68606 3.17484 3.66903 2.25266 4.875 2.25266C6.08097 2.25266 7.06394 3.17484 7.06394 4.30625C7.06394 5.43766 6.08097 6.35984 4.875 6.35984C3.66903 6.35984 2.68606 5.43969 2.68606 4.30625Z'
                      fill='#FF9900'
                    />
                  </svg>
                </IconButton>
              </Box>
              <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>65 Km/h</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 0.4, alignItems: 'center', mt: 12 }}>
              <Link href='#' style={{ textDecoration: 'underline', color: '#98CBE5', fontSize: '15px' }}>
                Delivery History
              </Link>
            </Box>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default CrmPlanUpgrade
