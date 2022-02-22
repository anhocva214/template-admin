import Button from "@components/elements/button";
import WrapperShadow from "@components/wrapper/wrapper-shadow";


export default function ComponentButtonPage() {


    return (
        <>
            <WrapperShadow>
                <h5 className="mb-5 text-lg font-medium text-slate-500">Basic</h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <Button color="primary"> Default </Button>
                    <Button color='success'> Default </Button>
                    <Button color='warning'> Default </Button>
                    <Button color='danger'> Default </Button>
                </div>
            </WrapperShadow>
            <div className="mt-5"></div>
            <WrapperShadow>
                <h5 className="mb-5 text-lg font-medium text-slate-500">Label</h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <Button type="label" color="primary">Label</Button>
                    <Button type="label" color="success">Label</Button>
                    <Button type="label" color="warning">Label</Button>
                    <Button type="label" color="danger">Label</Button>
                </div>
            </WrapperShadow>
            <div className="mt-5"></div>
            <WrapperShadow>
                <h5 className="mb-5 text-lg font-medium text-slate-500">Outline</h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <Button type="outline" color="primary"> Outline </Button>
                    <Button type="outline" color='success'> Outline </Button>
                    <Button type="outline" color='warning'> Outline </Button>
                    <Button type="outline" color='danger'> Outline </Button>
                </div>
            </WrapperShadow>
            <div className="mt-5"></div>
            <WrapperShadow>
                <h5 className="mb-5 text-lg font-medium text-slate-500">Size</h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <div className="flex items-center justify-center">
                        <Button size="xs"> Size xs </Button>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button size="sm"> Size sm </Button>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button> Size md </Button>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button size="lg"> Size lg </Button>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button size="xl"> Size xl </Button>
                    </div>
                </div>
            </WrapperShadow>
        </>
    )
}
