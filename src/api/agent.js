import axiox from 'axios'

//查询Devops列表
const getList  = (filter) => {
    return axiox.post('url',filter,res =>{
        if(res.code === 200){
            return res.data
        }else{

            console.error('url接口错误 = ' + res.msg);
        }
    })
};
//修改数据 包括增加和修改
const updateData  = (data) => {
    return axiox.post('url',data,res =>{
        if(res.code === 200){
            return res.data
        }else{

            console.error('url接口错误 = ' + res.msg);
        }
    })
};
//deney数据
const auditData = (data) => {
    return axiox.post('url',data,res =>{
        if(res.code === 200){
            return res.data
        }else{
            console.error('url接口错误 = ' + res.msg);
        }
    })
};

export {
    getList,
    updateData,
    auditData
}
