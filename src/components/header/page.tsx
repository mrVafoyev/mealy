import React from 'react'
import Link from 'next/link'
import Styled from './header.module.css'
import { useState } from 'react'
import image from '../../../public/user.png'

export default function Header() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`${Styled.header} ${isChecked ? Styled.checked : ''}`}>

      <h1 className={isChecked ? Styled.checkedTitle : Styled.headerTitle}>MEALY</h1>
      <div className={isChecked ? Styled.checkedDropdown : Styled.pasteButton}>
        <button className={isChecked ? Styled.checkedButton : Styled.button}>Categories</button>
        <div className={isChecked ? Styled.checkedDropdownContent : Styled.dropdownContent}>
          <Link href="/home" className={isChecked ? Styled.checkedItem : Styled.dropdownItem}>Home</Link>
          <Link href="/clothes" className={isChecked ? Styled.checkedItem : Styled.dropdownItem}>Clothes</Link>
          <Link href="/meals" className={isChecked ? Styled.checkedItem : Styled.dropdownItem}>Meals</Link>
          <Link href="/filters" className={isChecked ? Styled.checkedItem : Styled.dropdownItem}>Products</Link>
        </div>
      </div>

      <input type="search" className={Styled.search} placeholder='Search' />

      <img width="35px" height="35px" style={{backgroundColor:"red"}} src='../../../public/user.png' alt="" />

      <Link href="/register" className={isChecked ? Styled.checkedLogin : Styled.login}>Login</Link>

      <label className={Styled.switch}>
        <input type='checkbox' checked={isChecked} onChange={()=>handleCheckboxChange()} />
        <span className={Styled.slider}></span>
      </label>
    </div>
  );
}
