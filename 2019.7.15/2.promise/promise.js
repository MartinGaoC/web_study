class Promise {
    constructor(executor){
        this.status = 'padding'
        this.value = undefined;
        this.reason = undefined;
        let resolve = (value) => {
            if(this.status === 'padding'){
                this.status = 'fulfilled'
                this.value = value
            }
            
        }
        let reject = (reason) => {
            if(this.status === 'padding'){
                this.status = 'rejected'
                this.reason = reason
            }
        }
        console.log()
        executor(resolve,reject)
    }
    then(onFulfilled,onRejected){
        if(this.status === 'fulfilled'){
            onFulfilled(this.value)
        }
        if(this.status === 'rejected'){
            onRejected(this.reason)
        }
        
    }
}

module.exports = Promise;