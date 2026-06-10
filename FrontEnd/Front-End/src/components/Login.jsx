import {useState} from 'react';
import api from '../api/axiosConfig';
import {useNavigate, Link} from 'react-router-dom';



function Login() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(" ");
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    try{
        const response = await api.post("api/auth/login", {
            email,
            password
        })
        localStorage.setItem("token",response.data.token); //saves token
        navigate("/dashboard");
    }catch{
        setError("Invalid Email or Password");
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-[450px]">

      <h2 className="text-3xl font-bold text-center mb-6">
      Login
      </h2>
        <form className="space-y-5" onSubmit={handleLogin}>
            <div>
                <label className="block mb-2 font-medium" htmlFor='email'>Email</label>
                <input 
                    id= "email"
                    type= "email"
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    autoComplete= "email"
                    placeholder= "Enter your email"    
                />
            </div>

            <div>
                <label className="block mb-2 font-medium" htmlFor="password">Password</label>
                <input 
                    id="password"
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    type= "password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    autoComplete= "currentpassword"
                    placeholder= "Enter your password"
                />
            </div>

                {error && <p className="text-red-600 text-center">{error}</p>}
                <button type="submit" className="w-full bg-blue-600 text-white py-3 mt-2 rounded-lg hover:bg-blue-700">
                    Login
                </button>

                <div className="text-right">
                    <Link to="/forgot-password" className="text-blue-600 hover:underline">
                       Forgot Password?
                    </Link>
                </div>
        </form>
      </div>
    </div>
  )
}

export default Login