import personalPhoto from './personal.jpg';
import './Profile.css';

function Profile() {
    return (
        <div className="Profile">

            <img src={personalPhoto} className="PersonalPhoto" alt="Personal Photo"></img>

            <p> Hello, my name is Keiffer Tan! </p>
        </div>
    );
}


export default Profile;