export const plantColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "plant",
    headerName: "Nombre cientifico",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.nombre}
        </div>
      );
    },
  },
  {
    field: "estado",
    headerName: "Estado",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.estado}`}>
          {params.row.estado}
        </div>
      );
    },
  },
];

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Usuario",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Edad",
    width: 100,
  },
  {
    field: "status",
    headerName: "Estado",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Activo ",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "Inactivo",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "Pendiente",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "Activo",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "Inactivo",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "Activo",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "Inactivo",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "Activo",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Pendiente",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "Activo",
    age: 65,
  },
];
export const plantRows = [
  {
    id: 1,
    nombre: "Alstroemeria aurea",
    img: "https://www.lifeder.com/wp-content/uploads/2020/06/Alstroemeria_aurea_%E2%80%98Orange_King_01-1-630x420.jpg",
    estado: "active",
    Descripción: "",
  },
  {
    id: 2,
    nombre: "Geranio Sirak",
    img: "https://www.lifeder.com/wp-content/uploads/2020/06/Geranium_Sirak_Bodziszek_2019-06-01_01-1-560x420.jpg",
    estado: "active",
    Descripción: "",
  },
  {
    id: 3,
    nombre: "Ipomoea purpurea",
    img: "https://www.lifeder.com/wp-content/uploads/2020/06/Ipomoea_purpurea_1-1-561x420.jpg",
    estado: "active",
    Descripción: "",
  },
  {
    id: 4,
    nombre: "Jasminum",
    img: "https://www.lifeder.com/wp-content/uploads/2020/06/Jasmine_blooms-1-646x420.jpg",
    estado: "active",
    Descripción: "",
  },
  {
    id: 5,
    nombre: "Begonia",
    img: "https://www.lifeder.com/wp-content/uploads/2020/06/Mendocino_Coast_Botanical_Gardens_-_2021-08-23_-_Sarah_Stierch_12-1-560x420.jpg",
    estado: "active",
    Descripción: "",
  }
];
