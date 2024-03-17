
import { useImmer } from 'use-immer'

const UserProfileWithImmer = () => {
  
    const [userProfile, setUserProfile] = useImmer({
        name: 'Keiffer',
        email: 'keiffer@email.com',
        contactDetails: {
            phone: '702-394-2933',
            address: '3123 address st, Seattle, WA 98103'
        },
        preferences: {
            newsletter: false,
            notifications: true
        }
    });
  
    const updateContactDetails = () => {
        // Get the new phone and address from the inputs
        const newPhone = document.getElementById('phoneNum').value;
        const newAddress = document.getElementById('address').value;
        // Use setUserProfile to update the state immutably
        setUserProfile(draft => {
            draft.contactDetails.phone = newPhone;
            draft.contactDetails.address = newAddress;
        });

    }

    const toggleNewsletterSubscription = () => {
        // Toggle the newsletter subscription flag
        setUserProfile(draft => {
            draft.preferences.newsletter = !draft.preferences.newsletter;
        });

    }
  
  
    return (
    <div>
        <div>
            <p>Phone Number: <input id='phoneNum'></input></p>
            <p>Address: <input id='address'></input></p>
            <button onClick={updateContactDetails}>Update Contact Information</button>
        </div>
        <button onClick={toggleNewsletterSubscription}>Toggle Newsletter Subscription</button>
        
        <p>name: {userProfile.name}</p>
        <p>email: {userProfile.email}</p>
        <p>phone: {userProfile.contactDetails.phone}</p>
        <p>address: {userProfile.contactDetails.address}</p>
        <p>preferences:</p>
        <ul>
            <li>newsletter: {userProfile.preferences.newsletter.toString()}</li>
            <li>notifications: {userProfile.preferences.notifications.toString()}</li>
        </ul>
        {/* <p>preferences: newsletter:{userProfile.preferences.newsletter}, notifications:{userProfile.preferences.notifications}</p> */}
    </div>
  )
}

export default UserProfileWithImmer