import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Tab from "../../components/table/Table"
import "./single.scss"


function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
          <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Bash money</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue"> Bola@gmail.com</span>
                </div>
                
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue"> +234509883</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue"> 46, Federal Road way, Ikoyi.</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">State:</span>
                  <span className="itemValue"> Lagos.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 /1 } title="users spending (last 6 months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Tab />
        </div>
      </div>
    </div>
  )
}

export default Single