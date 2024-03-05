// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'

// ** Data Import
import { CardContent, IconButton, TableCell, Typography, styled, tableCellClasses } from '@mui/material'
import SearchInput from 'src/views/ui/cards/advanced/Search'
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

const CustomLink = styled('a')(() => ({
  textDecoration: 'none',
  cursor: 'pointer',
  color: 'rgba(255,255,255,0.8)',
  fontSize: '16px',
  fontWeight: '400',
  marginRight: '15px',
  '&:hover': {
    color: '#fff'
  }
}))

const TableBasic = ({ onOpen }: { onOpen: any }) => {
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
          <Typography style={{ fontSize: '20px', color: 'rgba(255,255,255,1)' }}>Vehicles List</Typography>
          <Box
            sx={theme => ({
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              [theme.breakpoints.up('xs')]: { visibility: 'hidden' },
              [theme.breakpoints.up('sm')]: { visibility: 'hidden' },
              [theme.breakpoints.up('md')]: { visibility: 'visible' }
            })}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Typography
                sx={{ fontWeight: '400', fontSize: '16px', color: 'rgba(255,255,255,0.8)', paddingRight: '5px' }}
              >
                Filter By Status:
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  ml: 2
                }}
              >
                <CustomLink style={{ color: '#fff' }}>All</CustomLink>
                <CustomLink>In Transit</CustomLink>
                <CustomLink>Parked</CustomLink>
                <CustomLink>Online</CustomLink>
                <CustomLink>Offline</CustomLink>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                ml: 8
              }}
            >
              <SearchInput />
            </Box>
          </Box>
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
                    <StyledTableCell align='center'>Number Plate</StyledTableCell>
                    <StyledTableCell align='center'>Vehicle Code</StyledTableCell>
                    <StyledTableCell align='center'>Vehicle Brand</StyledTableCell>
                    <StyledTableCell align='center'>Loading Capacity </StyledTableCell>
                    <StyledTableCell align='center'>Status</StyledTableCell>
                    <StyledTableCell align='center'>Vehicle Details</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.slice(0, 10)?.map((row: any) => (
                    <StyledTableRow key={row.id}>
                      <StyledTableCell>{row.id}</StyledTableCell>
                      <StyledTableCell align='center'>{row.number_plate}</StyledTableCell>
                      <StyledTableCell align='center'>{row.vehicle_code}</StyledTableCell>
                      <StyledTableCell align='center'>{row.vehicle_brand}</StyledTableCell>
                      <StyledTableCell align='center'>{row.loading_capacity}</StyledTableCell>
                      <StyledTableCell align='center'>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography>In Transit</Typography>
                          <Typography>
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
                          <Typography>
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
                      <StyledTableCell align='center'>
                        <span
                          onClick={() => onOpen()}
                          style={{ textDecoration: 'underline', color: '#98CBE5', fontSize: '15px', cursor: 'pointer' }}
                        >
                          View Details
                        </span>
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

export default TableBasic
