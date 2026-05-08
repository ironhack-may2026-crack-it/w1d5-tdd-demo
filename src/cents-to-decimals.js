
function centsToDecimals(amount) {

    if(typeof amount !== "number") {
        return null
    }

    return amount / 100
}
