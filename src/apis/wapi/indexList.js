

export default class IndexListApi {
  static getData(cb) {
    fetch('http://39.107.127.152:8000/getIndexData')
      .then(res => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then(res => {
        cb(res);
      });
  }
}
