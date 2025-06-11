import React from 'react';

const CyberBackground = () => (
  <div className="fixed inset-0 -z-10">
    <div className="absolute inset-0 bg-cyber-dark">
      <div className="absolute inset-0 bg-gradient-to-tr from-cyber-primary/10 via-transparent to-cyber-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--cyber-primary)_0%,_transparent_65%)] opacity-5" />
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300f6ff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }} />
    </div>
  </div>
);

export default CyberBackground;