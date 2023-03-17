import { useState } from "react";
import loginImg from "../assets/login.png";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (!username || !password) {
            alert("Please enter your email and password.");
            return;
          }
        const data = { username: username, password: password };
        console.log(data)
        fetch("https://engstanapi-production.up.railway.app/login", {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(data),
        })
        .then((res)=>{
            setIsLoading(false);
            console.log(res)
            if (res.ok) {
                const { token } = res.json();
                sessionStorage.setItem("token", token);
                navigate("/addproducts");
              } else {
                alert("Invalid email or password.");
              }
        })
    }

    return (
        <>
            <div className="md:flex justify-center items-center md:my-16 my-12 mx-8">
                <div className="md:w-1/3 lg:mr-16 md:mr-8">
                    <img src={loginImg} alt="" />
                </div>

                <div className="flex flex-col ">
                    <form onSubmit={handleLogin}>
                        <h1 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">
                            Login
                        </h1>
                        <div className="md:mt-4 mt-2">   
                            <label htmlFor="username">Username</label><br />
                            <input
                                type="text"
                                className="input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="md:mt-4 mt-2">
                            <label htmlFor="password">Password</label><br />
                            <input
                                type="password"
                                className="input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn bg-[#084E7A] w-full md:mt-4 mt-2">
                            {isLoading ? "Loading..." : "Login" }
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default Login;