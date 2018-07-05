export default class searchApis{
  static getSearchFilterList(cb) {
    fetch('http://39.107.127.152:8000/getSearchFilterList')
      .then((data) => {
        data.json().then((data) => {
          cb(data);
        })
      });
  }
  static getGoodsList(query,cb) {
    fetch('http://39.107.127.152:8000/getGoodsList',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(query),
    })
      .then((data) => {
        data.json().then((data) => {
          cb(data);
        })
      });
  }
}
