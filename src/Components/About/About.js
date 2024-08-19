import { Navbar } from "../Navbar/Navbar";
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import image from "../Slider/img3.jpeg"
import "./About.css"
import "../Home/Home.css"
export function About(){
    return(
        <div className="bigDiv2">

        
        <Navbar selected={1} />
        
        <div className="maindivAbout">
            <div className="aboutInfo">
                <div className="aboutUs">
                    <h1>عن شركتنا</h1>
                    <img style={{width:"100%",height:"30vh",objectFit:"cover"}}  src={image}/>
                    <p>
                    شركة الوفاء لتشكيل المعادن هي شركة مصرية تعمل في مجال تشكيل المعادن وتصنيع القوالب الخاصة بالمعادن والتي تعتبر من الشركات الرائدة في هذا المجال في مصر والشرق الأوسط.
                    </p>
                     </div>
                <div className="aboutMission">
                    <h1>رسالتنا</h1>
                    <div className="countGoal">
                        
                        <p>تقديم خدمات عالية الجودة لعملائنا</p>
                        <h1>.1</h1>
                    </div>
                    <div className="countGoal">
                        
                        <p>تحقيق الرضا التام للعملاء</p>
                        <h1>.2</h1>
                    </div>
                    <div className="countGoal">
                        
                        <p>التطوير المستمر للشركة</p>
                        <h1>.3</h1>
                    </div>    
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