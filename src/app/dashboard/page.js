"use client"

import { useRouter } from "next/navigation";

const DashboardPage = () => {
    const router = useRouter()
    const handleNavigation = () => {
        router.push("/")
    }
    return (
        <>
            <h1>DashboardPage</h1> 
            <button onClick={handleNavigation} className=" bg-pink-500 p-4 ">
            Home
            </button>   
        </>
    );
};

export default DashboardPage;