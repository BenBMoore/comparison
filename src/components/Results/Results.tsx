import React from 'react'

import classes from './Results.module.css';
import Card from '../../elements/Card/Card'

export const Results = (props:any) => {
    return (
        <div className={classes.ResultsWrapper}>
            {(props.brokers) ? props.brokers.map(function(val:any, index:number){
                return <Card key={index} data={val}/>
                
            }): null}
        </div>
    )
}
