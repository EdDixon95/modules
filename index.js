function fibo(n){
    if (n===0){
        return 0
    }
    if (n===1){
        return 1
    }
    else {
        return fibo(n-1) + fibo(n-2)
    }
}

function fibonacci(x){
    for (let i=1; i<=x; i++){
        console.log(fibo(i))
    }
}
fibonacci(10)