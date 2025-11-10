import React from 'react'

interface User {
    id: number;
    name: string;
}


const UserPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        { cache: 'no-store' }
    );
    const users: User[] = await res.json();
    return (
        // <>
        //     <h1>All Users</h1>
        //     <ul>
        //         {users.map(users => <li key={users.id}>{users.name}</li>)}
        //     </ul>
        // </>
        <div className='p-6'>
            <h1 className='text-xl font-bold mb-4'>Table of Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <table className='min-w-full border border-gray-300'>
                <thead className='bg-gray-100 text-black'>
                    <tr>
                        <th className='border px-4 py-2'>
                            ID
                        </th>
                        <th className='border px-4 py-2'>
                            Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(users =>
                        <tr key={users.id}>
                            <td className='border px-4 py-2'>
                                {users.id}
                            </td>
                            <td className='border px-4 py-2'>
                                {users.name}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default UserPage
