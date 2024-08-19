import Maps from "../Maps/Maps"
import { Navbar } from "../Navbar/Navbar"
import { ProductPopups } from "../ProductPopups/ProductPopups"
import { Slider } from "../Slider/Slider"
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./ItemPage.css"
import items from "./items.js"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Divider } from "@mui/material";
export function ItemPage(){
    const location=useLocation()
    const id=location.state
    const details = items[id-1]
    const [currentImage,setCurrentImage] = useState(0);
    console.log(details)
    return (
        <div className="bigDiv4">

        
        <Navbar selected={2} />
        
        <div className="maindivItemPage">
            <div className="ItemMainDiv">
                <div className="Gallery">
                    <img style={{width:"100%",height:"70%"}} src={details.images[currentImage]}/>

                </div>
                <Divider orientation="vertical" flexItem />
                <div className="specifications">
                    <h2>المواصفات</h2>
                    <table style={{width:"70%",fontSize:"1.2rem"}}>
                        <tr>
                            <td>{details.material}</td>
                            <td> :الخامة</td>
                        </tr>
                        
                        <tr>
                            <td>{details.coating}</td>
                            <td> :الدهان</td>
                        </tr>

                    </table>

                </div>
            </div>
            <div className="semilarProducts">
                <h2>منتجات مشابهة</h2>
                <div className="semilarProductsGallery">

                    {details.images.map((image,index)=><div className="semilarItem">
                        <img style={{width:"90%",height:"90%",objectFit:"cover"}} src={image}/>

                    </div>)}

                    </div>

                </div>

            <br></br>
            <div style={{display: "flex",flexDirection:"row",marginTop:"5vh"}}>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100054567963829"><FacebookIcon style={{fontSize:"2rem",color:"#3b5998"}}/></a>
                <a target="_blank" href="https://www.google.com/maps/place/30%C2%B016'18.5%22N+31%C2%B047'03.1%22E/@30.2718105,31.7816296,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.2718105!4d31.7842045?hl=en&entry=ttu"><LocationOnIcon style={{fontSize:"2rem",color:"green"}}/></a>
            </div>

            
        </div>
        </div>
    )
}