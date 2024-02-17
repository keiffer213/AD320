import React from 'react'

const UserProfile = ({name, email}) => {
  return (
    <div className='profile-card m-3'>
        {/* So that it is more dynamic, I added props and implemented them into the HTML */}
        <h2 className=' text-2xl m-1'>User Profile</h2>
        <img src="https://example.com/user-photo.jpg" alt="User Photo1" className="photo m-1"/>
        <p className='m-1'>Name: {name}</p>
        <p className='m-1'>Email: {email}</p>
        <a className='m-1' href={`mailto:${email}`}>Send Email</a>

        {/* <div class="profile-card">
        <h2>User Profile</h2>
        <img src="https://example.com/user-photo.jpg" alt="User Photo" class="photo"/>
        <p>Name: Jane Doe</p>
        <p>Email: jane.doe@example.com</p>
        <a href="mailto:jane.doe@example.com">Send Email</a>
        </div> */}

    </div>
  )
}



export default UserProfile;

