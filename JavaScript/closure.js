function bankaccount(){
    let balance =1000
    return {
        withdraw(amount){
          balance -=amount
        }
    }
}