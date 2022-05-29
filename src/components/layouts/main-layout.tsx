
import { routesApp, routesPath } from '@utils/routes';
import { useRouter } from 'next/router';
import React, { createElement, ReactNode, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RotateSpinner, SwishSpinner } from 'react-spinners-kit';
import ComponentBadgePage from '@components/apps/badge';
import ComponentButtonPage from '@components/apps/button';
import RouteSwitch from './route-switch';
import DashboardPage from '@components/apps';
import ComponentAlertPage from '@components/apps/alert';
import ComponentAccordionPage from '@components/apps/accordion';
import { settingActions, settingSelector } from 'src/redux/setting.redux';
import SearchTopbar from '@components/elements-ui/input/search-topbar';
import DropdownButton from '@components/elements-ui/button/dropdown-button';
import NavMenu from '@components/elements-ui/menu/nav-menu';


interface IProps {
    // children: ReactNode
}

export default function MainLayout({  }: IProps) {
    const dispatch = useDispatch()
    const router = useRouter()

    const { sidebarToggle, activeNav } = useSelector(settingSelector)
    const [tabName, setTabName] = useState([])
    const [loadingPage, setLoadingPage] = useState(false)


    useEffect(() => {
        let pathname = window.location.pathname;
        // const urlParams = new URLSearchParams(window.location.search);
        // const tab = urlParams.get('tab');

        if (!pathname) dispatch(settingActions.setActiveNav({
            id: '1',
            idChildrent: null,
            tab: '/'
        }))

        Object.values(routesApp).forEach(item => {
            if (item?.children?.length > 0) {
                item.children.forEach(itemChild => {
                    if (item.path + itemChild.path == pathname) {
                        dispatch(settingActions.setActiveNav({
                            id: item.id,
                            idChildrent: itemChild.id,
                            tab: pathname
                        }))
                    }
                })
            }
            else if (item.path == pathname) {
                dispatch(settingActions.setActiveNav({
                    id: item.id,
                    idChildrent: null,
                    tab: pathname
                }))
            }
        })
    }, [])

    useEffect(() => {
        setLoadingPage(true)
        Object.values(routesApp).forEach(item => {
            if (item.id == activeNav.id) {
                if (item?.children?.length > 0) {
                    item.children.forEach(itemChild => {
                        if (itemChild.id == activeNav.idChildrent) setTabName([item.name, itemChild.name])
                    })
                }
                else {
                    setTabName([item.name])
                }
            }
        })
    }, [activeNav])

    // useEffect(() => {
    //     // setLoadingPage(true)
    //     setTimeout(() => {
    //         setLoadingPage(false)
    //     }, 1200);
    // }, [])

    // if (loadingPage) return (
    //     <div className={`absolute top-0 left-0 bg-white h-screen w-screen flex justify-center items-center bg-gray-900 transition-all duration-500 ${loadingPage?'z-50 opacity-1 visible':'-z-50 opacity-0 invisible'}`}>
    //             <SwishSpinner size={90} />
    //         </div>
    // )

    return (
        <div>

            <div className="flex min-h-screen relative overflow-hidden">
                {/* Background mobile */}
                <div onClick={() => dispatch(settingActions.switchSidebarToggle(false))} className={`bg-black/25 w-full h-screen absolute lg:hidden top-0 left-0 ${sidebarToggle ? 'z-40' : '-z-40'}`} />
            
                <SideBar toggle={sidebarToggle} />

                <div className={`w-full pl-0 lg:pl-[250px] transition-all duration-500 bg-gray-100 ${sidebarToggle ? 'pl-0 lg:pl-[0]' : ""}`}>
                    {/* HEADER */}
                    <div className="h-[60px] bg-white w-full flex shadow-md items-center justify-between relative">

                        {/* SEARCH BAR */}
                        <SearchTopbar />
                        {/* END SEARCH BAR */}

                        <a role="button" onClick={() => { dispatch(settingActions.switchSidebarToggle(!sidebarToggle)) }} className="flex items-center ml-5">
                            <i className="fa-solid fa-bars text-xl text-slate-500"></i>
                        </a>

                        <div className="pr-6 flex">
                            <a role="button" onClick={() => dispatch(settingActions.switchSearchToggle(true))} className="hover:bg-gray-300 p-4 rounded-full w-9 h-9 flex justify-center items-center transition-all duration-300">
                                <i className="fa-regular fa-magnifying-glass text-slate-500 text-xl"></i>
                            </a>
                            <div className="mr-3"></div>

                            {/* Dropdown account */}
                            <DropdownButton
                                button={(
                                    <span className="hover:bg-gray-300 p-4 rounded-full w-9 h-9 flex justify-center items-center transition-all duration-300">
                                        <i className="fa-regular text-xl fa-circle-user text-slate-500"></i>
                                    </span>
                                )}
                                dropdownContent={(
                                    <div className="bg-white w-[200px] shadow-lg border rounded-md">
                                        <a role="button" className="py-2 px-4 flex items-center hover:bg-gray-100 transition-all duration-300">
                                            <span className="mr-4 text-slate-500"><i className="fa-regular fa-user"></i></span>
                                            <span className="capitalize text-sm text-slate-500">
                                                My profile
                                            </span>
                                        </a>
                                        <a role="button" className="py-2 px-4 flex items-center hover:bg-gray-100 transition-all duration-300">
                                            <span className="mr-4 text-slate-500"><i className="fa-regular fa-arrow-right-from-bracket"></i></span>
                                            <span className="capitalize text-sm text-slate-500">
                                                Logout
                                            </span>
                                        </a>

                                    </div>
                                )}
                            />

                        </div>

                    </div>
                    {/* END HEADER */}

                    {/* CONTENT */}
                    <div className="p-3">

                        {/* BREADCRUMB */}
                        <nav className="flex py-3">
                            {tabName.slice(0, -1).map(item => (
                                <span key={item} className="text-slate-400 text-xl mr-1">{item} /</span>
                            ))}
                            {tabName.slice(-1).map(item => (
                                <span key={item} className="text-slate-500 text-xl font-semibold">{item}</span>
                            ))}
                        </nav>
                        {/* END BREADCRUMB */}

                        {/* {children} */}
                        <RouteSwitch path={routesPath.dashboard} tab={activeNav.tab} component={(<DashboardPage />)} />
                        <RouteSwitch path={routesPath.componentsButton} tab={activeNav.tab} component={(<ComponentButtonPage />)} />
                        <RouteSwitch path={routesPath.componentsBadge} tab={activeNav.tab} component={(<ComponentBadgePage />)} />
                        <RouteSwitch path={routesPath.componentsAlert} tab={activeNav.tab} component={(<ComponentAlertPage />)} />
                        <RouteSwitch path={routesPath.componentsAccordion} tab={activeNav.tab} component={(<ComponentAccordionPage />)} />


                    </div>
                    {/* END CONTENT */}
                </div>
            </div>
        </div>
    )

}


export const SideBar = React.memo(({
    toggle
}: {
    toggle: boolean
}) => {
    
    return (
        <>
            {/* SIDEBAR */}
            <div className={`w-[250px] bg-gray-900 min-h-screen h-full overflow-y-auto transition-all duration-500 absolute -left-[250px] z-40 lg:left-0 lg:translate-x-0 ${toggle ? '-left-[250px] translate-x-[250px] z-50 lg:-translate-x-[250px]' : ""}`}>
                {/* logo */}
                <div className="sticky top-0 bg-gray-900 z-50 h-[60px] flex justify-center">
                    <h1 className="font-bold uppercase text-center text-lg text-white flex items-center">admin</h1>
                </div>
                {/* Menu */}
                <div className="p-2">
                    {/* Item */}
                    {Object.values(routesApp).map((item, index) => {
                        if (item?.children?.length > 0) {
                            return (
                                <NavMenu
                                    key={item.path + "__" + index}
                                    title={item.name}
                                    id={item.id}
                                    path={item.path}
                                    classIcon={item.classIcon}
                                    items={item.children}
                                />
                            )
                        }
                        else return (
                            <NavMenu
                                id={item.id}
                                key={item.path + "__" + index}
                                title={item.name}
                                path={item.path}
                                classIcon={item.classIcon}
                            />
                        )
                    })}
                </div>
            </div>
            {/* END SIDEBAR */}
        </>
    )
})

