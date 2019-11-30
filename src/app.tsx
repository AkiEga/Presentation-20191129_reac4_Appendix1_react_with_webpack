import * as React from 'react';
// import { Props } from 'react';

// export interface Props {    
//     count: number,
//     onClickPlus: any,
//     onClickMinus: any
// }

// Component
export default class CounterApp extends React.Component {
    constructor(props:any){
        super(props);
    }
    render () {
        let tempProps:any = this.props;

        return (
        <div>
            <p><span>Count: {tempProps.count}</span></p>
            <div>
            <button onClick={tempProps.onClickPlus}>+1</button>
            <button onClick={tempProps.onClickMinus}>-1</button>
            </div>
        </div>
        );
    }
}
