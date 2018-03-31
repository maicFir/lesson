var mutations = {    
        add:state=>state.count++, //同步操作，直接操作state
        // decrement:state=>state.count--
        // add(state){
        //     state.count++;
        //     console.log("==",store.state.count)
        // },
        // add:function(state){
        //     state.count++;
        // },
        decrement(states,parms){
            console.log("states",states)
            states.count--;
            console.log(this);
            console.log('parms=',parms)
        }
}

export default mutations