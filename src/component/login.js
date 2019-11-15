import React, { Component } from 'react';
import "../styles/login.css";
import axios from '../axios';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import { bindActionCreators } from "redux";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            objLogin:
            {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
        }
    }

    onSubmit = () => {
        axios.post("https://reqres.in/api/login", this.state.objLogin).then(res => {
            this.props.history.push("/DashBoard");
        });
    }

    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <h2 className="active"> Sign In </h2>
                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" value={this.state.objLogin.email || ''} />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" value={this.state.objLogin.password || ''} />
                    </form>
                    <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.onSubmit.bind(this)} />
                </div>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => ({
    list: state.posts.list
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);