"use client";

import Success from "@/components/modals/success";
import { getDictionary } from "@/get-dictionary";
import { getStaicLanguage } from "@/hooks/getLanguage";
import { getStaicLink } from "@/hooks/getLink";
import { NotificationModal } from "@/viewmodels/Modal";
import { useEffect, useState } from "react";

export async function getStaticProps({ locale: Local }) {
    const dictionary = await getDictionary(getStaicLink());

    return {
        props: {
            dictionary,
        },
    };
}

export default async function SignUp({ dictionary }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [agree, setAgree] = useState(false)
    const lang = getStaicLanguage();

    const [open, setOpen] = useState(false)
    const [notiModal, setNotiModal] = useState<NotificationModal>(
        {
            title: "",
            message: "",
            success: false,
            onClose: () => { setOpen(false); return true }
        })

    return (
        <div className="w-full max-w-lg mx-auto p-6 flex h-full items-center py-16">
            {open === true ? <Success model={notiModal} /> : <></>}
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Đăng ký</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Bạn đã có tài khoản?
                            <a className="text-blue-600 decoration-2 hover:underline font-medium ml-1" href="/auth/login">
                                Đăng nhập
                            </a>
                        </p>
                    </div>

                    <div className="mt-5">
                        <button
                            type="button"
                            className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        >
                            <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                            </svg>
                            Bắt đầu với Google
                        </button>

                        <button
                            type="button"
                            className="mt-2 w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        >
                            <svg className="w-4 h-auto" width="46" height="47" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 
                            18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 
                            0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 
                            1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 
                            24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                            Bắt đầu với Github
                        </button>

                        <div className="py-3 flex items-center text-xs text-dark uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-dark dark:before:border-gray-600 dark:after:border-gray-600">Hoặc</div>
                        <form method="POST">
                            <div className="grid gap-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            aria-describedby="email-error"
                                            className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                        />
                                        <div className="hidden absolute inset-y-0 right-0 items-center pointer-events-none pr-3">
                                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">Hãy nhập Email đúng định dạng</p>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Mật khẩu</label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            aria-describedby="password-error"
                                            className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                        />
                                        <div className="hidden absolute inset-y-0 right-0 items-center pointer-events-none pr-3">
                                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">Mật khẩu phải dài hơn 8 ký tự</p>
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block text-sm mb-2 dark:text-white">Xác nhận mật khẩu</label>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            id="confirm-password"
                                            name="confirm-password"
                                            required
                                            aria-describedby="confirm-password-error"
                                            className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                        />
                                        <div className="hidden absolute inset-y-0 right-0 items-center pointer-events-none pr-3">
                                            <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">Mật khẩu không khớp</p>
                                </div>
                                <div className="flex items-center" onClick={() => setAgree(!agree)}>
                                    <div className="flex">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            checked={agree}
                                            onChange={() => setAgree(!agree)}
                                            className="shrink-0 mt-0.5 border-gray-200 rounded border border-spacing-10 text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <label htmlFor="remember-me" className="text-sm dark:text-white">
                                            Tôi chấp nhận <a className="text-blue-600 decoration-2 hover:underline font-medium" href="/termofservice">điều khoản sử dụng</a>
                                        </label>
                                    </div>
                                </div>
                                {/* End Checkbox */}

                                <button
                                    type="submit" onClick={(e) => {
                                        e.preventDefault();

                                        setNotiModal({
                                            title: "Đăng ký thành công",
                                            message: "Đăng ký thành công, hãy quay lại trang đăng nhập",
                                            success: true,
                                            onClose: () => { setOpen(false); return true }
                                        });
                                        setOpen(true)
                                    }}
                                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                >
                                    Đăng ký
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}