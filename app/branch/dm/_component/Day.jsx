"use client"
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {updateUser} from "@features/user/userSlice";
import {useCallback, useEffect} from "react";

export default function Day({data}){
    const currentUser= useSelector((state) => state.user);
    const currentUserDetails= useSelector((state) => state.userDetails);
    // debugger;
    const userDetails = data[currentUser.email.slice(0,3)];
    const dispatch = useDispatch();
    // useEffect(()=>{
    // useCallback(()=>{
        dispatch(updateUser({
            ...userDetails,
            email: currentUser?.email,
        }));
    // },[currentUser])

    // },[])

    return <p className={'pl-5 font-black text-xl'}>Working Date- {userDetails?.day}</p>
}




