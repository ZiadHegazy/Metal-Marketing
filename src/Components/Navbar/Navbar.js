import { Typography } from "@mui/material"
import "./Navbar.css"
import logo from "./logo.png"
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
export function Navbar(props){
    const [list,isList] = useState(false);
    const isMobile = useMediaQuery("(max-width: 600px)");
    return (
        <div className="mainDivNav">
            <div className="logoNav">
                <img src={logo}/>
                <label className="mainLogoLabel">  مسبك <label className="orangeLogoLabel"> الوفاء</label> لتشكيل المعادن </label>
            </div>
            

             { isMobile &&
                    
                        <div className="navLinksMobileList">
                        <a >                                الرئيسية</a>
                        <a >                                عن الشركة</a>
                        <a >                                الخدمات</a>
                    </div>
                    
            } 
            {
                
                !isMobile &&
                // Code for PC view
                
                    <div className="navLinks">
                        <div className={props.selected == 0 ? "navItemSelected" : "navItem"}>
                            <a className={props.selected == 0 ? "navItemSelected" : "navItema"} href="/">
                                الرئيسية
                            </a>
                        </div>

                        <div className={props.selected == 1 ? "navItemSelected" : "navItem"}>
                            <a className={props.selected == 1 ? "navItemSelected" : "navItema"} href="/about">
                                عن الشركة
                            </a>
                        </div>
                        <div className={props.selected == 2 ? "navItemSelected" : "navItem"}>
                            <a className={props.selected == 2 ? "navItemSelected" : "navItema"} href="/services">
                                الخدمات
                            </a>
                        </div>
                    </div>
                
            }
            {/* <div className="navLinks">

                <div className={props.selected==0? "navItemSelected":"navItem"}> <a className={props.selected==0? "navItemSelected":"navItema" } href="/">الرئيسية</a></div>
                
                <div className={props.selected==1? "navItemSelected":"navItem"}> <a className={props.selected==1? "navItemSelected":"navItema" } href="/about">عن الشركة</a></div>
                <div className={props.selected==2? "navItemSelected":"navItem"}><a className={props.selected==2? "navItemSelected":"navItema" } href="/services">الخدمات</a></div>
                

            </div> */}
        </div>
    )
}