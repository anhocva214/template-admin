import Badge from "@components/elements-ui/badge";
import WrapperShadow from "@components/elements-ui/wrapper/wrapper-shadow";
import MainLayout from "@components/layouts/main-layout";


export default function ComponentBadgePage() {


    return (
        <>
            <WrapperShadow>
                <h5 className="mb-5 text-lg font-medium text-slate-500">Basic</h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <div className="flex items-center justify-center">
                        <Badge color="primary"> Default </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Badge color="success"> Default </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Badge color="warning"> Default </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Badge color="danger"> Default </Badge>
                    </div>
                </div>
            </WrapperShadow>
            <div className="mt-5"></div>
            <WrapperShadow>
                <h5 className="mb-5 text-lg font-medium text-slate-500">Label</h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <div className="flex items-center justify-center">
                        <Badge type="label" color="primary"> Default </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Badge type="label" color="success"> Default </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Badge type="label" color="warning"> Default </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Badge type="label" color="danger"> Default </Badge>
                    </div>
                </div>
            </WrapperShadow>
            <div className="mt-5"></div>
            <WrapperShadow>
                <h5 className="mb-5 text-lg font-medium text-slate-500">Outline</h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <div className="flex items-center justify-center">
                        <Badge type="outline" color="primary"> Default </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Badge type="outline" color="success"> Default </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Badge type="outline" color="warning"> Default </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Badge type="outline" color="danger"> Default </Badge>
                    </div>
                </div>
            </WrapperShadow>
            <div className="mt-5"></div>
            <WrapperShadow>
                <h5 className="mb-5 text-lg font-medium text-slate-500">Size</h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <div className="flex items-center justify-center">
                        <Badge size="xs"> Size xs </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Badge size="sm"> Size sm </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Badge size="md"> Size md </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Badge size="lg"> Size lg </Badge>
                    </div>
                    <div className="flex items-center justify-center">
                        <Badge size="xl"> Size xl </Badge>
                    </div>
                </div>
            </WrapperShadow>
        </>
    )
}
