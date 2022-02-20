import { settingActions } from '@actions/exports';
import DropdownButton from '@components/button/dropdown-button';
import SearchTopbar from '@components/input/search-topbar';
import NavMenu from '@components/menu/nav-menu';
import { settingSelector } from '@store/slices/setting.slice';
import { routes } from '@utils/routes';
import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type props = {
    children: ReactNode
}


const MainLayout = (props: props) => {
    const dispatch = useDispatch()
    const {sidebarToggle, } = useSelector(settingSelector)

    useEffect(() => {
        let pathname = window.location.pathname;
        console.log(pathname);
        
        Object.values(routes).forEach(item => {
            if (item?.children?.length > 0){
                item.children.forEach(itemChild => {
                    if (item.path + itemChild.path == pathname){
                        dispatch(settingActions.setActiveNav({
                            id: item.id,
                            idChildrent: itemChild.id
                        }))
                    }
                })
            }
            else if (item.path == pathname){
                dispatch(settingActions.setActiveNav({
                    id: item.id,
                    idChildrent: null
                }))
            }
        })
    },[])

    return (
        <div>
            <div className="flex min-h-screen relative">
                {/* SIDEBAR */}
                <div className={`w-[250px] bg-gray-900 h-screen overflow-y-auto transition-all duration-500 absolute left-0 ${sidebarToggle?'-left-[250px]':""}`}>
                    {/* logo */}
                    <div className="sticky top-0 bg-gray-900 z-50 h-[60px] flex justify-center">
                        <h1 className="font-bold uppercase text-center text-lg text-white flex items-center">admin</h1>
                    </div>
                    {/* Menu */}
                    <div className="p-2">
                        {/* Item */}
                        {Object.values(routes).map((item, index)=>{
                            if (item?.children?.length > 0){
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

                <div className={`w-full pl-[250px] transition-all duration-500 bg-gray-100 ${sidebarToggle?'pl-0':""}`}>
                    {/* HEADER */}
                    <div className="h-[60px] bg-white w-full flex shadow-md items-center justify-between relative">

                        {/* SEARCH BAR */}
                        <SearchTopbar/>
                        {/* END SEARCH BAR */}

                        <a role="button" onClick={() =>{dispatch(settingActions.switchSidebarToggle(!sidebarToggle))}}className="flex items-center ml-5">
                            <i className="fa-solid fa-bars text-xl text-slate-500"></i>
                        </a>

                        <div className="pr-6 flex">
                            <a role="button" onClick={() => dispatch(settingActions.switcSearchToggle(true))} className="hover:bg-gray-300 p-4 rounded-full w-9 h-9 flex justify-center items-center transition-all duration-300">
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
                                    <div className="bg-white w-[200px] drop-shadow-xl">
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, harum.</p>
                                    </div>
                                )}
                            />

                        </div>

                    </div>
                    {/* END HEADER */}

                    <div className="p-3">

                    </div>
                </div>
            </div>
        </div>
    )

}

export default MainLayout;