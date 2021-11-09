import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreater from '../state/index'

function shop() {
    const dispatch = useDispatch()
    const {withdraw,deposit} = bindActionCreators(actionCreater, dispatch)
    return (
        <div>
            <h2 className="mt-5">Desposite money</h2>
            <button className="btn-primary mt-5 mx-2" onClick={() =>{withdraw(100)}} >-</button>
            update balance
            <button className="btn-primary mx-2" onClick={() => {deposit(100)}}>+</button>

            
        </div>
    )
}

export default shop
