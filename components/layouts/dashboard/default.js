import React from 'react'

//header
import Header from ''

//sidebar
import RightSidebar from '../../../components/partials/dashboard/SidebarStyle/rightsidebar'

//sidebar
import Sidebar from '../../../components/partials/dashboard/SidebarStyle/sidebar'

//footer
import Footer from '../../../components/partials/dashboard/FooterStyle/footer'

import SettingOffCanvas from '../../../components/setting/SettingOffCanvas'
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
