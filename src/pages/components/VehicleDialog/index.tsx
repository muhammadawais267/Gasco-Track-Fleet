import { Checkbox, IconButton, TableCell, tableCellClasses } from '@mui/material'
import Box from '@mui/material/Box'
import Button, { ButtonProps } from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Slide, { SlideProps } from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import { ReactElement, Ref, forwardRef, useState } from 'react'

import { styled } from '@mui/material/styles'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import PerfectScrollbar from 'react-perfect-scrollbar'
import SearchVehicle from 'src/views/ui/cards/advanced/SearchVehicle'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: theme.palette.common.black,
    fontSize: '15px',
    textTransform: 'capitalize',
    padding: 7,
    '&:first-child': {
      borderTopLeftRadius: '12px',
      borderBottomLeftRadius: '12px'
    },
    '&:last-child': {
      borderTopRightRadius: '12px',
      borderBottomRightRadius: '12px'
    }
  }
}))

const StyledTableRow = styled(TableRow)(() => ({
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#D6D6D6'
  }
}))

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

const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})
const DialogButton = styled(Button)<ButtonProps>(({}) => ({
  backgroundColor: '#561616',
  borderRadius: '50px',
  '&:hover': {
    backgroundColor: '#561616'
  }
}))

const VehicleDetails = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const [selectedRows, setSelectedRows] = useState<number[]>([])

  const handleRowSelection = (event: React.MouseEvent<unknown>, row: any) => {
    const selectedIndex = selectedRows.indexOf(row.id)
    const newSelected = [...selectedRows]

    if (selectedIndex === -1) {
      newSelected.push(row.id)
    } else {
      newSelected.splice(selectedIndex, 1)
    }

    setSelectedRows(newSelected)
  }

  const isSelected = (id: any) => selectedRows.indexOf(id) !== -1

  return (
    <Box sx={{ position: 'absolute', right: 10, top: 10, zIndex: 1001 }}>
      <DialogButton variant='contained' onClick={handleClickOpen}>
        Select Trucks To Monitor
      </DialogButton>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        TransitionComponent={Transition}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
        maxWidth={'sm'}
        fullWidth={true}
      >
        {/* <DialogTitle id='alert-dialog-slide-title'>Use Google's location service?</DialogTitle> */}
        <DialogContent sx={{ p: 0, overflow: 'hidden', borderRadius: '0', mb: 5, backgroundColor: 'rgba(0,0,0,0.1)' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#561616',
              borderRadius: 0,
              pl: 2,
              pr: 2,
              height: 60
            }}
          >
            <Typography sx={{ fontSize: '18px', color: '#fff', fontWeight: '500' }}>Detailed Vehicle Info</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <SearchVehicle />
              <IconButton onClick={handleClose}>
                <svg xmlns='http://www.w3.org/2000/svg' width='1.5em' height='1.5em' viewBox='0 0 24 24'>
                  <path
                    fill='#fff'
                    d='M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2m-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8z'
                  />
                </svg>
              </IconButton>
            </Box>
          </Box>
          <PerfectScrollbar>
            <Box sx={{ height: '400px' }}>
              <TableContainer>
                <Table
                  sx={{
                    minWidth: 380,
                    borderCollapse: 'separate',
                    borderSpacing: '0px 2px',
                    pl: 3,
                    pr: 3
                  }}
                  aria-label='customized table'
                >
                  <TableHead className='no-padding-head'>
                    <TableRow>
                      <StyledTableCell>#</StyledTableCell>
                      <StyledTableCell align='center'>Number Plate</StyledTableCell>
                      <StyledTableCell align='center'>Status</StyledTableCell>
                      <StyledTableCell align='center'>
                        Select All
                        <Checkbox
                          indeterminate={selectedRows.length > 0 && selectedRows.length < rows.length}
                          checked={selectedRows.length === rows.length}
                          onChange={() =>
                            setSelectedRows(selectedRows.length === rows.length ? [] : rows.map(row => row.id))
                          }
                        />
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className='no-padding-row'>
                    {rows?.slice(0, 10)?.map((row: any) => (
                      <StyledTableRow
                        key={row.id}
                        hover
                        onClick={event => handleRowSelection(event, row)}
                        role='checkbox'
                        aria-checked={isSelected(row.id)}
                        selected={isSelected(row.id)}
                      >
                        <StyledTableCell>{row.id}</StyledTableCell>
                        <StyledTableCell align='center'>{row.number_plate}</StyledTableCell>
                        <StyledTableCell align='center'>
                          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>In Transit</Typography>
                          </Box>
                        </StyledTableCell>
                        <StyledTableCell align='center'>
                          {' '}
                          <Checkbox checked={isSelected(row.id)} />
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </PerfectScrollbar>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          <Button onClick={handleClose} variant='contained' sx={{ backgroundColor: '#561616', borderRadius: '50px' }}>
            Monitor Selected Trucks
          </Button>
          {/* <Button onClick={handleClose}>Agree</Button> */}
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default VehicleDetails
