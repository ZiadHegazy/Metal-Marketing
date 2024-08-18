import { Typography } from "@mui/material"
import "./Navbar.css"
import logo from "./logo.png"
export function Navbar(props){


    return (
        <div className="mainDivNav">
            <div className="logoNav">
                <img src={logo}/>
                <label className="mainLogoLabel">  مسبك <label className="orangeLogoLabel"> الوفاء</label> لتشكيل المعادن </label>
            </div>

            <div className="navLinks">

                <div className={props.selected==0? "navItemSelected":"navItem"}> <a className={props.selected==0? "navItemSelected":"navItema" } href="/">الرئيسية</a></div>
                
                <div className={props.selected==1? "navItemSelected":"navItem"}> <a className={props.selected==1? "navItemSelected":"navItema" } href="/about">عن الشركة</a></div>
                <div className={props.selected==2? "navItemSelected":"navItem"}><a className={props.selected==2? "navItemSelected":"navItema" } href="/services">الخدمات</a></div>
                

            </div>
        </div>
    )
}