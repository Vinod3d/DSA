const calculateAge = (year, month, day)=>{
    const today = new Date()
    const birthDate = new Date(year, month - 1, day);


    const age = today.getFullYear() - birthDate.getFullYear();
    const monthdiff = today.getMonth() - birthDate.getMonth();
    const daydiff = today.getDate() - birthDate.getDate();

    if(monthdiff < 0 || (monthdiff === 0 && daydiff < 0)){
        age--
    }

    return `Your Age is ${age} years ${monthdiff} month ${daydiff}`
}


console.log(calculateAge(1999, 7, 11))