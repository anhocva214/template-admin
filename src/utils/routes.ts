import Router from 'next/router'

export interface IRoute{
    id: string;
    name: string;
    path?: string;
    children?: IRoute[];
    classIcon?: string;
    hidden?: boolean;
}

export interface IRoutes{
    [key: string]: IRoute
}

const routesApp : IRoutes = {
    dashboard: {
        id: "1",
        name: "Dashboard",
        path: '/',
        classIcon: 'fa-regular fa-chart-line',
    },
    components: {
        id: "2",
        name: "Components",
        path: '/components',
        classIcon: 'fa-regular fa-atom-simple',
        children: [
            {
                id: "2-1",
                name: 'Button',
                path: '/components/button',
            },
            {
                id: "2-2",
                name: 'Badge',
                path: '/components/badge'
            },
            {
                id: "2-3",
                name: 'Alert',
                path: '/components/alert'
            },
            {
                id: "2-4",
                name: 'Accordion',
                path: '/components/accordion'
            },
            {
                id: "2-5",
                name: 'Modal',
                path: '/components/modal'
            }
        ]   
    }
}

const routesPath = {
    dashboard: '/',
    componentsButton: '/components/button',
    componentsBadge: '/components/badge',
    componentsAlert: '/components/alert',
    componentsAccordion: '/components/accordion',
    componentsModal: '/components/modal',
    login: '/login',

}

const routerAppPush = (tab: string, tabOptions?: string) => {
    if (!!tabOptions){
        Router.push('/?tab='+tab+"&"+tabOptions);
    }
    else {
        Router.push('/?tab='+tab)
    }
}

export {
    routesApp,
    routesPath,
    routerAppPush
}