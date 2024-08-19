import zIndex from "@mui/material/styles/zIndex";
import "./ProductPopups.css";
import breakers from "./breakers.jpeg";
import compact from "./compact.jpeg";
import partbronze from "./partbronze.jpeg";
import pumps from "./pumps.jpeg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
export function ProductPopups(){

    const images = [{image:breakers,name:"جلب كسارات"},{image:compact,name:"جلب كبس"},{image:partbronze,name:"بارت برونز"},{image:pumps,name:"جلب مضخات خرسانة"}];
    const [currentImage,setCurrentImage] = useState(0);
    const handlePopup = (i)=>{
        
        setCurrentImage(i);
        setIsOpen(true);
    }
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const Popup= ()=>{
        const popupStyles = {
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex:101,
            },
            popup: {
              width: '80%',
              height: '60%',
              position: 'relative',
            },
          };
        
            return (
              <div style={popupStyles.overlay}>
                <div style={{...popupStyles.popup,backgroundImage:`url(${images[currentImage].image})`,backgroundSize:"contain",backgroundRepeat:"no-repeat"}} >
                  {/* <img style={{width:"100%",height:"100%"}} src={images[currentImage].image} /> */}
                  <button style={{position:"absolute",top:"0px",right:"0px",cursor:"pointer"}} onClick={togglePopup}><CloseIcon/></button>
                </div>
              </div>
            );
    }
    return(
        <div className="mainDivProductPopups">

            {images.map((image,i)=>
                
                <div onClick={()=>handlePopup(i)} className="productPopup" style={{backgroundImage:`url(${image.image})`, backgroundSize: 'cover',backgroundRepeat:"no-repeat"}}>
                {/* <img style={{width:"100%",height:"100%"}} src={image.image} /> */}
                <div className="labelDivPop">
                    <label>{image.name}</label>
                    <ArrowForwardIosIcon className="arrowPopUp" style={{width:"3rem",height:"3rem"}}  />
                </div>
            </div>
            )}
            {isOpen && <Popup />}
            
        </div>
    )

}
