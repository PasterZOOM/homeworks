import {Slider} from '@mui/material'
import React from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    minValue?: number
    maxValue?: number
    disabled?: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, minValue,
        maxValue, disabled
    }) => {

    const handleChange = (
        event: Event,
        newValue: number | number[],
    ) => {
        onChangeRange && onChangeRange(newValue as [number, number])
    }
    return (
        <>
            <Slider
                size="small"
                value={value}
                onChange={handleChange}
                disableSwap
                min={minValue ? minValue : 0}
                max={maxValue ? maxValue : 100}
                disabled={disabled}
            />
        </>
    )
}

export default SuperDoubleRange
