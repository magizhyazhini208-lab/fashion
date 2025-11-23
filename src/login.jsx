function Login()
{
    const login=true;
    if(login)
    {
        return( 
            <main>
                <div><h1>Login Form</h1></div>
                <form name="login" action="page2.html">
                    <div  className="align">
                        <label>User Name</label>
                        <input id="userName" type="text" name="userName" placeholder="Enter your Name" required/>
                    </div>
                    <div className="align">
                        <label>Email ID</label>
                        <input id="emailId" type="email" name="emailId" placeholder="abc@gmailcom" required/>
                        
                    </div>
                    <div className="align">
                        <label>Password</label>
                        <input id="password" type="password" name="password" placeholder="password" required/>
                    </div>
                    <div className="align">
                        <button>LogIn</button>
                    </div>
                </form>
            </main> 
        );      
    }
    else{
        return(
            <main>
                <div><h1>SignUP</h1></div>
                <form name="login" action="page2.html">
                    <div  className="align">
                        <label>User Name</label>
                        <input id="userName" type="text" name="userName" placeholder="Enter your Name" required/>
                    </div>
                    <div className="align">
                        <label>Email ID</label>
                        <input id="emailId" type="email" name="emailId" placeholder="abc@gmailcom" required/>
                        
                    </div>
                    <div className="align">
                        <label>Password</label>
                        <input id="password" type="password" name="password" placeholder="password" required/>
                    </div>
                    <div className="align">
                        <label>DOB</label>
                        <input id="dob" type="date" name="dob" placeholder="Your DOB" required/>
                    </div>
                    <div className="align">
                        <button>SignUp</button>
                    </div>
                </form>
            </main>
        );      
    }                    
}
export default Login