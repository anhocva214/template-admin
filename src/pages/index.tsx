
import MainLayout from '@components/layouts/main-layout'
import { GetServerSideProps } from 'next'
import { useSelector } from 'react-redux'


export default function Page() {
    return (
        <MainLayout/>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
    let auth = false
    if (auth)
    return { props: { }}
    else return {props: {}, redirect: {destination: '/login'}}
}