import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    };
  }
  onEmailChange = e => {
    this.setState({signInEmail: e.target.value});
  };
  onPasswordChange = e => {
    this.setState({signInPassword: e.target.value});
  };
  onSubmitSignIn = e => {
    fetch(`${this.props.backend}signin`, {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(res => res.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
    e.preventDefault();
  };

  render() {
    const {onRouteChange} = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center retroPattern">
        <div className="br3 ba ma4 oldie" style={{ background: 'grey'}}>
          <main className="pa3 black-80">
            <form
              onSubmit={this.onSubmitSignIn}
              method="POST"
              className="measure"
            >
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    onChange={this.onEmailChange}
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    onChange={this.onPasswordChange}
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-green grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <p
                  onClick={() => onRouteChange('register')}
                  href="#0"
                  className="f6 link dim black db pointer"
                >
                  Register
                </p>
              </div>
            </form>
          </main>
        </div>
      </article>
    );
  }
}

export default SignIn;
