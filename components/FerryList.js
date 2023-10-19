import React from 'react'
import Link from "next/link";
import { Button, Card } from 'antd';
import styles from "../styles/ferries.module.css"
import { useRouter } from 'next/router';

function FerryList({ ferries }) {

    const router = useRouter();

    const handleGoToHome = () => {
        router.push('/'); 
      };

    const gridStyle = {
        width: '50%',
        textAlign: 'center',
    };
    return (
        <div>
            
            <Card title="Ferries Today" onClick={handleGoToHome}>
                {ferries && ferries.map((el) => {
                    return <>
                    <div key={el.id}>
                        <Card.Grid style={gridStyle}  className={styles.innercard}>

                            <Link href={`ferries/${el.id}`} className={styles.link}>
                                <div className={styles.product_con}  >
                                    <p className={styles.title}>{el.title}</p>
                                    <div className={styles.center}>
                                        <img src={el.image} alt="p" className={styles.pic} height="100px" />
                                        <p className={styles.price}>Price :<span className={styles.price_span}>{el.price}</span></p>
                                    </div>
                                    {el.from ? <p>{el.from} - {el.to}</p> : <p>{el.round}</p> }
                                </div>
                                <Button type="primary">
                                    Book tickets
                                </Button>
                            </Link>
                            

                        </Card.Grid>
                    </div>
                    </>

                })}
            </Card>
        </div>
    )
}

export default FerryList