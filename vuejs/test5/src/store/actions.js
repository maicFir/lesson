var actions = {
    //异步操作multation,不是直接操作state
    add(context){//这个add与mutations中的add相同
        context.commit('add');
        console.log(context)
    }
}
export default actions;