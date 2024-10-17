const isValidDate = (dateFormat) =>{
    return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((19|20)[0-9]{2})$/.test(dateFormat)
}

console.log(
    isValidDate("12/15/2021")
)