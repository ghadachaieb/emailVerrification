import React from 'react';
//import Background from '../images/haha.jpg';
//import InputUser from './InputUser';
//import ListeUser from './ListeUser';
const  SideNav= () =>{

  
/*  var sectionStyle = {
    backgroundImage: `url(${Background}) `
    
  };*/
  return (
<div >
<aside className="main-sidebar sidebar-dark-warning elevation-4" /*style={ sectionStyle }*/>
  {/* Brand Logo */}

              
  <br></br>
  <a href="index3.html" className="brand-link">
    <img src="dist/img/wedo.png" alt="AdminLTE Logo"  class="img-circle"  style={{width:80,height :50 ,marginInlineStart:40}} /><br></br>
    <span className="brand-text font-weight-light"  style={{marginInlineStart:30}}   >Wedo Consult </span>
  </a>
<br></br>
<div class="user-panel">

                        <div class="pull-left info">
                             <a href="/profil"><i class="fa fa-circle text-success" style={{marginInlineStart:30}} ></i> Online</a>
                        </div>
                    </div>
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
 
   
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>

    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="reeview" role="menu" data-accordion="false">

        <li className="nav-item">
       <a href="/listeUser" className="nav-link">
          <i className="nav-icon fas fa-users" />
            
            <p>
              List  Users 
              <i className="fas fa-angle-left right" />
            </p>
          </a>
            
        </li>
        <li className="nav-item">
       <a href="/inputUser" className="nav-link">
          <i className="nav-icon fas fa-user" />
            
            <p>
               Add User 
              <i className="fas fa-angle-left right" />
            </p>
          </a>
            
        </li>
        <li className="nav-item">
          <a href="/listeRole" className="nav-link">
          <i className="nav-icon fas fa-edit" />
            
            <p>
               List of Roles Users
              <i className="fas fa-angle-left right" />
            </p>
          </a>
         
        </li>
        <li className="nav-item">
          <a href="/inputRole" className="nav-link">
          <i className="nav-icon fas fa-plus" />
            
            <p>
              Add Role User
              <i className="fas fa-angle-left right" />
            </p>
          </a>
         
        </li>
        <li className="nav-item">
                <a href="/listDemande" className="nav-link">
                  <i className="nav-icon fas fa-envelope" />

                  <p>
                   Invitation User
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>

              </li>
      
        <li className="nav-item">
          <a href="/listeModele" className="nav-link">
            <i className="nav-icon fas fa-folder" />
            <p>
              List Modeles
              <i className="fas fa-angle-left right" />
            </p>
          </a>
         
        </li>
        <li className="nav-item">
          <a href="/inputModele" className="nav-link">
            <i className="nav-icon fas fa-plus" />
            <p>
              Add Modele
              <i className="fas fa-angle-left right" />
            </p>
          </a>
         
        </li>
        <li className="nav-item">
          <a href="/inputType" className="nav-link">
            <i className="nav-icon fas fa-book" />
            <p>
              List type Modele
              <i className="fas fa-angle-left right" />
            </p>
          </a>
         
        </li>
         
       
     
        
     
      
       
       
      
      </ul>
    </nav>
  
  </div>
 
</aside>

 </div>


 )

}

export default SideNav ;
