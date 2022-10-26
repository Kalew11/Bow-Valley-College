import React from 'react'
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
    
        {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

          {/* <!-- Sidebar - Brand --> */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
          </a>
          <hr className="sidebar-divider my-0" />

          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span></NavLink>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading" >
            Management
          </div>

          <li className="nav-item">
            <NavLink className="nav-link" to="Admin/AddCourse">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Add Course</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="Admin/Courses">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Courses</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="Admin/Students">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Students</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="Admin/SubmitedForms">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Submitted Forms</span></NavLink>
          </li>
          <hr className="sidebar-divider d-none d-md-block" />

          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>

        </ul>
        {/* <!-- End of Sidebar --> */}
    
    </>
  )
}
export default Sidebar;
