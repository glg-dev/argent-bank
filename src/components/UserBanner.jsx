import React, { useRef } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFirstName, getLastName, userEdit } from '../feature/loginSlice';


function UserBanner() {

  const firstName = useSelector(state => state.login.firstName);
  const lastName = useSelector(state => state.login.lastName);
  const token = useSelector(state => state.login.token);
  const firstInput = useRef();
  const lastInput = useRef();
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false)

  const handleEdit = () => {
    setEdit(false)
    dispatch(getFirstName(firstInput.current.value))
    dispatch(getLastName(lastInput.current.value))
    const request = dispatch(userEdit(firstInput.current.value, lastInput.current.value, token))
  }

  return (
    <div className="text-[#FFF] mb-8 pt-[15px]">
      <h1>Welcome back </h1>
      {
        edit ? (
          <div className='flex flex-col justify-center items-center gap-4 mt-4'>
            <div className="flex justify-center items-center gap-4">
              <input 
                className='px-4 py-2 border border-solid border-slate-600 text-green' 
                type="text" 
                placeholder={firstName}
                ref={firstInput}
              />
              <input 
                className='px-4 py-2 border border-solid border-slate-600 text-green' 
                type="text" 
                placeholder={lastName}
                ref={lastInput}
              />
            </div >
            <div className="flex justify-center items-center gap-1">
              <button className="bg-[#FFF] border border-solid border-green text-green px-8 py-2 mx-3" onClick={() => handleEdit()}>Save</button>
              <button className="bg-[#FFF] border border-solid border-green text-green px-8 py-2 " onClick={() => setEdit(false)}>Cancel</button>
            </div>
          </div>
        ) : (
          <div>
            <h1 className='mt-0'>{firstName} {lastName}!</h1> 
            <button className="border-green2 bg-green2 font-bold p-[10px] mt-4" onClick={() => setEdit(true)}>Edit name</button>
          </div>
        )
      }
    </div>
)
}

export default UserBanner