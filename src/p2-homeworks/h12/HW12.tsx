import React from 'react';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {changeThemeC} from './bll/themeReducer';

const themes = ['dark', 'red', 'some', 'white', 'gold'];

function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.theme.value)
    const dispatch = useDispatch()
    const onChangeCallback = (value: string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                <SuperRadio name={'themes'}
                            options={themes}
                            value={theme}
                            onChangeOption={onChangeCallback}/>
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
