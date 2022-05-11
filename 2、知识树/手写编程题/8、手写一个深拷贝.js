function deepClone (obj={}, map = new Map()) {
    if(typeof obj !== "object"){
        return obj
    }
    if(map.get(obj)){
        return map.get(obj)
    }

    let result = {}

    if(obj instanceof Array || Object.prototype.toString(obj) === "[object Array]"){
        result = []
    }

    // 防止循环应用

    map.set(obj, result)

    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            result[key] = deepClone(obj[key], map)
        }
    }
    return result

}