import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {
  return (
    <>

    <ul class="nav-list">

      <li class="nav-item">
        <a href="#aboutMe" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-item-active' : 'nav-item'}>About Me</a>
      </li>

      <li class="nav-item">
        <a href="#work" onClick={() => handlePageChange('Work')} className={currentPage === 'Work' ? 'nav-item-active' : 'nav-item'}>Work</a>
      </li>

      <li class="nav-item">
        <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-item-active' : 'nav-item'}>Resume</a>
      </li>

      <li class="nav-item">
        <a href="#contactMe" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-item-active' : 'nav-item'}>Contact Me</a
      ></li>

    </ul>

    </>
  );
}

export default Nav;
