import { useState } from 'react';
import SignupForm from '../components/Auth/SignupForm';
import RoleSelector from '../components/Auth/RoleSelector';

const Signup = () => {
  const [role, setRole] = useState<'admin' | 'employee'>('employee');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <RoleSelector selectedRole={role} setRole={setRole} />
      <SignupForm role={role} />
    </div>
  );
};

export default Signup;
