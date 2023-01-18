import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useAuthUser } from "react-auth-kit";

function Row(props) {
  const {row} = props;
  const [open, setOpen] = React.useState(false);
  const auth = useAuthUser();
  const user = auth();

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {row.deviceModel}
        </TableCell>
        <TableCell align="right">{row.creationDate}</TableCell>
        <TableCell align="right">{row.MAC}</TableCell>
        <TableCell align="right">{row.sensors.length}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Czujniki
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Nazwa</TableCell>
                    <TableCell>Typ</TableCell>
                    <TableCell>Jednostki</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.sensors.map((historyRow) => (
                    <TableRow key={historyRow.model}>
                      <TableCell component="th" scope="row">
                        {historyRow.model}
                      </TableCell>
                      <TableCell>{historyRow.type}</TableCell>
                      <TableCell>{historyRow.unit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const auth = useAuthUser();
  const user = auth();
    
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Model urządzenia </TableCell>
            <TableCell align="right">Data stworzenia</TableCell>
            <TableCell align="right">Adres MAC</TableCell>
            <TableCell align="right">Ilość czujników</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {auth().devices.map((device) => (
            <Row key={device.deviceModel} row={device} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}