/** 
 * api接口统一管理
 */
import http from '../utils/http'
export default  {
  /**
     * 修改告警规则
     * @param  {String} 告警规则id
     * @param  {Object} 告警规则参数
     * @return {Promise}
     */
  elevator (offst,limit) {
    return http.get(
      `http://127.0.0.1/elevator/building?offset=${offst}&limit=${limit}`
    )
  },
}

// import api from '../api';// 导入我们的api接口
// export default {  
//  name: 'Address', 
//  created () {
//   this.onLoad();
//  },
//  methods: {   
//   // 获取数据   
//   onLoad() {
//    // 调用api接口，并且提供了两个参数    
//    api.corp.apiAddress({     
//     type: 0,     
//     sort: 1    
//    }).then(res => {
//     // 获取数据成功后的其他操作
//     ………………    
//    })
//   }  
//  }
// }