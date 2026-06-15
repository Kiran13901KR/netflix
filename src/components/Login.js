import { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const formTitle = isSignUp ? 'Sign Up' : 'Sign In';

    const handleSignUp = () => {
        setIsSignUp(true);
    };
    return (
        <div>
            <Header />
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8027eb3f-343a-499d-9892-e683c12e3cb1/web/IN-en-20260608-TRIFECTA-perspective_d70af879-e407-4aee-8615-4c82210065d5_large.jpg" alt="Netflix Logo" />
            <div className="login-form">
                <form>
                    <h1>{formTitle}</h1>

                    {isSignUp && (
                        <div className="input-container">
                            <input type="text" placeholder="First Name" className="Input-field" />
                            <input type="text" placeholder="Last Name" className="Input-field" />
                        </div>
                    )}

                    <div className="input-container">
                        <input type="text" placeholder="Email Id" className="Input-field" />
                        <input type="password" placeholder="Password" className="Input-field" />
                        <button type="button" className="login-button">{formTitle}</button>
                    </div>
                    <div>
                        <p>
                            {
                                isSignUp ? 'Already have an account?' : 'New to Netflix?'
                            }

                            <span className="sign-up-link" onClick={handleSignUp}>

                                {
                                    isSignUp ? 'Sign In ' : 'Sign up now.'
                                }
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Login;