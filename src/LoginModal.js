import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ show, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleMode = () => {
        setIsLogin(!isLogin);
    };

    if (!show) {
        return null;
    }

    return (
        <div className="login-modal">
            <div className="login-modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className="login-header">
                    <div className="user-icon">
                        <i className="fa fa-user-circle"></i>
                    </div>
                    <h2>{isLogin ? 'Login' : 'Register'}</h2>
                </div>
                <form>
                    <div className="form-group">
                        <i className="fa fa-envelope icon"></i>
                        <input type="email" placeholder="Email ID" required />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-lock icon"></i>
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="form-options">
                        <div>
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>
                    <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
                </form>
                <p onClick={toggleMode}>
                    {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
                </p>
            </div>
        </div>
    );
};

export default LoginModal;
