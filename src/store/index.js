import { createStore } from 'vuex'
import {ADD_TO_CART, ADD_TO_COUNTER} from "../../../supermall-main/src/store/constant";

export default createStore({
  state: {
    cartList: []
  },
  mutations: {
    // addCart(state, info) {
    //   // console.log(info);
    //   // 1.查看是否添加过
    //   const oldInfo = state.cartList.find(item => item.iid === info.iid)
    //
    //   // 2.+1或者新添加
    //   if (oldInfo) {
    //     oldInfo.count += 1
    //   } else {
    //     info.count = 1
    //     info.checked = true
    //     state.cartList.push(info)
    //   }
    // }
    addtocart(state,payload){
      state.cartList.push(payload);
    },
    addtocounter(state, payload){
      payload.count ++ ;
    }
  },
  actions: {
    // 加入购物车
    addCart({state, commit}, payload){
      return new Promise((resolve, reject)=>{
        //1.查找之前数组中是否含有该商品
        let product = state.cartList.find((item)=> item.iid === payload.iid);

        //2. 判断product,这里涉及深拷贝与浅拷贝
        if(product){
          commit('addtocounter', product);
          resolve('成功添加购物车num+1');
        }else {
          payload.count = 1;
          payload.checked = false;
          commit('addtocart', payload);
          resolve('成功添加购物车');
        }
      })
    }
  },
  modules: {
  }
})
