import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Home =  ({ imageUrl }) => {
    const [item, setItem] = useState('');
    const [name, setName] = useState('');


    // useEffect( async () => {
    //     const data = await fetch('https://jsonplaceholder.typicode.com/photos').then((response) => {
    //         console.log(2);
    //         return response.json();
    //     });
    //     setName(data[0].url);
    // }, []);

    return (
        <>
            <div>
                <h1>안녕하세요 {name}입니다!</h1>
                <Link href={{ pathname: 'user/profile', query: { name: '오형남' } }} as={'user/profile'}><a>프로필</a></Link>
            </div>
        </>
    );
}

// Home.getInitialProps = async (context) => {
//     console.log(1);
//     const data = await fetch('https://jsonplaceholder.typicode.com/photos').then((response) => {
//         console.log(2);
//         return response.json();
//     });
//     console.log(3, data);
//     console.log('imageUrl', data[0].url);
//     return { imageUrl: data[0].url };
// }

export default Home;