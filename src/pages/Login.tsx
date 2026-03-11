
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../app/store';
import { isLogin } from '../features/auth/authSlice'
import { users } from "../data/users"

type LoginInfo = {
    id: string;
    pwd: string;
}

const schema = yup.object().shape({
  id:yup.string().required("아이디를 입력하세요"),
  pwd:yup.string().required("비밀번호를 입력하세요"),
})

export const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const { register, handleSubmit, formState:{errors}}=useForm<LoginInfo>({
      resolver: yupResolver(schema)
    });
    const [failMsg, setFailMsg] = useState<boolean>(false);

    const onSubmit = (data:LoginInfo) => {
        const isLoggedIn = users.some((user)=>user.id===data.id)
        if(isLoggedIn){
            dispatch(isLogin(data.id));
            navigate("/");
        }else{
            setFailMsg(true);
        }
    }

    return(
        <div className="p-2 text-center">
            <div className="min-h-[50vh] flex flex-col justify-center items-center gap-3 border border-gary-300 rounded">
                <h1 className='font-bold'>로그인</h1>
                <form onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-4 '
                >
                    <div className='flex gap-2 justify-center items-center'>
                        <label>아이디</label>
                        <input {...register("id")} 
                        placeholder="아이디"
                        className='flex-1 p-1 border border-gray-300 rounded'
                        ></input>
                    </div>
                    {errors.id && <p>{errors.id.message}</p>}
                    <div className='flex gap-2 justify-center items-center'>
                        <label>비밀번호</label>
                        <input {...register("pwd")} 
                        placeholder="비밀번호"
                        className='flex-1 p-1 border border-gray-300 rounded'
                        ></input>
                    </div>
                    {errors.pwd && <p>{errors.pwd.message}</p>}
                    <button type="submit"
                    className='w-[40%] m-auto p-1 bg-black text-white'
                    >로그인하기</button>
                </form>
                {failMsg && <p>아이디 혹은 비밀번호가 틀렸습니다.</p>}
            </div>
        </div>
    );
}
