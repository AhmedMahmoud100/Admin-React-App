import './New.scss'
import { useState } from 'react';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
export default function New({ inputs, title }: any) {
  const [file, setFile] = useState<any>("");

  return (
    <div className="new">
      <h2 className='shadow'>{title}</h2>
      <section className="main-section shadow">
        <div className="top">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
          <div className="uploadInput">
            <label htmlFor="file" className='fileLabel'>
              Image: <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
            <input
              type="file"
              id="file"
              onChange={(e) => {

                if (e.target.files != null) {
                  setFile(e.target.files[0])
                }
              }
              }

              style={{ display: "none" }}
            />
          </div>
        </div>

        <form className='bottom'>
          {inputs.map((input: any) => (
            <div className="formInput" key={input.id}>
              <label>{input.label}</label>
              <input type={input.type} placeholder={input.placeholder} />
            </div>
          ))}

          <button>Send</button>


        </form>

      </section>
    </div>

  );
}
