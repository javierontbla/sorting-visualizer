import React, { Fragment } from 'react';
import './NavBar.css'

function NavBar({ bubbleSort, smallList, mediumList, largeList, mergeSort, quickSort }) {
  return (
    <Fragment>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#logo">SORTING VISUALIZER</a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#2">|</a>

                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#4" onClick={() => smallList()}>SMALL SIZE LIST</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#4" onClick={() => mediumList()}>MEDIUM SIZE LIST</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#4" onClick={() => largeList()}>LARGE SIZE LIST</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#2">|</a>

                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#1" onClick={() => bubbleSort()}>BUBBLE SORT</a>
                    </li>
                    {/* 
                        <li className="nav-item active">
                        <a className="nav-link" href="#2" onClick={() => mergeSort()}>MERGE SORT</a>
                        </li>
                        <li className="nav-item active">
                        <a className="nav-link" href="#3" onClick={() => quickSort()}>QUICK SORT</a>
                        </li>
                        <li className="nav-item active">
                        <a className="nav-link" href="#4">HEAP SORT</a>
                        </li>
                    */}

                    <li className="nav-item active">
                        <a className="nav-link" href="#2">|</a>

                    </li>
                </ul>
            </div>
        </nav>
    </Fragment>
  );
}

export default NavBar;
