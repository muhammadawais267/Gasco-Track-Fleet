// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

// ** Data Import
import { CardContent, IconButton, TableCell, Typography, styled, tableCellClasses } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { rows } from 'src/@fake-db/table/static-data'
import PerfectScrollbar from 'react-perfect-scrollbar'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: '15px',
    textTransform: 'capitalize',
    padding: 7
  }
}))

const StyledTableRow = styled(TableRow)(() => ({
  backgroundColor: '#EDECEC',
  '&:hover': {
    backgroundColor: '#D6D6D6'
  }
}))

const TableBasicDelivery = ({ onOpen }: { onOpen: any }) => {
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
            pl: 5,
            pr: 5,
            height: 60
          }}
        >
          <Typography style={{ fontSize: '20px', color: 'rgba(255,255,255,1)' }}>Delivery Locations List</Typography>
        </Box>
        <PerfectScrollbar>
          <Box sx={{ height: '600px' }}>
            <TableContainer>
              <Table
                sx={{
                  minWidth: 700,
                  borderCollapse: 'separate',
                  borderSpacing: '0px 2px'
                }}
                aria-label='customized table'
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>#</StyledTableCell>
                    <StyledTableCell align='left'>Complete Address</StyledTableCell>
                    <StyledTableCell align='center'>City</StyledTableCell>
                    <StyledTableCell align='center'>Status</StyledTableCell>
                    <StyledTableCell align='center'>Edit</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.slice(0, 10)?.map((row: any) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell align='center'>{row.id}</StyledTableCell>
                      <StyledTableCell align='left'>
                        {/* {row.address} */}
                        Complete Address Here
                      </StyledTableCell>
                      <StyledTableCell align='center'>{row.city}</StyledTableCell>
                      <StyledTableCell align='center'>{row.status}</StyledTableCell>
                      <StyledTableCell align='center'>
                        <IconButton onClick={() => onOpen()}>
                          <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M3.5 4.33342H2.66667C2.22464 4.33342 1.80072 4.50901 1.48816 4.82158C1.17559 5.13414 1 5.55806 1 6.00009V13.5001C1 13.9421 1.17559 14.366 1.48816 14.6786C1.80072 14.9912 2.22464 15.1668 2.66667 15.1668H10.1667C10.6087 15.1668 11.0326 14.9912 11.3452 14.6786C11.6577 14.366 11.8333 13.9421 11.8333 13.5001V12.6668'
                              stroke='black'
                              strokeWidth='1.66667'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M10.9998 2.66676L13.4998 5.16676M14.654 3.98759C14.9822 3.65938 15.1666 3.21424 15.1666 2.75009C15.1666 2.28594 14.9822 1.84079 14.654 1.51259C14.3258 1.18438 13.8807 1 13.4165 1C12.9524 1 12.5072 1.18438 12.179 1.51259L5.1665 8.50009V11.0001H7.6665L14.654 3.98759Z'
                              stroke='black'
                              strokeWidth='1.66667'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </IconButton>
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
  )
}

export default TableBasicDelivery
