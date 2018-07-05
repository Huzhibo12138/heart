export default class particularApis{
  static getGoodsDetail(id,cb){
    fetch('http://39.107.127.152:8000/getGoodsDetail?goodsId=' + id)

      .then(res => {
        if(res.ok && res.status === 200){
          return res.json();
        }
      })
      .then(res =>{
       cb(res)
      });
  }
}

