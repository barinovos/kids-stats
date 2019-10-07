import * as React from "react"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"

interface NavProps {
  currentTab: Number
  onChangeTab: Function
}

const Nav: React.FunctionComponent<NavProps> = ({
  currentTab,
  onChangeTab
}) => (
  <BottomNavigation
    value={currentTab}
    onChange={(event, newValue) => {
      onChangeTab(newValue)
    }}
    showLabels>
    <BottomNavigationAction label='ALEX' />
    <BottomNavigationAction label='MAX' />
  </BottomNavigation>
)

export default Nav
