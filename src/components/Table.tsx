import * as React from "react"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    table: {
      minWidth: 350
    }
  })
)

function createData(
  food: string,
  temp: string = "37.0",
  uri: boolean,
  stuhl: boolean
) {
  return {
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString().slice(0, -3),
    food,
    temp,
    uri,
    stuhl
  }
}

const rows = [
  createData("B 15 min + 50ml", "37", true, false),
  createData("55ml", null, true, false),
  createData("B 30min + 35ml", "37", true, true),
  createData("B 10min + 20ml", "37", true, false),
  createData("45ml", "37", true, false)
]

export default function SimpleTable() {
  const classes = useStyles({})

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Food</TableCell>
            <TableCell>Temp</TableCell>
            <TableCell>Uri/Stuhl</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell component='th' scope='row'>
                {row.date}
              </TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.food}</TableCell>
              <TableCell>{row.temp}</TableCell>
              <TableCell>
                {row.uri ? "Uri " : " "}
                {row.stuhl ? "Stuhl" : ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}
