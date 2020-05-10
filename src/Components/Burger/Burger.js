import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger=(props)=>
    {
    let transformedIngredients=Object.keys(props.ingredients).map(igKey=>
    {
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredient key={igKey+i} types={igKey}/>
                });
    }).reduce((arr,el)=>
        {
             return arr.concat(el)
        },[]);

    if(transformedIngredients.length===0)
    {
        transformedIngredients=<p>Please insert Some Ingredients Here</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient types='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient types='bread-bottom'/>
        </div>
    )
    }

export default burger;