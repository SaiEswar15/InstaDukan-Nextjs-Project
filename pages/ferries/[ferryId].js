import React from 'react'
import SingleFerryCard from '../../components/SingleFerryCard';

function SingleCard({ferry}) {
  return (
    <SingleFerryCard ferry = {ferry}></SingleFerryCard>
  )
}

export default SingleCard

export async function getStaticProps(context)
{
    const {params} = context;
    const response = await fetch(`https://yatch-json-data.onrender.com/${params.ferryId}`);
    // console.log(response, "response");
    const data = await response.json();
    // console.log(data, "data");
    return {
        props : {
            ferry : data
        }
    }
}

// export async function getStaticPaths()
// {
//     return {
//         paths : [
//             {
//                 params : {postId : "1"}
//             },
//             {
//                 params : {postId : "2"}
//             },
//             {
//                 params : {postId : "3"}
//             },
//         ],
//         fallback : false
//     }
// }

export async function getStaticPaths()
{

    const response = await fetch("https://yatch-json-data.onrender.com/");
    const data = await response.json();
    const pathArr = data.products.map((el)=>{
        return {
            params : {ferryId : `${el.id}`}
        }
    })
    return {
        paths : pathArr,
        fallback : false
    }
}

