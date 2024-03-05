// ** Icon imports
import ViewDashboard from 'mdi-material-ui/ViewDashboard'
import Truck from 'mdi-material-ui/Truck'
import Cart from 'mdi-material-ui/Cart'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboards',
      icon: ViewDashboard,
      path: '/'
    },
    {
      title: 'Fleet',
      icon: Truck,
      path: '/fleet'
    },
    {
      title: 'Deliveries',
      icon: Cart,
      path: '/deliveries'
    }
  ]
}

export default navigation
