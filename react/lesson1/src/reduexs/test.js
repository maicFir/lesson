let initData = [
    {id:1,name:'数据1'},
    {id:2,name:'数据2'},
    {id:3,name:'数据3'}
]
//reucer
function reducer(state = initData,action){
    switch(action.type){
        case 'test':
            return state
        case 'DELETE':
        return state.filter(item=>
            item.id !== action.payload.id
           )
        default:
          return state
    }
}
export default reducer