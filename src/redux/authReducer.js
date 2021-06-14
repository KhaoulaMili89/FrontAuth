const initState = {
    user:{},
    token:null,
    isAuth:false,
    errors:null
}

const authReducer = (state = initState, {type,payload}) =>
{
    switch (type) {
        
    
        default:
            return state;
    }
};
export default authReducer;