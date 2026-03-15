import React, { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import UserList from './components/UserList'
import './App.css'

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleUserRegistered = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="container">
      <header className="mb-12">
        <h1 className="title">User Management</h1>
        <p className="text-center text-text-muted">Register new accounts and view the current database members instantly.</p>
      </header>

      <main className="flex flex-col lg-flex-row gap-8 items-start">
        <RegistrationForm onUserRegistered={handleUserRegistered} />
        <UserList refreshTrigger={refreshTrigger} />
      </main>

      <footer className="mt-16 text-center text-text-muted text-sm pb-8">
        Built with React, Express, and MongoDB
      </footer>
    </div>
  )
}

export default App
