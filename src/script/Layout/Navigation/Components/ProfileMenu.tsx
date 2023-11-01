import ProfileImage from "../../../Components/Image/ProfileImage"
import LogoutHandler from "../../../Handler/LogoutHandler"
import ProfileHandler from "../../../Handler/ProfileHandler"



export default function ProfileMenu () {
    // Get Profile Image
    const Image = ProfileImage()
    



    //<a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    return (
        <div className="dropdown">
            <div  className="rounded-circle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={Image} className="rounded-circle" alt="" style={{width:'20px', height: '20px'}}/>
            </div>
                  
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                    <button className="dropdown-item" onClick={()=> ProfileHandler}>Profile</button>
                </li>
                <li>
                    <button className="dropdown-item" type="button" onClick={()=> LogoutHandler}>Logout</button>
                </li>
            </ul>
    </div> 
    )
} 