import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

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
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
