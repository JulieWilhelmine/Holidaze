// Login Page

// imports
import React from 'react';
import App from '../App';
import Login from '../components/Login';


export default class LoginPage extends React.Component {
    
    constructor(props) {
		super(props);
		this.state = {
			isUsername: false,
            isPassword: false,
            loggedIn: false
		}
		this.parentLogin = this.parentLogin.bind(this);
        }
        
        componentDidMount(){
            localStorage.setItem('username', 'Julie');
            localStorage.setItem('password', '@1234');
        }
        
        parentLogin = (username,password) => {

		if (localStorage.getItem('username') === username && localStorage.getItem('password') === password) {
            sessionStorage.setItem('AuthToken', 'sa6d456sd6a6ad6s');
            this.setState({ loggedIn: true });
			this.props.history.push('/adminPage');
		}
		if (localStorage.getItem('username') !== username) {
			this.setState({ isUsername: 'Please enter the correct username' });
        } else {
            this.setState({ isUsername: '' });
        }
		if (localStorage.getItem('password') !== password) {
			this.setState({ isPassword: 'Please enter the correct password' });
		} else {
            this.setState({ isPassword: '' });
        }
    }


    render() {
        return (
            <div className="[ wrapper ]">
                <div className="[ row ]">
                    <div className="[ col-sm-6 ]">
                        <img src="https://images.unsplash.com/photo-1456176609386-1a154fc264ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80" className="[ sideImage ] [ sideImage--login ]" alt="hillside" />
                    </div>
                
                    <div className="[ col-sm-6 ]">
                        <h1 className="[ headline ] [ headline--login ]">Administration Login</h1>
                                <Login childLogin={this.parentLogin}
                                usernameError={this.state.isUsername}
                                passwordError={this.state.isPassword}>
                                </Login>
                    </div>
                </div>
            </div>
        );
    }
}