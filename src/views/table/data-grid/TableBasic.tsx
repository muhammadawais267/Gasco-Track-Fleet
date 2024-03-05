// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { DataGrid } from '@mui/x-data-grid'

// ** Data Import
import { rows } from 'src/@fake-db/table/static-data'

const columns = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 80,
    headerName: '#'
  },
  {
    flex: 0.15,
    minWidth: 120,
    field: 'number_plate',
    headerName: 'Number Plate'
  },
  {
    flex: 0.15,
    minWidth: 120,
    field: 'vehicle_code',
    headerName: 'Vehicle Code'
  },
  {
    flex: 0.1,
    minWidth: 130,
    field: 'vehicle_brand',
    headerName: 'Vehicle Brand'
  },
  {
    flex: 0.15,
    minWidth: 80,
    field: 'loading_capacity',
    headerName: 'Loading Capacity '
  },
  {
    flex: 0.15,
    minWidth: 80,
    field: 'status',
    headerName: 'Status'
  },
  {
    flex: 0.1,
    minWidth: 120,
    field: 'vehicl_details',
    headerName: 'Vehicle Details'
  }
]

const TableBasic = () => {
  return (
    <Card>
      {/* <CardHeader title='Basic' /> */}
      <Box sx={{ height: 500 }}>
        <DataGrid columns={columns} rows={rows.slice(0, 10)} />
      </Box>
    </Card>
  )
}

export default TableBasic
