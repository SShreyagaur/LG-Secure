import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignupFormProps {
  role: 'admin' | 'employee';
}

const SignupForm = ({ role }: SignupFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // TODO: Send to backend
    if (role === 'admin') {
      navigate('/dashboard/admin');
    } else {
      navigate('/dashboard/employee');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-xl font-semibold mb-4 text-center">Signup as {role}</h2>
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
        onClick={handleSignup}
        className="w-full bg-green-500 text-white p-2 rounded">
        Signup
      </button>
    </div>
  );
};

export default SignupForm;
