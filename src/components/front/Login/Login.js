import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { signInWithGoogle } from '../../../utils/firebase';

const clientId = '989169628366-pr9cbdngihrr0mfvaqilnma5a6faea8q.apps.googleusercontent.com';

const Login = () => {
    const onSuccess = (res) => {
        console.log('[login Success] currentUser:', res.profileObj);
    };
    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };
  return (
        <div> 
                {/* <GoogleLogin
                    clientId={clientId}
                    buttonText='Login'
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    style={{ marginTop: '100px' }}
                    isSignedIn={true}
                /> */}
            <button class="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
        </div>
  )
}

export default Login