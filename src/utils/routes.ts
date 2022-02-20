
export interface IRoute{
    id: string;
    name: string;
    path?: string;
    children?: IRoute[];
    classIcon?: string
}

export interface IRoutes{
    [key: string]: IRoute
}

const routes : IRoutes = {
    home: {
        id: "1",
        name: "Dashboard",
        path: '/',
        classIcon: 'fa-regular fa-chart-line'
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
                path: '/button'
            },
            {
                id: "2-2",
                name: 'Alert',
                path: '/alert'
            }
        ]   
    }
}


export {
    routes
}