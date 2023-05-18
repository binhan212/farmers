import React from 'react'
import { useSelector } from 'react-redux'

export default function Home(props) {
  const userLogin=useSelector(state=>state.UserLoginAdminReducer.userLogin);

  return (
    <div>
      Home
      {userLogin.taiKhoanUr}
    </div>
  )
}
