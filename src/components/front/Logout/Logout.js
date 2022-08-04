import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '989169628366-pr9cbdngihrr0mfvaqilnma5a6faea8q.apps.googleusercontent.com';

const Logout = () => {
    const onSuccess = () => {
        alert('Logout made successfully');
    }
  return (
      <div>
          <GoogleLogout
              clientId={clientId}
              buttonText='Logout'
              onLogoutSuccess={onSuccess}        
          />
          
      </div>
  )
}

export default Logout