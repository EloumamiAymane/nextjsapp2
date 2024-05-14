"use client";
import React from 'react'
//header
import Header from '../../partials/dashboard/HeaderStyle/header'

//sidebar
import RightSidebar from '../../partials/dashboard/SidebarStyle/rightsidebar'

//sidebar
import Sidebar from '../../partials/dashboard/SidebarStyle/sidebar'

//footer
import Footer from '../../partials/dashboard/FooterStyle/footer'

import SettingOffCanvas from '../../setting/SettingOffCanvas'
import { Outlet } from 'react-router-dom'

const Default = () => {
    return (
        <>
                <Sidebar />
                <Header />
                <div className="main-content">
                    <Outlet/>
                </div>
                <RightSidebar />
            <Footer />
            <SettingOffCanvas/>
        </>
    )
}

export default Default
