import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Calendar, AtSign, Shield } from 'lucide-react';

const UserList = ({ refreshTrigger }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Failed to fetch users', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [refreshTrigger]);

    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-8 w-full flex-1"
        >
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary-20 rounded-xl text-primary">
                        <Users size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">Registered Users</h2>
                </div>
                <div className="px-4 py-1-5 bg-white-5 rounded-full text-sm text-text-muted border border-border">
                    {users.length} total
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-text-muted border-b border-border">
                            <th className="pb-4 font-medium"><div className="flex items-center gap-2"><Shield size={16}/> Username</div></th>
                            <th className="pb-4 font-medium"><div className="flex items-center gap-2"><AtSign size={16}/> Email</div></th>
                            <th className="pb-4 font-medium"><div className="flex items-center gap-2"><Calendar size={16}/> Joined</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence mode='popLayout'>
                            {users.map((user, index) => (
                                <motion.tr 
                                    key={user._id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="border-b border-border-50 hover-bg-white-5 transition-colors group"
                                >
                                    <td className="py-4 font-medium text-text group-hover-text-primary transition-colors">
                                        {user.username}
                                    </td>
                                    <td className="py-4 text-text-muted">
                                        {user.email}
                                    </td>
                                    <td className="py-4 text-text-muted text-sm">
                                        {new Date(user.createdAt).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
                
                {users.length === 0 && !loading && (
                    <div className="py-12 text-center text-text-muted">
                        No users registered yet.
                    </div>
                )}

                {loading && (
                    <div className="py-12 flex justify-center">
                        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default UserList;
