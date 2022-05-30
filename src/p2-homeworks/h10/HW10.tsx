import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppStoreType} from "./bll/store";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import s from './HW10.module.css'
function HW10() {
  let loading = useSelector<AppStoreType, { loading: boolean }>(state => state.loading)


  const dispatch = useDispatch()


  const setLoading = () => {
    dispatch(loadingAC(true))
    setTimeout(() => {
      dispatch(loadingAC(false))
    }, 2000)
  };

  return (
    <div>
      <hr/>
      homeworks 10

      {/*should work (должно работать)*/}
      <div className={s.wrapper}>
      {loading.loading
        ? (
          <div className={s.loader}/>
        ) : (
          <div>
            <SuperButton className={s.btn} onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }
      </div>
      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  )
}

export default HW10
