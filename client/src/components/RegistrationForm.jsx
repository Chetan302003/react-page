import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Lock, User as UserIcon, Loader2 } from 'lucide-react';

const RegistrationForm = ({ onUserRegistered }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await axios.post('http://localhost:5000/api/register', formData);
            setMessage({ type: 'success', text: response.data.message });
            setFormData({ username: '', email: '', password: '' });
            if (onUserRegistered) onUserRegistered();
        } catch (error) {
            setMessage({ 
                type: 'error', 
                text: error.response?.data?.message || 'Registration failed' 
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 w-full max-w-md"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-20 rounded-xl text-primary">
                    <UserPlus size={24} />
                </div>
                <h2 className="text-2xl font-bold">Create Account</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Username</label>
                    <div className="relative">
                        <UserIcon className="absolute left-3 top-50 translate-y-n50 text-text-muted" size={18} />
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Enter username"
                            value={formData.username}
                            onChange={handleChange}
                            className="pl-10"
                            required
                        />
                    </div>
                </div>

                <div className="input-group">
                    <label>Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-50 translate-y-n50 text-text-muted" size={18} />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleChange}
                            className="pl-10"
                            required
                        />
                    </div>
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-50 translate-y-n50 text-text-muted" size={18} />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            className="pl-10"
                            required
                        />
                    </div>
                </div>

                {message.text && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`p-3 rounded-lg mb-4 text-sm ${
                            message.type === 'success' ? 'bg-success-20 text-success' : 'bg-error-20 text-error'
                        }`}
                    >
                        {message.text}
                    </motion.div>
                )}

                <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                    disabled={loading}
                >
                    {loading ? <Loader2 className="animate-spin" size={20} /> : 'Register Now'}
                </button>
            </form>
        </motion.div>
    );
};

export default RegistrationForm;
