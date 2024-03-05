// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import MenuIcon from 'mdi-material-ui/Menu'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import Autocomplete from 'src/layouts/components/Autocomplete'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'
import NotificationDropdown from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import { Typography } from '@mui/material'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props
  console.log('hidden: ' + hidden)

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
          {hidden ? (
            <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
              <MenuIcon />
            </IconButton>
          ) : null}
          <Typography>2024-01-01 - 09 : 01 PM</Typography>
          {/* <Autocomplete hidden={hidden} settings={settings} /> */}
        </Box>
        <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <LanguageDropdown settings={settings} saveSettings={saveSettings} /> */}
          {/* <ModeToggler settings={settings} saveSettings={saveSettings} /> */}
          <NotificationDropdown settings={settings} />
          <UserDropdown settings={settings} />
        </Box>
      </Box>
      {/* <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}></Box> */}
    </>
  )
}

export default AppBarContent
