import { Button, Tooltip } from "antd";
import { EyeOutlined, CloseOutlined } from "@ant-design/icons";
import { useEffect } from "react";

const plantillasDoc = [
  {
    tipoDoc: "pdf",
    url: "https://coderthemes.com/highdmin/layouts/assets/images/file_icons/pdf.svg",
  },
  {
    tipoDoc: "png",
    url: "https://coderthemes.com/highdmin/layouts/assets/images/file_icons/png.svg",
  },
  {
    tipoDoc: "txt",
    url: "https://coderthemes.com/highdmin/layouts/assets/images/file_icons/txt.svg",
  },
  {
    tipoDoc: "default",
    url:  "https://www.e-title.net/images/service-agreement-01.png" 
},
 
];

function getPlantillaUrl(plantillasDoc, tipoDoc) {
    const plantilla = plantillasDoc?.find((plantilla) => plantilla.tipoDoc === tipoDoc);
    return plantilla ? plantilla.url : "";
  }

  


const fileList = [
  {
    uid: "1",
    name: "invoice_project.pdf",
    status: "done",
    size: "568.8 kb",
    
    url: getPlantillaUrl(plantillasDoc, 'pdf')
  },
  {
    uid: "2",
    name: "image.txt",
    status: "done",
    url: getPlantillaUrl(plantillasDoc, 'txt'),
    size: "1.2 mb",
  },
  {
    uid: "2",
    name: "image.txt",
    status: "done",
    size: "1.2 mb",
  },
];


const cardStyles = {
  hover: {
    boxShadow: "0px 10px 20px rgba(0, 0, 1, 0.5)",
    transition: "box-shadow 0.5s ease-in-out",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "10px",

    display: "inline-block",
    margin: "10px",
    padding: "10px",
    textAlign: "center",
    width: "150px",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
  },

  image: {
    borderRadius: "10px",
    maxWidth: "100%",
  },
  fileName: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "10px 0",
  },
};



const renderCard = (file) => {
  return (
    <div key={file.uid} style={cardStyles.container}>
      <div style={cardStyles.card}>
        <Tooltip title="Eliminar">
          <Button
            danger
            type="primary"
            shape="circle"
            icon={<CloseOutlined />}
            style={{
              position: "relative",
              top: 0,
              right: 0,
              left: "80px",
              width: "30px",
            }}
          />
        </Tooltip>
        <img
          style={cardStyles.image}
          src={
            file.url
              ? file.url
              : "https://www.e-title.net/images/service-agreement-01.png"
          }
          alt="Imagen del documento"
        />
        <p style={cardStyles.fileName}>{file.name}</p>
        <div>
          <Tooltip placement="leftTop" title="Ver">
            <Button
              type="primary"
              shape="circle"
              icon={<EyeOutlined />}
              style={{
                position: "relative",
                top: 0,
                right: 0,
                left: 0,
                width: "30px",
              }}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

const MyFiles = () => {
  const rows = [];
  for (let i = 0; i < fileList.length; i += 5) {
    rows.push(fileList.slice(i, i + 5));
  }
  const fileListMap = rows.map((row, index) => (
    <div key={index} style={{ display: "flex" }}>
      {row.map((file) => renderCard(file))}
    </div>
  ));
  return (
    <>
      <div>{fileListMap}</div>
    </>
  );
};

export default MyFiles;
