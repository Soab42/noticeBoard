export default function DeleteVoucher({voucher}) {

    return <button onClick={async ()=>{
        await fetch(`http://localhost:3000/api/dm/voucher/${voucher.voucherType}/${voucher.key}`,{method:"DELETE"})
    }}>Delete- {voucher?.
        key}</button>
}