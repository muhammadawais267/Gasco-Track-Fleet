// ** React Imports
import { useState, SyntheticEvent, Fragment, ReactNode } from 'react'

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { styled, Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiMenu, { MenuProps } from '@mui/material/Menu'
import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Icons Imports
import BellOutline from 'mdi-material-ui/BellOutline'

// ** Third Party Components
import PerfectScrollbarComponent from 'react-perfect-scrollbar'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Type Imports
import { Settings } from 'src/@core/context/settingsContext'
import { CustomAvatarProps } from 'src/@core/components/mui/avatar/types'

interface Props {
  settings: Settings
}

// ** Styled Menu component
const Menu = styled(MuiMenu)<MenuProps>(({ theme }) => ({
  '& .MuiMenu-paper': {
    width: 380,
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
    borderBottomRightRadius: '12px',
    borderTopRightRadius: '0px',
    overflow: 'hidden',
    marginTop: '-8px',
    marginLeft: '-8px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    cursor: 'pointer'
  },
  '& .MuiMenu-list': {
    padding: 0
  }
}))

const Notification = styled(Box)<BoxProps>(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 10,
  height: '60px',
  border: '0.6px solid #999999',
  borderRadius: '10px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#5616164F',
    color: '#000'
  }
}))

// ** Styled MenuItem component
const MenuItem = styled(MuiMenuItem)<MenuItemProps>(() => ({
  paddingTop: 0.5,
  paddingBottom: 0.5,
  paddingLeft: '8px',
  paddingRight: '8px',
  backgroundColor: '#fff',
  fontSize: '14px',
  fontWeight: '500',
  border: 0,
  cursor: 'default'
}))

const styles = {
  maxHeight: 349,
  '& .MuiMenuItem-root:last-of-type': {
    border: 0
  }
}

// ** Styled PerfectScrollbar component
const PerfectScrollbar = styled(PerfectScrollbarComponent)({
  ...styles
})

// ** Styled Avatar component
const Avatar = styled(CustomAvatar)<CustomAvatarProps>({
  width: '2.375rem',
  height: '2.375rem',
  fontSize: '1.125rem'
})

// ** Styled component for the title in MenuItems
const MenuItemTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  flex: '1 1 100%',
  overflow: 'hidden',
  fontSize: '0.875rem',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  marginBottom: theme.spacing(0.75)
}))

// ** Styled component for the subtitle in MenuItems
const MenuItemSubtitle = styled(Typography)<TypographyProps>({
  flex: '1 1 100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
})

const NotificationDropdown = (props: Props) => {
  // ** Props
  const { settings } = props

  // ** States
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(null)

  // ** Hook
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  // ** Vars
  const { direction } = settings

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleDropdownClose = () => {
    setAnchorEl(null)
  }

  const ScrollWrapper = ({ children }: { children: ReactNode }) => {
    if (hidden) {
      return <Box sx={{ ...styles, overflowY: 'auto', overflowX: 'hidden' }}>{children}</Box>
    } else {
      return (
        <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }}>{children}</PerfectScrollbar>
      )
    }
  }

  return (
    <Fragment>
      <IconButton color='inherit' aria-haspopup='true' onClick={handleDropdownOpen} aria-controls='customized-menu'>
        <BellOutline />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: direction === 'ltr' ? 'right' : 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: direction === 'ltr' ? 'right' : 'left' }}
      >
        <MenuItem disableRipple>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Typography sx={{ fontWeight: 600 }}>Notifications</Typography>
          </Box>
        </MenuItem>
        <ScrollWrapper>
          <Box sx={{ mb: '8px' }}>
            <MenuItem onClick={handleDropdownClose}>
              <Box sx={{ width: '100%', mt: 1.5, display: 'flex', alignItems: 'center' }}>
                <Notification sx={{ backgroundColor: '#cbb7b7' }}>
                  <Typography sx={{ fontSize: '14px', color: '#000' }}>H10 - has arrived at Minna Station</Typography>
                </Notification>
              </Box>
            </MenuItem>
            <MenuItem onClick={handleDropdownClose}>
              <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <Notification>
                  <Typography sx={{ fontSize: '14px', color: '#000' }}>H10 - has arrived at Minna Station</Typography>
                </Notification>
              </Box>
            </MenuItem>
            <MenuItem onClick={handleDropdownClose}>
              <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <Notification>
                  <Typography sx={{ fontSize: '14px', color: '#000' }}>H10 - has arrived at Minna Station</Typography>
                </Notification>
              </Box>
            </MenuItem>
            <MenuItem onClick={handleDropdownClose}>
              <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <Notification>
                  <Typography sx={{ fontSize: '14px', color: '#000' }}>H10 - has arrived at Minna Station</Typography>
                </Notification>
              </Box>
            </MenuItem>
          </Box>
        </ScrollWrapper>
      </Menu>
    </Fragment>
  )
}

export default NotificationDropdown
