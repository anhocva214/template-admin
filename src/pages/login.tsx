import Button from "@components/elements-ui/button";
import { authActions, authSelector } from "@redux/auth.redux";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "src/models/user.model";


export default function LoginPage(){
    const dispatch = useDispatch<any>()
    const [form, setForm] = useState<UserLogin>(new UserLogin())
    const {isLoadingLogin} = useSelector(authSelector)

    function onChange(e: ChangeEvent<HTMLInputElement>){
        let temp = {...form}
        temp[e.target.name] = e.target.value;
        setForm(temp)
    }

    function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        dispatch(authActions.login(form))
    }

    return(
        <>
            <main className="bg-gray-100 w-full h-screen flex justify-center items-center">
                <div className="bg-white p-5 min-w-[300px] rounded-md">
                    <form onSubmit={onSubmit}>
                        <h2 className="text-2xl text-slate-700">Chào mừng đến với <strong>Web Admin</strong> 👋 </h2>
                        <h3 className="text-slate-500">Vui lòng đăng nhập bằng tài khoản của bạn</h3>
                        <div className="mt-3" />
                        <div className="flex flex-col text-slate-700 mb-3">
                            <label>Username</label>
                            <input onChange={onChange} value={form.username} className="outline-0 p-2 border rounded-md" type="text" name="username"  />
                        </div>
                        <div className="flex flex-col text-slate-700 mb-3">
                            <label>Mật khẩu</label>
                            <input onChange={onChange} value={form.password} className="outline-0 p-2 border rounded-md" type="password" name="password"  />
                        </div>
                        <div>
                            <Button loading={isLoadingLogin} className="block w-full" size='md'> 
                                <span>Đăng nhập</span>
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}