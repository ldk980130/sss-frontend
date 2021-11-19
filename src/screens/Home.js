import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Footer from "../Components/Footer";

function Home() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
            } 
            catch (e) {
            setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;

    return (
        <>    
            <h1>Home</h1>
            <ul>
                {users.id},{users.title}
            </ul>
            <Footer />
        </>
    );
}
export default Home;