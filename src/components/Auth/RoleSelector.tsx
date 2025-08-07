interface RoleSelectorProps {
  selectedRole: 'admin' | 'employee';
  setRole: (role: 'admin' | 'employee') => void;
}

const RoleSelector = ({ selectedRole, setRole }: RoleSelectorProps) => {
  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={() => setRole('admin')}
        className={`px-4 py-2 border rounded ${selectedRole === 'admin' ? 'bg-blue-500 text-white' : 'bg-white'}`}>
        Admin
      </button>
      <button
        onClick={() => setRole('employee')}
        className={`px-4 py-2 border rounded ${selectedRole === 'employee' ? 'bg-blue-500 text-white' : 'bg-white'}`}>
        Employee
      </button>
    </div>
  );
};

export default RoleSelector;
