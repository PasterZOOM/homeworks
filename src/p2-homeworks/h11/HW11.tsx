import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {AlternativeSuperDoubleRange} from './common/c8-SuperDoubleRange/AlternativeSuperDoubleRange';
import { AlternativeSuperRange } from './common/c7-SuperRange/AlternativeSuperRange';

function HW11() {

    const min = 0
    const max = 100

    const [value1, setValue1] = useState<number>(min)
    const [value2, setValue2] = useState<number>(max)

    const onChangeRange = ([value1, value2]: [number, number]) => {
        setValue1(value1)
        setValue2(value2)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <div style={{display: 'inline-block', width: '25px', textAlign: 'center'}}>{value1}</div>
                <div style={{display: 'inline-block', width: '300px'}}>
                    <SuperRange onChangeRange={setValue1}
                                onChangeRange2={setValue2}
                                value1={value1}
                                value2={value2}
                    />
                </div>

            </div>

            <div>
                <div style={{display: 'inline-block', width: '25px', textAlign: 'center'}}>{value1}</div>
                <div style={{display: 'inline-block', width: '300px'}}>
                    <SuperDoubleRange onChangeRange={onChangeRange}
                                      value={[value1, value2]}
                    />
                </div>
                <div style={{
                    display: 'inline-block',
                    width: '25px',
                    textAlign: 'center',
                    padding:'5px'
                }}>   {value2}</div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeSuperRange onChangeRange={(valueSlide)=>{setValue1(valueSlide)}}
                                   value1={value1}
                                   value={value1}
                                   />
            <AlternativeSuperDoubleRange min={min}
                                         max={max}
                                         onChange={({value1, value2}) => {setValue1(value1); setValue2(value2)}}
                                         value1={value1}
                                         value2={value2}/>
            <hr/>
        </div>
    )
}

export default HW11
