import React, { Component } from 'react'
import { render } from '@testing-library/react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';

//teste commit

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
              username:'',
              password:''
    };

      this.handleChange = this.handleChange.bind(this);
      this.handlePass = this.handlePass.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
      this.responseGoogle = this.responseGoogle.bind(this);
      
    }
  
    handleChange(event) {
      this.setState({username : event.target.value });
    }
  
    handlePass(event) {
        this.setState({password : event.target.value});
      }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    submitHandler () {

        // axios.get('http://localhost:1337/Home',
        // {
        // })
        //     .then(response => {
        //         console.log(response)
        //         console.log( "Requisição realizada com sucesso")
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         console.log('Erro = ' +  error)
        //     })
        console.log('username = ' + this.state.username + ' password = ' + this.state.password )
    }


    changePwdType = () => {
        let newState;
        if (this.state.password) {
          newState = {
            icEye: "visibility",
            password: false
          };
        } else {
          newState = {
            icEye: "visibility-off",
            password: true
          };
        }
    }

    responseGoogle = (response) => {
      console.log(response);
    }
        

render(){
    return(
        <body>
            <div>
                
                <header>
                    <div class="container">
                    </div>
                </header>

                <div class="spaceHead"></div>
                    
                    <div class="login-container">
                        
                        <div class= "login_newUser">
                            <div class="lineRight">
                                <h2>login</h2>

                                <input class="inputLogin"
                                type="text"
                                placeholder="USERNAME OR E-MAIL"
                                value={this.state.username}
                                onChange={this.handleChange}>
                                </input>
                            </div>

                            <div class="divSpaceLogin"></div>

                            <div class="lineRight">
                                <input class="inputLogin" 
                                type="password"
                                placeholder="PASSWORD"
                                value={this.state.password}
                                onChange={this.handlePass}>
                                </input>
                            </div>

                            <div class="lineRight">
                                <button class="btnLogin" onClick={this.submitHandler} type="submit"> Login </button>
                            </div>


                        </div>

                            <div></div>

                        <div class="login_newUser">
                          <h2>Create a New 
                              Account
                          </h2>

                          <div class="new-account-img">
                                <img src="./src/img/newuser.svg" alt="New Arduino User"></img>
                          </div>
                            
                          <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                          />


                        </div>
                    </div> 

            </div>
        </body>

        );
    }
}

export default Login;