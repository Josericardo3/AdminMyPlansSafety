import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Analisis</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"7"} strokeWidth={5} />
        </div>
        <p className="title">Analisis totales diarios</p>
        <p className="amount"></p>
        <p className="desc">
          Los analisis recientemente procesados probablemente no se muestren en el grafico
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Objetivo</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">100</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Ultima semana</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">12</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Último mes</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">34</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
