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
import {useDispatch} from "react-redux";
import {setSetting} from "../../store/setting/actions";


const Default = ({children}) => {
    const dispatch = useDispatch()
    dispatch(setSetting())
    return (<>

            <Sidebar/>
            <Header/>
            <div className="main-content">
                {children}
            </div>
            {/*<RightSidebar/>*/}
            <Footer/>
            {/*<SettingOffCanvas/>*/}


        </>)
}

export default Default
