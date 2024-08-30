"use client"
import {useSelector} from "@node_modules/react-redux";
import {useDispatch} from "react-redux";
import {updateUser} from "@features/user/userSlice";

export default function Day({data}){
    const currentUser= useSelector((state) => state.user);
    const userDetails = data.find((user) => user.code === currentUser.email.slice(0,3));
    const dispatch = useDispatch();
    dispatch(updateUser({
        ...userDetails,
        email: currentUser?.email,
    }))
    return <p className={'pl-5 font-black text-xl'}>Working Date- {userDetails?.day}</p>
}