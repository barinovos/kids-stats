import * as React from "react"
import { Container, Box, Button, Theme } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/styles"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import Nav from "./components/Nav"
import Table from "./components/Table"
import Drawer from "./components/Drawer"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      padding: "0"
    }
  })
)

const App = () => {
  const [currentTab, changeTab] = React.useState(0)
  const classes = useStyles({})

  return (
    <Container fixed className={classes.root}>
      <Drawer>
        <Box>
          <Table />
          <Fab color='primary' aria-label='add'>
            <AddIcon />
          </Fab>
        </Box>
      </Drawer>
      <Nav currentTab={currentTab} onChangeTab={changeTab} />
    </Container>
  )
}

export default App
