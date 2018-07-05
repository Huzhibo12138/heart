export default class OrderApis{
  static getAddressList(cb) {
    fetch('http://39.107.127.152:8000/getAddress')
      .then((data) => {
        data.json().then((data) => {
          cb(data);
        })
      });
  }
}
