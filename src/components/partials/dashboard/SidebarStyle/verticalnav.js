"use client";
import React, {useContext, useState} from 'react'

//router
import Link from 'next/link'

//react-bootstrap
import {Accordion, AccordionContext, Nav, OverlayTrigger, Tooltip, useAccordionButton} from 'react-bootstrap'
import sidebarLinks from "../../../utilities/Links"

function CustomToggle({children, eventKey, onClick}) {

    const {activeEventKey} = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({state: !active, eventKey: eventKey}));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (<Link href="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button"
                  onClick={(e) => {
                      decoratedOnClick(isCurrentEventKey)
                  }}>
            {children}
        </Link>);
}

const VerticalNav = React.memo(() => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [active, setActive] = useState('')
    const [pathname, setPathname] = useState();

    const handleRoute = (e) => {
        setPathname(e)
    }

    return (<>
            <Accordion as="ul" className="navbar-nav iq-main-menu" id="sidebar-menu">
                <li className="nav-item static-item">
                    <Link className="nav-link static-item disabled" href="#" tabIndex="-1">
                        <span className="default-icon">Social</span>
                        <span className="mini-icon" data-bs-toggle="tooltip" title="Social"
                              data-bs-placement="right">-</span>
                    </Link>
                </li>
                {sidebarLinks.map((l) =>
                        l.subLinkExist == false ? ( <li className={`${pathname === l.href ? 'active' : ''} nav-item `} key={l.key}>
                            <Link className={`${pathname === l.href ? 'active' : ''} nav-link `} aria-current="page"
                                  href={l.href} onClick={() => {
                                handleRoute(l.href)
                            }}>
                                <OverlayTrigger placement="right" overlay={<Tooltip>{l.name}</Tooltip>}>
                                    <i className="icon material-symbols-outlined">
                                        {l.icon}
                                    </i>
                                </OverlayTrigger>
                                <span className="item-name">{l.name}</span>
                            </Link>
                        </li>) :(
                            <Accordion.Item as="li" eventKey={l.eventKey} bsPrefix="nav-item" key={l.key}>
                                <CustomToggle eventKey={l.eventKey} onClick={(activeKey) => setActiveMenu(activeKey)}>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>{l.name}</Tooltip>}>
                                        <i className="icon material-symbols-outlined">
                                            {l.icon}
                                        </i>
                                    </OverlayTrigger>
                                    <span className="item-name">{l.name}</span>
                                    <i className="right-icon material-symbols-outlined">chevron_right</i>
                                </CustomToggle>
                                <Accordion.Collapse eventKey={l.eventKey}>
                                    <ul className="sub-nav">
                                        {l.sublinks.map((sl)=>
                                            <Nav.Item as="li" key={sl.key}>
                                                <Link className={`${pathname === sl.href ? 'active' : ''} nav-link`} href={sl.href} onClick={() => {handleRoute(sl.href)}} >
                                                    <i className="icon">
                                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                                            <g>
                                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                                            </g>
                                                        </svg>
                                                    </i>
                                                    <OverlayTrigger placement="right" overlay={<Tooltip>{sl.name}</Tooltip>}>
                                                        <i className="sidenav-mini-icon"></i>
                                                    </OverlayTrigger>
                                                    <span className="item-name">{sl.name}</span>
                                                </Link>
                                            </Nav.Item>
                                        )}


                                    </ul>
                                </Accordion.Collapse>
                            </Accordion.Item>
                        )

                )}




            </Accordion>
        </>)
})

export default VerticalNav
