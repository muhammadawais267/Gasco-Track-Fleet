// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import { Link } from '@mui/material'

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

const DeliveriesSummaryCard = ({ data }: any) => {
  return (
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
            pl: 2,
            pr: 2,
            height: 40
          }}
        >
          <Typography color={'#fff'}>Deliveries Summary</Typography>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='caption' color={'#fff'} sx={{ mr: 2 }}>
                3D
              </Typography>
              <Typography variant='caption' color={'#fff'} sx={{ mr: 2 }}>
                7D
              </Typography>
              <Typography variant='caption' color={'#fff'} sx={{ mr: 2 }}>
                1M
              </Typography>
              <Typography variant='caption' color={'#fff'} sx={{ mr: 2 }}>
                1Y
              </Typography>
              <Typography variant='caption' color={'#fff'} sx={{ mr: 2 }}>
                All
              </Typography>
            </Box>
            <Link href='/deliveries'>
              <IconButton size='small' aria-label='settings' className='' sx={{ color: 'text.secondary' }}>
                <svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M20 0V16.5475H16.25V20.3662H0V3.81866H3.75V0H20ZM18.75 15.2746V1.27289H5V3.81866H7.5V5.09155H1.25V19.0933H15V12.7289H16.25V15.2746H18.75ZM9.18945 11.9035L8.31055 11.0085L14.1113 5.09155H10V3.81866H16.25V10.1831H15V5.99649L9.18945 11.9035Z'
                    fill='white'
                  />
                </svg>
              </IconButton>
            </Link>
          </Box>
        </Box>
        {data.map((item: DataType, index: number) => {
          return (
            <>
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 3,
                  mt: 3,
                  pl: 5,
                  pr: 5
                }}
              >
                <img
                  alt={item.imgAlt}
                  src={item.imgSrc}
                  width={item.imgWidth}
                  height={item.imgHeight}
                  style={{ marginRight: '10px' }}
                />
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ mr: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ mb: 0.5, fontWeight: 600, fontSize: '0.875rem' }}>{item.title}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ mr: 1, fontWeight: 600 }}>{item.numbers}</Typography>
                    <Typography sx={{ mr: 1 }} variant='caption'>
                      {item.measurementUnit}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Divider />
            </>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default DeliveriesSummaryCard
