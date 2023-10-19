import React from 'react'
import FerryList from '../../components/FerryList';

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
    // console.log(data);
    return {
        props : {
            ferries : data.products
        },
        revalidate : 10
    }
}