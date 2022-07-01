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
                path: '/button',
            },
            {
                id: "2-2",
                name: 'Badge',
                path: '/badge'
            },
            {
                id: "2-3",
                name: 'Alert',
                path: '/alert'
            },
            {
                id: "2-4",
                name: 'Accordion',
                path: '/accordion'
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