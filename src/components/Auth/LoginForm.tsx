import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  role: 'admin' | 'employee';
}

const LoginForm = ({ role }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // TODO: replace with real backend logic
    if (role === 'admin') {
      navigate('/dashboard/admin');
    } else {
      navigate('/dashboard/employee');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-xl font-semibold mb-4 text-center">Login as {role}</h2>
      <input
        className="w-full p-2 mb-3 border rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 mb-3 border rounded"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white p-2 rounded">
        Login
      </button>
    </div>
  );
};

export default LoginForm;
