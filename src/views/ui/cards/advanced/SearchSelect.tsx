import React, { useState } from 'react'
import Select from '@mui/material/Select'
import InputBase from '@mui/material/InputBase'
import { Box, styled } from '@mui/material'
import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem'

const SearchSelectInput = () => {
  const [selectedValue, setSelectedValue] = useState<string>('')
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false)

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value)
  }

  const handleOpen = () => {
    setDropdownOpen(true)
  }

  const handleClose = () => {
    setDropdownOpen(false)
  }

  const MenuItem = styled(MuiMenuItem)<MenuItemProps>(() => ({
    backgroundColor: '#fff',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    borderBottom: '1px solid rgba(0,0,0, 0.3)',
    display: 'flex',
    justifyContent: 'center',
    width: '150px',
    '&:last-child': {
      borderBottom: 0
    }
  }))

  return (
    <Select
      value={selectedValue}
      onChange={handleChange}
      onOpen={handleOpen}
      onClose={handleClose}
      IconComponent={() => <CustomIcon rotate={isDropdownOpen ? 180 : 0} />}
      input={
        <InputBase
          sx={{
            background: '#fff',
            borderRadius: '12px',
            fontSize: '14px',
            color: '#000',
            width: '180px',
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '2px'
          }}
          placeholder='Select Status'
          inputProps={{ 'aria-label': 'Select Status' }}
        />
      }
      displayEmpty
    >
      <MenuItem value='' disabled>
        Select Status
      </MenuItem>
      <MenuItem value='in-transit'>In Transit</MenuItem>
      <MenuItem value='online'>Online</MenuItem>
      <MenuItem value='offline'>Offline</MenuItem>
      <MenuItem value='parked'>Parked</MenuItem>
    </Select>
  )
}

const CustomIcon: React.FC<{ rotate: number }> = ({ rotate }) => {
  return (
    <Box style={{ transform: `rotate(${rotate}deg)`, transition: 'transform 0.3s' }}>
      <svg xmlns='http://www.w3.org/2000/svg' width='2em' height='2em' viewBox='0 0 24 24'>
        <path
          fill='#561616'
          fillRule='evenodd'
          d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m7.707-1.707a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L12 12.586z'
          clipRule='evenodd'
        />
      </svg>
    </Box>
  )
}

export default SearchSelectInput
