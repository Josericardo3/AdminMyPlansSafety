import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Alstroemeria aurea",
      img: "https://www.lifeder.com/wp-content/uploads/2020/06/Alstroemeria_aurea_%E2%80%98Orange_King_01-1-630x420.jpg",
      customer: "Jose Caicedo",
      date: "26-08-2022",
      amount: "23 seg",
      method: "Basico",
      status: "Aprobado",
    },
    {
      id: 2235235,
      product: "Geranio Sirak",
      img: "https://www.lifeder.com/wp-content/uploads/2020/06/Geranium_Sirak_Bodziszek_2019-06-01_01-1-560x420.jpg",
      customer: "Naysha Santiago",
      date: "26-08-2022",
      amount: "45 seg",
      method: "Basico",
      status: "Pendiente",
    },
    {
      id: 2342353,
      product: "Rosales silvestres",
      img: "https://www.lifeder.com/wp-content/uploads/2020/06/Flor_de_Rosa_Sisa_Tagetes_erecta_Tarapoto_Peru-1.jpg",
      customer: "Jose Caicedo",
      date: "25-08-2022",
      amount: "35 seg",
      method: "Basico",
      status: "Pendiente",
    },
    {
      id: 2357741,
      product: "Ipomoea purpurea",
      img: "https://www.lifeder.com/wp-content/uploads/2020/06/Ipomoea_purpurea_1-1-561x420.jpg",
      customer: "MIshell Gomez",
      date: "25-08-2022",
      amount: "32 seg",
      method: "Basico",
      status: "Aprobado",
    },
    {
      id: 2342355,
      product: "Jasminum",
      img: "https://www.lifeder.com/wp-content/uploads/2020/06/Jasmine_blooms-1-646x420.jpg",
      customer: "Jose Caicedo",
      date: "24-08-2022",
      amount: "29 seg",
      method: "Basico",
      status: "Pendiente",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID analisis</TableCell>
            <TableCell className="tableCell">Planta</TableCell>
            <TableCell className="tableCell">Usuario</TableCell>
            <TableCell className="tableCell">Fecha</TableCell>
            <TableCell className="tableCell">Tiempo de analisis</TableCell>
            <TableCell className="tableCell">Tipo de analisis</TableCell>
            <TableCell className="tableCell">Resultado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
