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

const FleetStatisticsCard = ({ data }: any) => {
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
          <Typography color={'#fff'}>Fleet Statistics</Typography>
          <Box>
            <Link href='/fleet'>
              <IconButton size='small' aria-label='settings' className='' sx={{ color: 'text.secondary' }}>
                <svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M20 0V16.5475H16.25V20.3662H0V3.81866H3.75V0H20ZM18.75 15.2746V1.27289H5V3.81866H7.5V5.09155H1.25V19.0933H15V12.7289H16.25V15.2746H18.75ZM9.18945 11.9035L8.31055 11.0085L14.1113 5.09155H10V3.81866H16.25V10.1831H15V5.99649L9.18945 11.9035Z'
                    fill='white'
                  />
                </svg>
              </IconButton>
            </Link>
            <IconButton size='small' aria-label='settings' className='' sx={{ color: 'text.secondary' }}>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17.7668 10.3018C17.7668 10.0876 17.8519 9.88218 18.0033 9.73073C18.1548 9.57928 18.3602 9.4942 18.5744 9.4942C18.7885 9.4942 18.9939 9.57928 19.1454 9.73073C19.2969 9.88218 19.3819 10.0876 19.3819 10.3018V19.1852C19.3819 19.3993 19.2969 19.6048 19.1454 19.7562C18.9939 19.9077 18.7885 19.9927 18.5744 19.9927H0.807581C0.593397 19.9927 0.387986 19.9077 0.236535 19.7562C0.0850843 19.6048 0 19.3993 0 19.1852V1.41839C0 1.20421 0.0850843 0.998795 0.236535 0.847344C0.387986 0.695894 0.593397 0.610809 0.807581 0.610809H9.69097C9.90515 0.610809 10.1106 0.695894 10.262 0.847344C10.4135 0.998795 10.4985 1.20421 10.4985 1.41839C10.4985 1.63257 10.4135 1.83798 10.262 1.98944C10.1106 2.14089 9.90515 2.22597 9.69097 2.22597H1.61516V18.3776H17.7668V10.3018Z'
                  fill='white'
                />
                <path
                  d='M8.62976 11.3678L9.96227 11.1772L18.1479 2.99318C18.225 2.91869 18.2866 2.82958 18.3289 2.73105C18.3712 2.63252 18.3935 2.52655 18.3944 2.41932C18.3954 2.31209 18.3749 2.20575 18.3343 2.1065C18.2937 2.00725 18.2337 1.91708 18.1579 1.84126C18.0821 1.76543 17.9919 1.70546 17.8927 1.66486C17.7934 1.62425 17.6871 1.60382 17.5799 1.60475C17.4726 1.60568 17.3667 1.62796 17.2681 1.67029C17.1696 1.71261 17.0805 1.77413 17.006 1.85126L8.81874 10.0353L8.62815 11.3678H8.62976ZM19.2898 0.707731C19.515 0.932723 19.6936 1.19987 19.8154 1.49392C19.9373 1.78796 20 2.10313 20 2.42142C20 2.73971 19.9373 3.05488 19.8154 3.34892C19.6936 3.64296 19.515 3.91011 19.2898 4.1351L10.9152 12.5097C10.7917 12.6337 10.6313 12.7142 10.4581 12.7391L7.79311 13.1202C7.66891 13.1381 7.54226 13.1267 7.42321 13.0871C7.30416 13.0475 7.19599 12.9806 7.10726 12.8919C7.01854 12.8032 6.95171 12.695 6.91208 12.576C6.87244 12.4569 6.86109 12.3303 6.87893 12.2061L7.26011 9.54105C7.28458 9.36806 7.36449 9.20768 7.48785 9.08396L15.8641 0.709346C16.3184 0.255152 16.9345 0 17.5769 0C18.2194 0 18.8355 0.255152 19.2898 0.709346V0.707731Z'
                  fill='white'
                />
              </svg>
            </IconButton>
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

export default FleetStatisticsCard
