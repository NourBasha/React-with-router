import auth0 from 'auth0-js';
import history from './history';

export default class Auth {

    auth0 = new auth0.WebAuth({
        domain : 'dev-e2cbux3c.us.auth0.com',
        clientID: 'A27n0wmh5quKGyW7eDSKUYpVfPuv3TYH',
        redirectUri:'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope:'openid profile email'

    })

    login = () => {
        this.auth0.authorize();
    }

    logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expiresAt'); 
    }

    handleAuth = () => {
        this.auth0.parseHash((err,authResult) => {
            if(authResult){

                localStorage.setItem('access_token',authResult.accessToken);
                localStorage.setItem('id_token',authResult.idToken);
                let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
                localStorage.setItem('expiresAt',expiresAt);
             
                setTimeout(() => {   // called after each login or log out
                    history.replace('/authcheck')
                }, 200);

            }else{
                console.log('token is empty');
            }
        })
    }

    isAuthenticated = () => {
        let expires = JSON.parse(localStorage.getItem('expiresAt'));
        return new Date().getTime() < expires;
    }

}