import React from 'react'
import './header.scss'
import logo from '../../img/logo.png'

export const Header = () => {
  return (
    <section className="header">
      <div className="logo">
        <img className="logo__img" src={logo} alt="logo" />
      </div>
      <nav className="navigation">
        <div className="nav navigation__convert">Convert</div>
        <div className="nav navigation__business">Buisness & API</div>
        <div className="nav navigation__tools">Tools</div>
      </nav>
      <button className="action_button header__button">Sign in</button>
    </section>
  );
}
