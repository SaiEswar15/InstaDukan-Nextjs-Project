// import React from 'react'
// import Counter from '../components/Counter'
// import Link from "next/link"

// function Home() {
//   return (
//     <>
//         <h1>Welcome to Home Page</h1>
//         <Counter></Counter>
//         <Link href = "/ferries">Explore</Link>
//     </>
//   )
// }

// export default Home

import React from 'react'
import FerryList from '../components/FerryList';

function yatch({ferries}) {
  return (
    <FerryList ferries = {ferries}></FerryList>
  )
}

export default yatch

export async function getStaticProps()
{
    const response = await fetch("https://yatch-json-data.onrender.com/");
    const data = await response.json();
    // console.log("revalidate");
    return {
        props : {
            ferries : data.products
        },
        revalidate : 10,
    }
}