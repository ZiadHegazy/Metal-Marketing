import Maps from "../Maps/Maps"
import { Navbar } from "../Navbar/Navbar"
import { ProductPopups } from "../ProductPopups/ProductPopups"
import { Slider } from "../Slider/Slider"
import "./Home.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export function Home(){
    return (
        <div className="bigDiv">

        
        <Navbar selected={0} />
        <div className="maindivHome">
            <Slider />
            
            <ProductPopups />
            <br></br>
            <div style={{display: "flex",flexDirection:"row",marginTop:"5vh"}}>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100054567963829"><FacebookIcon style={{fontSize:"2rem",color:"#3b5998"}}/></a>
                <a target="_blank" href="https://www.google.com/maps/place/30%C2%B016'18.5%22N+31%C2%B047'03.1%22E/@30.2718105,31.7816296,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.2718105!4d31.7842045?hl=en&entry=ttu"><LocationOnIcon style={{fontSize:"2rem",color:"green"}}/></a>
            </div>

            
        </div>
        </div>
    )
}