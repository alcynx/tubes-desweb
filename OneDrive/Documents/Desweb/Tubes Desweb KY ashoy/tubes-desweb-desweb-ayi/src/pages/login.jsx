import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const credentials = {
        hr: { username: 'hr_user', password: 'hr_pass' },
        employee: { username: 'employee_user', password: 'employee_pass' }
    };

    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === credentials.hr.username && password === credentials.hr.password) {
            alert("Selamat datang, HR!");
            navigate('/dashboardHR');
        } else if (username === credentials.employee.username && password === credentials.employee.password) {
            alert("Selamat datang, Karyawan!");
            navigate('/dashboardPe');
        } else {
            alert("Username atau password salah.");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-primary">
            <div className="bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-10 w-[345px] h-[450px]">
                <h2 className="text-3xl font-bold text-tertiary mb-8 text-center">LOGIN</h2>
                <form className="w-full" onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-tertiary text-sm font-light mb-2">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 rounded-lg bg-primary text-tertiary focus:outline-none"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-tertiary text-sm font-light mb-2">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 rounded-lg bg-primary text-tertiary focus:outline-none"
                        />
                        <button
                            type="button"
                            onClick={handlePasswordVisibility}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        >
                            <FontAwesomeIcon icon={showPassword ? "fa-eye-slash" : "fa-eye"} />
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="w-[150px] bg-tertiary text-white py-2 rounded-full mt-10">
                            Masuk
                        </button>
                    </div>
                </form>
            </div>
            
            <div className="flex items-center justify-center p-8">
                <div className="text-center">
                    <img src="images/signin.png" alt="Illustration" className="mx-auto h-[430px] mb-4 object-contain" />
                </div>
            </div>
        </div>
    );
}

export default Login;
