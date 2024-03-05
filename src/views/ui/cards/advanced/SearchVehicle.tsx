import { Box, IconButton, InputBase } from '@mui/material'

function SearchVehicle() {
  return (
    <Box
      style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
        color: '#000'
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, px: 2, backgroundColor: '#fff' }}
        placeholder='Search Vehicle'
        inputProps={{ 'aria-label': 'Search Vehicle' }}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 1024 1024'>
          <path
            fill='currentColor'
            d='m795.904 750.72l124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704a352 352 0 0 0 0 704'
          />
        </svg>
      </IconButton>
    </Box>
  )
}

export default SearchVehicle
