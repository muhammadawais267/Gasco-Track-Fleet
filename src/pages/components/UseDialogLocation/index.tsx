import Box from '@mui/material/Box'
import Button, { ButtonProps } from '@mui/material/Button'

import { styled } from '@mui/material/styles'
import SearchSimple from './SearchSimple'

export const rows = [
  {
    id: 1,
    number_plate: 'TSL317AH',
    city: 'City Name',
    status: 'Enabled'
  },
  {
    id: 7,
    number_plate: 'TSL317AH',
    city: 'City Name',
    status: 'Enabled'
  },
  {
    id: 11,
    number_plate: 'TSL317AH',
    city: 'City Name',
    status: 'Disabled'
  },
  {
    id: 3,
    number_plate: 'TSL317AH',
    city: 'City Name',
    status: 'Enabled'
  }
]

const DialogButton = styled(Button)<ButtonProps>(({}) => ({
  backgroundColor: '#561616',
  borderRadius: '50px',
  '&:hover': {
    backgroundColor: '#561616'
  }
}))

const UseDialogLocation = () => {
  return (
    <Box sx={{ position: 'absolute', left: 10, top: 10, zIndex: 1001 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Box sx={{ mx: 2.5 }}>
          <SearchSimple />
        </Box>

        <DialogButton
          sx={{ fontSize: '14px', fontWeight: '500', color: '#fff', px: 8, textTransform: 'capitalize' }}
          onClick={() => console.log('location')}
        >
          Use Location
        </DialogButton>
      </Box>
    </Box>
  )
}

export default UseDialogLocation
