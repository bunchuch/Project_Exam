import React from "react";
import { useEffect,useState,useRef } from "react";
import Icon from "./Icon";
import {Tooltip} from "antd";
import { FcUpload } from "react-icons/fc";
import {AiOutlineDelete} from "react-icons/ai"

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
      <div className="flex flex-wrap py-2 overflow-y-auto h-52 2xl:h-80  relative  ">
        {selectedImages != null &&
          selectedImages.map((image, index) => 
              <div key={image} className="relative">
                <img className="md:w-32 w-20
                 h-20 object-cover mx-2 rounded-md md:h-[10rem]" 
                 src={image} alt="upload" />
                <button className="bg-red-500 h-7 w-7 -top-4 relative
                px-1 mt-1  text-[10px] md:text-[14px] rounded-full shadow-sm text-slate "
                 onClick={() => deleteHandler(image)}>
                  <Icon color="white" name={<AiOutlineDelete/>}/>
                </button>
              </div>
            
          )   }
<div>
<label>
        <input className="hidden"
          type="file"
          name="images"
          onChange={onSelectFile}
          multiple
          accept="image/png , image/jpeg, image/webp"
        />
        <span className="md:w-32 md:h-[10rem] h-20 w-20 bg-purple-50
         flex border-[1px] border-dashed border-gray-400 
        px-2  rounded-md text-gray-900
         text-[14px] font-medium space-x-1 cursor-pointer justify-center items-center">
          <div className="w-10 h-10">
          <Icon name={<FcUpload/>} ></Icon>
          </div>
             
           
          
        </span>
      </label>
</div>
      </div>
<div className="">
      {selectedImages.length > 0 &&
        (selectedImages.length > 5 ? (
          <p className="error">
            You can't upload more than 10 images! <br />
            <span>
              please delete <b> {selectedImages.length - 5} </b> of them{" "}
            </span>
          </p>
        ) : (
          <div className="">
            <Tooltip title="Are your Sure ?">
          <button
            className="bg-purple-900 
            px-3 py-2 rounded-full font-sans text-white text-[14px] font-medium" 
            onClick={() => {
            alert(selectedImages)
            }}
          >
            Submit {selectedImages.length} file
            {selectedImages.length === 1 ? "" : "s"}
          </button>
          </Tooltip>
          </div>
        ))} 
</div>
    </form>
  );
};


  export default UploadImages