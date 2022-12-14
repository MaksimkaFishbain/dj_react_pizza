import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = ({isLogPageOpened, setLogPageOpened}) => {
    console.log(isLogPageOpened)
    return (
        <div className={isLogPageOpened ? "login-form" : "login-form.active"} onClick={() => setLogPageOpened(false)}>
            <form action="/login" method='post' className="signup-form" onClick={e => e.stopPropagation()}>
                <div className="form-header">
                    <h1>Log in</h1>
                </div>
                <div className="form-body">
                    <div className="horizontal-group">
                        <div className="form-group">
                            <label className="label-title">Nick name</label>
                            <input type="text" id="nickname" className="form-input" placeholder="enter your nick name" required="required" />
                        </div>
                        <div className="form-group">
                            <label className="label-title">Password</label>
                            <input type="text" id="password" className="form-input" placeholder="enter your password" required="required" />
                        </div>
                    </div>
                </div>
                <div className="form-footer">
                    <span>* All fields are required</span>
                    <div className="remember-me">
                        <input type="checkbox" name="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit" className="btn login">Log in</button>
                </div>
                <div className="redirect">
                    <p>New to out site? <Link to="/" className="">Sign up</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;