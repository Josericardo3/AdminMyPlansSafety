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
    username: "Kori Xiomara",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Activo ",
    email: "Korix.01@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jose Caicedo",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Jose.caicedo1@unmsm.edu.pe",
    status: "Inactivo",
    age: 42,
  },
  {
    id: 3,
    username: "Naysha Solange",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "naysha.santiago@unmsm.edu.pe",
    status: "Pendiente",
    age: 45,
  },
  {
    id: 4,
    username: "Rafael Bojorquez",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "rafael.bojorquez@unmsm.edu.pe",
    status: "Activo",
    age: 16,
  },
  {
    id: 5,
    username: "Juan Miguel Rosas",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Juan.miguel01@gmail.com",
    status: "Inactivo",
    age: 22,
  },
  {
    id: 6,
    username: "Melisa Rosas",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Melisa.Rosas@gmail.com",
    status: "Activo",
    age: 15,
  },
  {
    id: 7,
    username: "MishellG",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "mgcavero@gmail.com",
    status: "Inactivo",
    age: 44,
  },
  {
    id: 8,
    username: "Solange",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "solange.Sant2@gmail.com",
    status: "Activo",
    age: 36,
  },
  {
    id: 9,
    username: "Roxana Maypu",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "roxana.maypu@outlook.com",
    status: "Pendiente",
    age: 65,
  },
  {
    id: 10,
    username: "Diego Mamani",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "DiegoMamaniR@gmail.com",
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
