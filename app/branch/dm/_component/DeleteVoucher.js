import {getBaseUrl} from "@features/api/apiSlice";

export default function DeleteVoucher({voucher}) {

    return <button onClick={async ()=>{
        await fetch(`${getBaseUrl()}/dm/voucher/${voucher.voucherType}/${voucher.key}`,{method:"DELETE"})
    }}>Delete- {voucher?.
        key}</button>
}