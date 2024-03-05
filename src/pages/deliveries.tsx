import { SyntheticEvent, useState, useCallback } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Tab, { TabProps } from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import MuiListItem, { ListItemProps } from '@mui/material/ListItem'

import 'simplebar-react/dist/simplebar.min.css'

// ** Demo Components Imports
import { IconButton } from '@mui/material'
import TableBasicDelivery from 'src/views/ui/cards/advanced/CustomTableDelivery'
import SearchInput from 'src/views/ui/cards/advanced/Search'

import PerfectScrollbar from 'react-perfect-scrollbar'
import TransitionsModal from 'src/views/ui/cards/advanced/CusotmModal'

export const rows = [
  {
    id: 1,
    address: 'Complete Address Here',
    city: 'City Name',
    status: 'Enabled'
  },
  {
    id: 2,
    address: 'Complete Address Here',
    city: 'City Name',
    status: 'Enabled'
  },
  {
    id: 3,
    address: 'Complete Address Here',
    city: 'City Name',
    status: 'Enabled'
  },
  {
    id: 4,
    address: 'Complete Address Here',
    city: 'City Name',
    status: 'Enabled'
  },
  {
    id: 5,
    address: 'Complete Address Here',
    city: 'City Name',
    status: 'Enabled'
  }
]

// const theme = useTheme()

// const defaultProps = {
//     center: {
//         lat: 10.99835602,
//         lng: 77.01502627
//     },
//     zoom: 11
// };

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.white,
//         color: theme.palette.common.black,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         // backgroundColor: '#EDECEC',
//         color: theme.palette.common.black,
//         fontSize: 14,

//         // '&:hover':{
//         //     backgroundColor: '#D6D6D6',

//         // }
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     backgroundColor: '#EDECEC',
//     '&:hover': {
//         backgroundColor: '#D6D6D6',

//     }

//     // '&:nth-of-type(odd)': {
//     // },
//     // hide last border
//     // '&:last-child td, &:last-child th': {
//     //     border: 0,
//     // },
// }));

const TabList = styled(MuiTabList)<TabListProps>(() => ({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  },
  '& .Mui-selected': {
    backgroundColor: '#cbb7b7',
    color: `#000 !important`
  },
  '& .MuiTab-root': {
    minHeight: 50,
    minWidth: 130,
    borderRadius: 0,
    textTransform: 'capitalize',
    fontWeight: '400',
    '&:hover': {
      backgroundColor: '#cbb7b7',
      color: `#000 !important`
    }
  }
}))

const ListItem = styled(MuiListItem)<ListItemProps>(({ theme }) => ({
  cursor: 'pointer',
  paddingTop: theme.spacing(2.25),
  paddingBottom: theme.spacing(2.25),
  '&:hover': {
    background: '#5616164F'
  }
}))

const TabButton = styled(Tab)<TabProps>(() => ({
  borderRadius: '0px !important',
  color: '#000000 !important',
  '&.Mui-selected': {
    backgroundColor: '#5616164F !important',
    color: '#000000 !important'
  },
  '&:hover': {
    backgroundColor: '#5616164F',
    color: '#000000 !important',
    border: '1px solid #FFFFFF26'
  }
}))
const Deliveries = () => {
  const [value, setValue] = useState<string>('1')
  const [role, setRole] = useState<string>('')
  const [plan, setPlan] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  const handleRoleChange = useCallback((e: SelectChangeEvent) => {
    setRole(e.target.value)
  }, [])

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  // const handleFilter = useCallback((val: string) => {
  //     setValue(val)
  // }, [])

  const handlePlanChange = useCallback((e: SelectChangeEvent) => {
    setPlan(e.target.value)
  }, [])

  const handleStatusChange = useCallback((e: SelectChangeEvent) => {
    setStatus(e.target.value)
  }, [])

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 900) + 100
  }

  // Create an array of 10 random number plates
  const numberPlates = Array.from({ length: 20 }, () => {
    const randomThreeDigitNumber = generateRandomNumber()

    return `TSL${randomThreeDigitNumber}AB`
  })

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='customized tabs'
          sx={{
            backgroundColor: '#fff',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            height: '50px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TabButton value='1' label='Location Management' color='#000' />
          <TabButton value='2' label='Delivery History' color='#000' />
        </TabList>
        <TabPanel value='1'>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={12}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant='h5' color={'#000'} sx={{ fontWeight: '600' }}>
                  Delivery Locations Management
                </Typography>
                <Button
                  onClick={() => handleOpenModal()}
                  variant='contained'
                  sx={{ backgroundColor: '#561616', borderRadius: '12px' }}
                >
                  Create New Location
                </Button>
              </Box>
              <TableBasicDelivery onOpen={handleOpenModal} />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value='2'>
          <>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={3}>
                <Card>
                  <CardContent sx={{ padding: 0 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: '#561616',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        pl: 5,
                        pr: 5,
                        height: 60
                      }}
                    >
                      <SearchInput />
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: '600', fontSize: '16px', m: 2, paddingLeft: '10px' }}>
                        Number Plate
                      </Typography>
                      <PerfectScrollbar style={{ padding: '20px', paddingLeft: '10px' }}>
                        <List component='div' sx={{ py: 2.625, height: '90vh', backgroundColor: '#fff' }}>
                          {numberPlates.map((plate, index) => (
                            <ListItem sx={{ padding: 3, borderBottom: '1px solid #d6d6d6' }} key={index}>
                              {plate}
                            </ListItem>
                          ))}
                        </List>
                      </PerfectScrollbar>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={9}>
                <Box>
                  <Card>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3 }}>
                      <Typography variant='h5' color={'#000'} sx={{ fontWeight: '600' }}>
                        Filter Vehicle Deliveries
                      </Typography>
                    </Box>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item sm={3} xs={12}>
                          <Typography sx={{ fontSize: '14px', fontWeight: '600', mb: 1 }}>
                            Departure Location
                          </Typography>
                          <FormControl size='small' fullWidth>
                            {/* <FormHelperText>Departure Location</FormHelperText> */}
                            <InputLabel id='departure-select'>Select</InputLabel>
                            <Select
                              fullWidth
                              value={role}
                              size='small'
                              id='select-departure'
                              label='Departure Location'
                              labelId='departure-select'
                              onChange={handleRoleChange}
                              inputProps={{ placeholder: 'Select' }}
                            >
                              <MenuItem value=''>Departure Location</MenuItem>
                              <MenuItem value='admin'>Admin</MenuItem>
                              <MenuItem value='author'>Author</MenuItem>
                              <MenuItem value='editor'>Editor</MenuItem>
                              <MenuItem value='maintainer'>Maintainer</MenuItem>
                              <MenuItem value='subscriber'>Subscriber</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={3} xs={12}>
                          <Typography sx={{ fontSize: '14px', fontWeight: '600', mb: 1 }}>
                            Destination Location
                          </Typography>

                          <FormControl size='small' fullWidth>
                            <InputLabel id='plan-select'>Select</InputLabel>
                            <Select
                              fullWidth
                              value={plan}
                              id='select-plan'
                              label='Destination Location'
                              labelId='plan-select'
                              onChange={handlePlanChange}
                              inputProps={{ placeholder: 'Select' }}
                            >
                              <MenuItem value=''>Destination Location</MenuItem>
                              <MenuItem value='basic'>Basic</MenuItem>
                              <MenuItem value='company'>Company</MenuItem>
                              <MenuItem value='enterprise'>Enterprise</MenuItem>
                              <MenuItem value='team'>Team</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={2} xs={12}>
                          <Typography sx={{ fontSize: '14px', fontWeight: '600', mb: 1 }}>
                            Trip Distance (km)
                          </Typography>
                          <FormControl size='small' fullWidth>
                            <InputLabel id='status-select'>Select</InputLabel>
                            <Select
                              fullWidth
                              value={status}
                              id='select-status'
                              label='Trip Distance'
                              labelId='status-select'
                              onChange={handleStatusChange}
                              inputProps={{ placeholder: 'Select' }}
                            >
                              <MenuItem value=''>Select Distance (km)</MenuItem>
                              <MenuItem value='pending'>Pending</MenuItem>
                              <MenuItem value='active'>Active</MenuItem>
                              <MenuItem value='inactive'>Inactive</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={2} xs={12}>
                          <Typography sx={{ fontSize: '14px', fontWeight: '600', mb: 1 }}>Avg Speed (kmph)</Typography>
                          <FormControl size='small' fullWidth>
                            <InputLabel id='status-select'>Select</InputLabel>
                            <Select
                              fullWidth
                              value={status}
                              id='select-status'
                              label='Trip Avg Speed'
                              labelId='status-select'
                              onChange={handleStatusChange}
                              inputProps={{ placeholder: 'Select Avg Speed (kmph)' }}
                            >
                              <MenuItem value=''>Select Avg Speed (kmph)</MenuItem>
                              <MenuItem value='pending'>Pending</MenuItem>
                              <MenuItem value='active'>Active</MenuItem>
                              <MenuItem value='inactive'>Inactive</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item sm={2} xs={12}>
                          <Typography sx={{ fontSize: '14px', fontWeight: '600', mb: 1 }}>Journey Duration</Typography>
                          <FormControl size='small' fullWidth>
                            <InputLabel id='status-select'>Select</InputLabel>
                            <Select
                              fullWidth
                              value={status}
                              id='select-status'
                              label='Journey Duration (Minutes)'
                              labelId='status-select'
                              onChange={handleStatusChange}
                              inputProps={{ placeholder: 'Select' }}
                            >
                              <MenuItem value=''>Select Duration (Minutes)</MenuItem>
                              <MenuItem value='pending'>Pending</MenuItem>
                              <MenuItem value='active'>Active</MenuItem>
                              <MenuItem value='inactive'>Inactive</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 5 }}>
                        <Button variant='contained' sx={{ backgroundColor: '#EEEEEE', color: '#555555' }}>
                          <img src='/images/icons/calender.png' />
                          01:01:2024 - 20:01:2024
                        </Button>
                        <Box>
                          <Button
                            variant='contained'
                            sx={theme => ({
                              backgroundColor: '#676767',
                              mr: 2,
                              [theme.breakpoints.up('xs')]: { ml: 2, mb: 2 },
                              [theme.breakpoints.up('sm')]: { ml: 2 }
                            })}
                          >
                            Reset Filter
                          </Button>
                          <Button
                            variant='contained'
                            sx={theme => ({
                              backgroundColor: '#561616',
                              mr: 2,
                              [theme.breakpoints.up('xs')]: { ml: 2, mb: 2 },
                              [theme.breakpoints.up('sm')]: { ml: 2 }
                            })}
                          >
                            Filter Deliveries
                          </Button>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: '#561616',
                          display: 'flex',
                          p: 3,
                          borderRadius: '10px',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          mt: 5
                        }}
                      >
                        <Typography color={'#fff'}>H10 -Vehicle Deliveries History</Typography>
                        <Box>
                          <IconButton>
                            <svg
                              width='17'
                              height='15'
                              viewBox='0 0 17 15'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M13.3333 3.33333H3.33333V0H13.3333V3.33333ZM13.3333 7.91667C13.5694 7.91667 13.7675 7.83667 13.9275 7.67667C14.0875 7.51667 14.1672 7.31889 14.1667 7.08333C14.1667 6.84722 14.0867 6.64944 13.9267 6.49C13.7667 6.33056 13.5689 6.25056 13.3333 6.25C13.0972 6.25 12.8994 6.33 12.74 6.49C12.5806 6.65 12.5006 6.84778 12.5 7.08333C12.5 7.31944 12.58 7.5175 12.74 7.6775C12.9 7.8375 13.0978 7.91722 13.3333 7.91667ZM11.6667 13.3333V10H5V13.3333H11.6667ZM13.3333 15H3.33333V11.6667H0V6.66667C0 5.95833 0.243056 5.36472 0.729167 4.88583C1.21528 4.40694 1.80556 4.16722 2.5 4.16667H14.1667C14.875 4.16667 15.4689 4.40639 15.9483 4.88583C16.4278 5.36528 16.6672 5.95889 16.6667 6.66667V11.6667H13.3333V15Z'
                                fill='white'
                              />
                            </svg>
                          </IconButton>
                        </Box>
                      </Box>
                      <Card sx={{ mt: 10 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            px: 3,
                            py: 1,
                            borderBottom: '1px solid #C4C4C4'
                          }}
                        >
                          <Typography color='#747474' sx={{ fontWeight: '600', fontSize: '14px' }}>
                            Trip # - 378
                          </Typography>
                          <i style={{ color: '#747474', fontWeight: '500', fontSize: '14px' }}>2024-01-01</i>
                        </Box>
                        <CardContent sx={{ p: 5 }}>
                          <Grid container spacing={6}>
                            <Grid item sm={6} xs={12}>
                              <Box
                                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}
                              >
                                <Typography color={'#000'} fontWeight={700}>
                                  Departure Location
                                </Typography>
                                <Typography color={'#747474'}>City</Typography>
                              </Box>
                              <Box
                                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}
                              >
                                <Typography color={'#000'} fontWeight={700}>
                                  Departure Time
                                </Typography>
                                <Typography color={'#747474'}>08:30 PM</Typography>
                              </Box>
                              <Box
                                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}
                              >
                                <Typography color={'#000'} fontWeight={700}>
                                  Journey Duration
                                </Typography>
                                <Typography color={'#747474'}>33 Minutes</Typography>
                              </Box>
                              <Box
                                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}
                              >
                                <Typography color={'#000'} fontWeight={700}>
                                  Trip Avg Speed
                                </Typography>
                                <Typography color={'#747474'}>4560 Kg</Typography>
                              </Box>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                              <Box
                                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}
                              >
                                <Typography color={'#000'} fontWeight={700}>
                                  Departure Location
                                </Typography>
                                <Typography color={'#747474'}>City</Typography>
                              </Box>
                              <Box
                                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}
                              >
                                <Typography color={'#000'} fontWeight={700}>
                                  Arrival Time
                                </Typography>
                                <Typography color={'#747474'}>09:30 PM</Typography>
                              </Box>
                              <Box
                                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}
                              >
                                <Typography color={'#000'} fontWeight={700}>
                                  Trip Distance
                                </Typography>
                                <Typography color={'#747474'}>30 Km</Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12}>
                              <Button
                                sx={{
                                  backgroundColor: '#D9D9D9',
                                  color: '#000',
                                  width: '100%',
                                  borderRadius: '12px',
                                  fontWeight: '600'
                                }}
                              >
                                Trip Alerts{' '}
                              </Button>
                            </Grid>
                          </Grid>
                          <Grid container spacing={4}>
                            <Grid item xs={6} sm={4}>
                              <Card sx={{ mt: 10 }}>
                                <CardContent>
                                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'start',
                                        alignItems: 'start',
                                        borderRadius: '12px'
                                      }}
                                    >
                                      <Typography fontWeight={700}>
                                        <IconButton>
                                          <svg
                                            width='17'
                                            height='11'
                                            viewBox='0 0 17 11'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                          >
                                            <path
                                              d='M13.4522 1.1559L9.86739 8.80165C9.55326 9.58817 8.99891 10.0455 8.38913 10.0455C7.89022 10.0455 7.46522 9.78938 7.225 9.38697C6.9663 8.9114 6.98478 8.32608 7.29891 7.83221L11.9924 0.38767C12.2326 0.0218443 12.713 -0.106195 13.1011 0.0950092C13.4891 0.296213 13.637 0.753495 13.4522 1.1559ZM14.7087 3.36915C14.4315 3.07648 13.9696 3.05819 13.6554 3.33256C13.3598 3.60693 13.3413 4.06421 13.6185 4.37516C14.838 5.69214 15.5217 7.41151 15.5217 9.22235C15.5217 9.62476 15.8543 9.954 16.2609 9.954C16.6674 9.954 17 9.62476 17 9.22235C17 7.04569 16.187 4.96048 14.7087 3.36915ZM9.0913 2.16192C9.49783 2.1985 9.84891 1.90584 9.88587 1.50344C9.92283 1.10103 9.62717 0.753495 9.22065 0.716912C8.98044 0.698621 8.74022 0.680329 8.5 0.680329C3.80652 0.680329 0 4.52149 0 9.24064C0 9.64305 0.332609 9.97229 0.73913 9.97229C1.14565 9.97229 1.47826 9.64305 1.47826 9.24064C1.47826 5.32631 4.61957 2.14363 8.5 2.14363C8.70326 2.12534 8.90652 2.14363 9.0913 2.16192Z'
                                              fill='#DD0000'
                                            />
                                          </svg>
                                        </IconButton>
                                        High RPM
                                      </Typography>
                                      <Typography>Driver - James</Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'start',
                                        alignItems: 'start',
                                        borderRadius: '12px'
                                      }}
                                    >
                                      <Typography>2024-01-01</Typography>
                                      <Typography>08:50 PM</Typography>
                                    </Box>
                                  </Box>
                                </CardContent>
                              </Card>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                              <Card sx={{ mt: 10 }}>
                                <CardContent>
                                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'start',
                                        alignItems: 'start'
                                      }}
                                    >
                                      <Typography fontWeight={700}>
                                        <IconButton>
                                          <svg
                                            width='17'
                                            height='11'
                                            viewBox='0 0 17 11'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'
                                          >
                                            <path
                                              d='M13.4522 1.1559L9.86739 8.80165C9.55326 9.58817 8.99891 10.0455 8.38913 10.0455C7.89022 10.0455 7.46522 9.78938 7.225 9.38697C6.9663 8.9114 6.98478 8.32608 7.29891 7.83221L11.9924 0.38767C12.2326 0.0218443 12.713 -0.106195 13.1011 0.0950092C13.4891 0.296213 13.637 0.753495 13.4522 1.1559ZM14.7087 3.36915C14.4315 3.07648 13.9696 3.05819 13.6554 3.33256C13.3598 3.60693 13.3413 4.06421 13.6185 4.37516C14.838 5.69214 15.5217 7.41151 15.5217 9.22235C15.5217 9.62476 15.8543 9.954 16.2609 9.954C16.6674 9.954 17 9.62476 17 9.22235C17 7.04569 16.187 4.96048 14.7087 3.36915ZM9.0913 2.16192C9.49783 2.1985 9.84891 1.90584 9.88587 1.50344C9.92283 1.10103 9.62717 0.753495 9.22065 0.716912C8.98044 0.698621 8.74022 0.680329 8.5 0.680329C3.80652 0.680329 0 4.52149 0 9.24064C0 9.64305 0.332609 9.97229 0.73913 9.97229C1.14565 9.97229 1.47826 9.64305 1.47826 9.24064C1.47826 5.32631 4.61957 2.14363 8.5 2.14363C8.70326 2.12534 8.90652 2.14363 9.0913 2.16192Z'
                                              fill='#DD0000'
                                            />
                                          </svg>
                                        </IconButton>
                                        High RPM
                                      </Typography>
                                      <Typography>Driver - James</Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'start',
                                        alignItems: 'start'
                                      }}
                                    >
                                      <Typography>2024-01-01</Typography>
                                      <Typography>08:50 PM</Typography>
                                    </Box>
                                  </Box>
                                </CardContent>
                              </Card>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </>
        </TabPanel>
      </TabContext>
      <TransitionsModal open={openModal} onClose={handleCloseModal} />
    </>
  )
}

export default Deliveries
