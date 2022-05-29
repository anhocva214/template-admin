import Button from "@components/elements-ui/button";


export default function LoginPage(){

    return(
        <>
            <main className="bg-gray-100 w-full h-screen flex justify-center items-center">
                <div className="bg-white p-5 min-w-[300px] rounded-md">
                    <form action="#">
                        <h2 className="text-2xl text-slate-700">Chào mừng đến với <strong>Web Admin</strong> 👋 </h2>
                        <h3 className="text-slate-500">Vui lòng đăng nhập bằng tài khoản của bạn</h3>
                        <div className="mt-3" />
                        <div className="flex flex-col text-slate-700 mb-3">
                            <label>Email</label>
                            <input className="outline-0 p-2 border rounded-md" type="email" name="email"  />
                        </div>
                        <div className="flex flex-col text-slate-700 mb-3">
                            <label>Mật khẩu</label>
                            <input className="outline-0 p-2 border rounded-md" type="password" name="password"  />
                        </div>
                        <div>
                            <Button className="block w-full" size='md'> 
                                <span>Đăng nhập</span>
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}