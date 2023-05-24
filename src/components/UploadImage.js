import React from "react";
import { useEffect,useState,useRef } from "react";
import Icon from "./Icon";
import {BiCloudUpload} from "react-icons/bi"
import Tooltip from "./Button/Tooltip";
import { Form } from "react-router-dom";

const UploadImages = ({onsubmit}) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    event.preventDefault()
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  return (
    <form onSubmit={onsubmit} className = "">
      <div className="flex flex-wrap space-x-2 ">
        {selectedImages &&
          selectedImages.map((image, index) => {
            return (
              <div key={image} className="p-2">
                <img className="md:w-32 w-20
                 h-20 object-cover rounded md:h-36" src={image} alt="upload" />
                <button className="bg-red-500 
                px-2 mt-1 py-1 text-[10px] md:text-[14px] rounded shadow-sm text-white "
                 onClick={() => deleteHandler(image)}>
                  Delete
                </button>
              </div>
            );
          })}
      </div>
<hr className="border-1 border-gray-200"></hr>
<div className="flex justify-between items-center py-2 ">


      <label>
        <input className="hidden"
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
        <span className="bg-gray-100 flex border-[1px] border-dashed border-gray-200 
        px-2 py-1.5 rounded text-gray-900
         text-[14px] font-medium space-x-1 cursor-pointer">
              <Icon name={<BiCloudUpload/>} Size="1.2rem" color="#11221d"></Icon>
            <div className="flex flex-shrink-0">
            Choose the File
            </div>
          
        </span>
      </label>
      {selectedImages.length > 0 &&
        (selectedImages.length > 10 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 10} </b> of them{" "}
            </span>
          </p>
        ) : (
            <Tooltip right={true} tooltip="Are your Sure ?">
          <button
            className="bg-purple-900 
            px-3 py-2 rounded text-white text-[14px] font-medium" 
            onClick={() => {
            alert(selectedImages)
            }}
          >
            Submit {selectedImages.length} file
            {selectedImages.length === 1 ? "" : "s"}
          </button>
          </Tooltip>
        ))} 
</div>
    </form>
  );
};


  export default UploadImages