import './New.scss'
import { useState } from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/NavBar/NavBar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
export default function New({inputs,title} : any) {
  const [file, setFile] = useState<any>("");

  return (
    <div className="new">
      <SideBar/>
      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => {

                    if(e.target.files != null){
                      setFile(e.target.files[0])}
                    }
                  }
                  
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input : any) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
