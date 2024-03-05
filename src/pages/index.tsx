import { SyntheticEvent, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box, { BoxProps } from '@mui/material/Box'
import GoogleMapReact from 'google-map-react'
import { styled } from '@mui/material/styles'
import Tab, { TabProps } from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import Link from 'next/link'

import DeliveriesSummaryCard from 'src/views/ui/cards/advanced/DeliveriesSummaryCard'
import VehicleDetails from './components/VehicleDialog'
import FleetStatisticsCard from 'src/views/ui/cards/advanced/FleetStatisticsCard'
import CusotmModalMain from 'src/views/ui/cards/advanced/CusotmModalMain'

interface DataType {
  title: string
  imgAlt: string
  imgSrc: string
  subtitle: string
  imgWidth: number
  imgHeight: number
  numbers: number
  measurementUnit: string
}

const FleetData: DataType[] = [
  {
    imgWidth: 30,
    imgHeight: 30,
    title: "Total Number Of Vehicle's",
    imgAlt: 'Vehicle',
    subtitle: 'Received Money',
    imgSrc: '/images/cards/truck.png',
    numbers: 74,
    measurementUnit: ''
  },
  {
    imgWidth: 30,
    imgHeight: 30,
    title: "Vehicle's On Route",
    imgAlt: 'Vehicle',
    subtitle: 'Received Money',
    imgSrc: '/images/cards/Location.png',
    numbers: 72,
    measurementUnit: ''
  },
  {
    imgWidth: 30,
    imgHeight: 30,
    title: 'Distance Covered',
    imgAlt: 'Vehicle',
    subtitle: 'Received Money',
    imgSrc: '/images/cards/Travel-Location.png',
    numbers: 904890,
    measurementUnit: 'km'
  },
  {
    imgWidth: 30,
    imgHeight: 30,
    title: 'Fuel Avg ',
    imgAlt: 'Vehicle',
    subtitle: 'Received Money',
    imgSrc: '/images/cards/petrol-pump.png',
    numbers: 9.35,
    measurementUnit: 'km/Lr'
  }
]
const DeliverySummary: DataType[] = [
  {
    imgWidth: 30,
    imgHeight: 30,
    title: 'Deliveries Completed',
    imgAlt: 'Vehicle',
    subtitle: 'Received Money',
    imgSrc: '/images/cards/Tick.png',
    numbers: 300,
    measurementUnit: ''
  },
  {
    imgWidth: 30,
    imgHeight: 19,
    title: 'In Transit',
    imgAlt: 'Vehicle',
    subtitle: 'Received Money',
    imgSrc: '/images/cards/transit.png',
    numbers: 190,
    measurementUnit: ''
  },
  {
    imgWidth: 30,
    imgHeight: 30,
    title: 'Scheduled',
    imgAlt: 'Vehicle',
    subtitle: 'Received Money',
    imgSrc: '/images/cards/schedule.png',
    numbers: 83,
    measurementUnit: ''
  },
  {
    imgWidth: 30,
    imgHeight: 30,
    title: 'On Time Delivery Percentage',
    imgAlt: 'Vehicle',
    subtitle: 'Received Money',
    imgSrc: '/images/cards/clock-calendar.png',
    numbers: 87,
    measurementUnit: '%'
  }
]

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
}

const StyledLink = styled('a')(() => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
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

const Notification = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 10,
  paddingTop: '5px',
  paddingBottom: '5px',
  marginBottom: '5px',
  marginTop: '5px',
  border: '0.6px solid #999999',
  borderRadius: '10px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#5616164F'
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

const CustomLink = styled('a')(() => ({
  textDecoration: 'none',
  cursor: 'pointer',
  color: 'rgba(0,0,0,0.4)',
  fontSize: '14px',
  fontWeight: '400',
  marginRight: '6px',
  '&:hover': {
    color: '#98CBE5'
  }
}))

const Home = () => {
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
          <TabButton value='1' label='Statistic Overview' />
          <TabButton value='2' label='Notifications' />
        </TabList>
        <TabPanel value='1'>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={12}>
              <>
                <Box
                  sx={{
                    height: '48px',
                    backgroundColor: '#561616',
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pl: 5,
                    pr: 5,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10
                  }}
                >
                  <Typography color={'#fff'}>Vehicle Location Monitoring</Typography>
                  <StyledLink>
                    <svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M20 0V16.5475H16.25V20.3662H0V3.81866H3.75V0H20ZM18.75 15.2746V1.27289H5V3.81866H7.5V5.09155H1.25V19.0933H15V12.7289H16.25V15.2746H18.75ZM9.18945 11.9035L8.31055 11.0085L14.1113 5.09155H10V3.81866H16.25V10.1831H15V5.99649L9.18945 11.9035Z'
                        fill='white'
                      />
                    </svg>
                  </StyledLink>
                </Box>
                <div style={{ height: '70vh', width: '100%', marginBottom: 20, position: 'relative' }}>
                  <VehicleDetails />
                  <GoogleMapReact
                    onClick={() => handleOpenModal()}
                    bootstrapURLKeys={{ key: 'AIzaSyAZiYuKJh08k7dr0aTf17vIgEwpOju_JvE' }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  ></GoogleMapReact>
                </div>
              </>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Typography sx={{ fontWeight: '400', fontSize: '14px', color: '#000' }}>Display As:</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    ml: 2
                  }}
                >
                  <CustomLink>Week</CustomLink>
                  <CustomLink>Month</CustomLink>
                  <CustomLink>Year</CustomLink>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <FleetStatisticsCard data={FleetData} />
            </Grid>
            <Grid item xs={12} md={6}>
              <DeliveriesSummaryCard data={DeliverySummary} />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel
          value='2'
          sx={theme => ({
            mx: '4px',
            [theme.breakpoints.up('xs')]: { mx: '0px' },
            [theme.breakpoints.up('sm')]: { mx: '0px' },
            [theme.breakpoints.up('md')]: { mx: '0px' }
          })}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: '600', fontSize: '16px', color: '#000' }}>Latest Notification</Typography>
            <Link href={''}>
              <a style={{ color: '#3399CC', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>
                <i>Mark All As Read</i>
              </a>
            </Link>
          </Box>
          <Box>
            <Notification sx={{ backgroundColor: '#cbb7b7', border: 0 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', mr: 10 }}>
                <Typography variant='caption' sx={{ color: '#000' }}>
                  2024-01-01
                </Typography>
                <Typography variant='caption' sx={{ color: '#000' }}>
                  09:01 PM
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '14px', color: '#000' }}>H10 - has arrived at Minna Station</Typography>
            </Notification>
            <Notification>
              <Box sx={{ display: 'flex', flexDirection: 'column', mr: 10 }}>
                <Typography variant='caption' sx={{ color: '#000' }}>
                  2024-01-01
                </Typography>
                <Typography variant='caption' sx={{ color: '#000' }}>
                  09:01 PM
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '14px', color: '#000' }}>H10 - has arrived at Minna Station</Typography>
            </Notification>
            <Notification>
              <Box sx={{ display: 'flex', flexDirection: 'column', mr: 10 }}>
                <Typography variant='caption' sx={{ color: '#000' }}>
                  2024-01-01
                </Typography>
                <Typography variant='caption' sx={{ color: '#000' }}>
                  09:01 PM
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '14px', color: '#000' }}>H10 - has arrived at Minna Station</Typography>
            </Notification>
          </Box>
        </TabPanel>
      </TabContext>
      <CusotmModalMain open={openModal} onClose={handleCloseModal} />
    </>
  )
}

export default Home
