import React from "react";
import Price from "./Price";
import Child from "./Child";


class Parent extends React.Component {



    render(){
        return (
            <>
            <div>

                <Price  price = '2000$' />

                <Child />
            </div>
            </>
        )
    }
}

export default Parent;