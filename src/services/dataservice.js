import Axios from 'axios';
Axios.defaults.baseURL = 'http://localhost:4000';

export default {
    getAllWiskkeys(){
        return Axios.get('/data')
            .then(resp => {
                console.log(resp);
                return resp.data;
            })
            .catch(err =>{
                //console.log(err);
                return Promise.reject(err);
            })
    },
    // getAllTelefonok(){
    //     return Axios.get('/getTelefonok')
    //         .then(resp => {
    //             //console.log(resp.data);
    //             return resp.data;
    //         })
    //         .catch(err =>{
    //             //console.log(err);
    //             return Promise.reject(err);
    //         })
    // },
    getWhiskyById(id){
        return Axios.get(`/data/${id}`)
            .then(resp => {
               
                return resp.data;
            })
            .catch(err =>{
                //console.log(err);
                return Promise.reject(err);
            })
    },
    saveWhisky(whiskey){
        return Axios.post('/data',whiskey).then(()=>{});
    },
    // updateUser(user,id){
    //     return Axios.put(`/users/${id}`,user).then(()=>{});
    // }


}