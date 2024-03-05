import { SyntheticEvent, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import GoogleMapReact from 'google-map-react'
import { styled } from '@mui/material/styles'
import Tab, { TabProps } from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Demo Components Imports
import CrmUpgradePlan from 'src/views/dashboards/crm/CrmUpgradePlan'
import { IconButton } from '@mui/material'
import TableBasic from 'src/views/ui/cards/advanced/CustomTable'
import SearchSelectInput from 'src/views/ui/cards/advanced/SearchSelect'
import CustomModalDetail from 'src/views/ui/cards/advanced/CustomModalDetail'

export const rows = [
  {
    id: 1,
    number_plate: 'LSD456KL',
    vehicle_code: 'H10',
    vehicle_brand: 'Toyota',
    loading_capacity: '6000 Kg',
    vehicl_details: '',
    status: 'In Transit'
  },
  {
    id: 2,
    number_plate: 'LSD456KL',
    vehicle_code: 'H10',
    vehicle_brand: 'Toyota',
    loading_capacity: '6000 Kg',
    vehicl_details: '',
    status: 'In Transit'
  },
  {
    id: 3,
    number_plate: 'LSD456KL',
    vehicle_code: 'H10',
    vehicle_brand: 'Toyota',
    loading_capacity: '6000 Kg',
    vehicl_details: '',
    status: 'In Transit'
  },
  {
    id: 4,
    number_plate: 'LSD456KL',
    vehicle_code: 'H10',
    vehicle_brand: 'Toyota',
    loading_capacity: '6000 Kg',
    vehicl_details: '',
    status: 'In Transit'
  },
  {
    id: 5,
    number_plate: 'LSD456KL',
    vehicle_code: 'H10',
    vehicle_brand: 'Toyota',
    loading_capacity: '6000 Kg',
    vehicl_details: '',
    status: 'In Transit'
  }
]

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
}

// const StyledLink = styled('a')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     textDecoration: 'none',
//     // marginRight: theme.spacing(8)
// }))

// const ListItem = styled(MuiListItem)<ListItemProps>(({ theme }) => ({
//     cursor: 'pointer',
//     paddingTop: theme.spacing(2.25),
//     paddingBottom: theme.spacing(2.25),
//     '&:hover': {
//         background: '#5616164F'
//     }
// }))

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
  },
  [`&.${tableCellClasses.body}`]: {
    // backgroundColor: '#EDECEC',
    color: theme.palette.common.black,
    fontSize: 14

    // '&:hover':{
    //     backgroundColor: '#D6D6D6',

    // }
  }
}))

const StyledTableRow = styled(TableRow)(() => ({
  backgroundColor: '#EDECEC',
  '&:hover': {
    backgroundColor: '#D6D6D6'
  }

  // '&:nth-of-type(odd)': {
  // },
  // hide last border
  // '&:last-child td, &:last-child th': {
  //     border: 0,
  // },
}))

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

const CRMDashboard = () => {
  const [value, setValue] = useState<string>('1')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

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
          <TabButton value='1' label='Vehicles List' color='#000' />
          <TabButton value='2' label='Live Tracking' color='#000' />
        </TabList>
        <TabPanel value='1'>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={12}>
              <TableBasic onOpen={handleOpenModal} />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value='2'>
          <>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4}>
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
                      <Typography
                        style={{
                          fontSize: '16px',
                          width: '100%',
                          maxWidth: '150px',
                          color: 'rgba(255,255,255,1)',
                          fontWeight: 'bold'
                        }}
                      >
                        Track Vehicles
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                          alignItems: 'center'
                        }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            ml: 8
                          }}
                        >
                          <SearchSelectInput />
                        </Box>
                      </Box>
                    </Box>
                    <PerfectScrollbar>
                      <Box sx={{ height: '600px' }}>
                        <TableContainer>
                          <Table
                            sx={{
                              minWidth: 200,
                              borderCollapse: 'separate',
                              borderSpacing: '0px 2px',
                              padding: '20px',
                              paddingLeft: '10px'
                            }}
                            aria-label='customized table'
                          >
                            <TableHead className='no-padding-head'>
                              <TableRow>
                                <StyledTableCell align='left'>Number Plate</StyledTableCell>
                                <StyledTableCell align='center'>Status</StyledTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody className='no-padding-row'>
                              {rows?.slice(0, 10)?.map((row: any) => (
                                <StyledTableRow key={row.id}>
                                  <StyledTableCell align='left' sx={{ fontWeight: '600' }}>
                                    {row.number_plate}
                                  </StyledTableCell>

                                  <StyledTableCell align='center'>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                      <Typography
                                        style={{
                                          textDecoration: 'underline',
                                          color: '#98CBE5',
                                          fontSize: '15px',
                                          fontWeight: 'bold'
                                        }}
                                      >
                                        In Transit
                                      </Typography>
                                      <Typography sx={{ fontSize: '10px', lineHeight: '.5rem' }}>
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
                                        Abuja
                                      </Typography>
                                      <Typography sx={{ fontSize: '10px', lineHeight: '.5rem' }}>
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
                                        Abuja
                                      </Typography>
                                    </Box>
                                  </StyledTableCell>
                                </StyledTableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Box>
                    </PerfectScrollbar>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <Grid container rowSpacing={4}>
                  <Grid item xs={12} sm={6} md={5}>
                    <CrmUpgradePlan />
                  </Grid>

                  <Grid item xs={12} sm={6} md={7}>
                    <div style={{ width: '100%', height: '100%', marginBottom: 20 }}>
                      <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyAZiYuKJh08k7dr0aTf17vIgEwpOju_JvE' }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                      ></GoogleMapReact>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <Card sx={{ mb: 6 }}>
                      <Typography sx={{ fontWeight: '600', fontSize: '18px', color: '#000', px: 3, py: 2 }}>
                        Vehicle Details
                      </Typography>
                      <CardContent>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                        >
                          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>Toyota Dyna </Typography>
                            <Typography variant='caption' sx={{ fontWeight: 500, fontSize: '0.8125rem' }}>
                              2018
                            </Typography>
                            <Typography variant='caption' sx={{ fontWeight: 500, fontSize: '0.8125rem' }}>
                              12ft x 5ft x 8ft
                            </Typography>
                          </Box>
                          <Box>
                            <img src='/images/cards/vehicle.png' alt='' />
                          </Box>
                          {/* <Typography variant='body2' sx={{ fontWeight: 500, fontSize: '0.8125rem' }}>
                                                        Manage
                                                    </Typography> */}
                        </Box>

                        <Box sx={{ display: 'flex', mb: 3, alignItems: 'center', justifyContent: 'space-between' }}>
                          <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Load Bearing Capacity </Typography>

                          <Typography variant='body2' sx={{ fontWeight: 500, fontSize: '0.8125rem' }}>
                            6000 kg
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', mb: 3, alignItems: 'center', justifyContent: 'space-between' }}>
                          <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Vehicle Code</Typography>

                          <Typography variant='body2' sx={{ fontWeight: 500, fontSize: '0.8125rem' }}>
                            H10
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', mb: 3, alignItems: 'center', justifyContent: 'space-between' }}>
                          <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Registration Number</Typography>

                          <Typography variant='body2' sx={{ fontWeight: 500, fontSize: '0.8125rem' }}>
                            XCH1090
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', mb: 3, alignItems: 'center', justifyContent: 'space-between' }}>
                          <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Mileage</Typography>

                          <Typography variant='body2' sx={{ fontWeight: 500, fontSize: '0.8125rem' }}>
                            50670 km
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3, alignItems: 'center', justifyContent: 'space-between' }}>
                          <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Engine Condition</Typography>

                          <Typography variant='body2' color={'#DD0000'} sx={{ fontWeight: 500, fontSize: '0.8125rem' }}>
                            Oil Change Needed
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3, alignItems: 'center', justifyContent: 'space-between' }}>
                          <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Tyres Condition</Typography>

                          <Typography variant='body2' color={'#0FB800'} sx={{ fontWeight: 500, fontSize: '0.8125rem' }}>
                            Good
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mb: 3, alignItems: 'center', justifyContent: 'space-between' }}>
                          <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Breaks Condition</Typography>

                          <Typography variant='body2' color={'#FF9900'} sx={{ fontWeight: 500, fontSize: '0.8125rem' }}>
                            Medium
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        </TabPanel>
      </TabContext>
      <CustomModalDetail open={openModal} onClose={handleCloseModal} />
    </>
  )
}

export default CRMDashboard
