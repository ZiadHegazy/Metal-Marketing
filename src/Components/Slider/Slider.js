import { useEffect, useState } from "react";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpeg";
import "./Slider.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export function Slider(){
    const images = [img1,img2,img3];
    const [currentImage,setCurrentImage] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(currentImage<images.length-1){
                setCurrentImage(currentImage+1)
            }else{
                setCurrentImage(0)
            }
        },3000)
        return ()=>clearInterval(interval)
    },[currentImage])

    return(
        <div className="mainDivSlider"> 
            <img style={{width:"100%",height:"100%"}} src={images[currentImage]}/>
            <div onClick={()=>{
                    if(currentImage>0){
                        setCurrentImage(currentImage-1)
                    }
                }} className="sliderarrowLeft">
                <ArrowBackIosIcon className="arrow" />
            </div>
            <div onClick={()=>{
                    if(currentImage<images.length-1){
                        setCurrentImage(currentImage+1)
                    }
                }} className="sliderarrowRight">
                <ArrowForwardIosIcon className="arrow" />
            </div>

        </div>
    )
}