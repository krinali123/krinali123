import React from 'react';
import { useState } from 'react';
import * as yup from 'yup';

function Auth(props) {
    const[login,section]=useState('login')
    let schema = yup.object().shape({
      
        email: yup.string().email(),
       password:yup.string().password()
        })
   
    return (
        <div>
            <section className="appointment" id="appointment">
                <div className='container'>
                    {
                        login==='login'?
                        <div className="section-title">
                        <h2>login</h2>
                        </div>
                        :
                        <div className="section-title">
                        <h2>sign up</h2>
                        </div>

                    }
                    
                  
            
                    </div> 
            <form action method="post" role="form" className="php-email-form">
                <div className="row">
                    <div className="col-md-4 form-group">
                        <input type="text" name="email" className="form-control" id="email" placeholder="Your email" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                    </div>
                    <div className="col-md-4 form-group">
                        <input type="text" name="password" className="form-control" id="password" placeholder="Your password" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                        <div><button className="text-center" type="button" onClick={() => setlogin('login')}>login</button></div>
                        <div className="text-center"><button type="button" onClick={() => setlogin('sign in')}>login</button>sign in</button></div>
                    </div>
                </div>
                </form>

                </div>
                </section>
                

    );
}

export default Auth;