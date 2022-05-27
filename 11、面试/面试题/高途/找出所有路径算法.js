const list = [
    {id: 6},
    {id: 2, children: [5]},
    {id: 13},
    {id: 5, children: [10, 11]},
    {id: 1, children: [2, 3, 4]},
    {id: 10},
    {id: 8, children: [13]},
    {id: 4, children: [8, 9]},
    {id: 9},
    {id: 3, children: [6, 7]},
    {id: 11, children: [14]},
    {id: 14},
    {id: 7, children: [12]},
    {id: 12}
];
function getPaths(list) {

    // 找到所有的叶子结点
    const leaf = list.filter((item) => !item.children);
    console.log(leaf, 'leaf')
    const getParent = (list, cur) => {

        return (list.find(item => {
            item?.children && item?.children.includes(cur)
        }) || {}).id;
    }
    const res = [];
    for(let i = 0; i < leaf.length; i++) {
        const curId = leaf[i].id;
        const path = [curId];

        let parentId = getParent(list, curId);
        console.log(parentId, 'parentId')
        while(parentId) {
            path.unshift(parentId);
            parentId = getParent(list, parentId);
        }
        if(path.length > 1) {
            res.push(path);
        }
    }

    return res;
}

console.log(getPaths(list), 'res')