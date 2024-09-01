'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

export  default function VoucherNav(){
    const pathName = usePathname().slice(1);
    return <div className={'mt-2 flex gap-4'}>
        <Link className={`btn  ${
            pathName === "branch/dm/add/recipt" ? "bg-green-400" : "bg-gray-400/20 text-white"
        }`} href={'/branch/dm/add/recipt'}>
            Recipt Voucher
        </Link>
        <Link className={`btn ${
            pathName === "branch/dm/add/payment" ? "bg-green-400" : "bg-gray-400/20 text-white"
        }`} href={'/branch/dm/add/payment'}>
            Payment Voucher
        </Link>
    </div>
}