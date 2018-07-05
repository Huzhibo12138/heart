<template>
   <div class="details">
     <div class="seller">
          <h2>-&nbsp;卖家说&nbsp;-</h2>
       <div class="desc">
          <div class="desc_left">
            <img src="../../../../static/imgs/tt4.jpg">
            <p>{{data.ownName}}</p>
          </div>
          <div class="desc_right">
            <h6>
              {{data.describe}}
            </h6>
          </div>
       </div>
     </div>
     <div class="seller_details">
       <h2>-&nbsp;商品详情&nbsp;-</h2>
       <ul id="list">
         <li >
           <h3>品牌</h3>
           <h4>{{goodsDetail.brand}}</h4>
         </li>
         <li >
           <h3>品类</h3>
           <h4>{{goodsDetail.classify}}</h4>
         </li>
         <li >
           <h3>颜色</h3>
           <h4>{{goodsDetail.color}}</h4>
         </li>
         <li >
           <h3>款式</h3>
           <h4>{{goodsDetail.style}}</h4>
         </li>
         <li >
           <h3>发源地</h3>
           <h4>{{goodsDetail.address}}</h4>
         </li>
         <li >
           <h3>成色</h3>
           <h4>{{goodsDetail.quality}}</h4>
         </li>
         <li >
           <h3>持有配件</h3>
           <h4>身份证</h4>
         </li>
         <li >
           <h3>商品ID</h3>
           <h4>{{goodsDetail.goodsId}}</h4>
         </li>
       </ul>
     </div>
     <div class="seller_img">
       <h2>-&nbsp;图文详情&nbsp;-</h2>
       <ul id="lit">
         <li v-for="p in data.banner"><img :src="p.src"></li>
       </ul>
     </div>
     <div class="pro">
       <h2>-&nbsp;心上承诺&nbsp;-</h2>
       <!--选项卡效果-->
       <ul class="sel">
         <li class="sel_active">交易流程</li>
         <li>安全保障</li>
         <li>商品服务</li>
         <li>退货政策</li>
       </ul>
       <div id="del_intro">
         <div class="del_intro_active"><img src="/static/imgs/tt1.png"></div>
         <div>
           <h2>人保承保</h2>
           <p>心上平台已和中国人民保险达成一致，所有认证商品均由人保财险承保产品责任险。</p>
           <h2>权威鉴定</h2>
           <p>凡是在心上平台交易的宝贝，均由卖家寄送给平台进行正品验证，鉴定通过后，由平台将宝贝邮寄给买家。</p>
           <h2>假一赔十</h2>
           <p>买家如果在平台买到假货，平台会以三倍货价予以赔偿。</p>
           <h2>担保交易</h2>
           <p>心上平台作为第三方平台，为买卖双方提供担保服务，使双方交易更加安全有保障，获得更安心的交易体验。</p>
         </div>
         <div>
           <h2>免费灭菌</h2>
           <p>凡是在心上平台购买的宝贝，均附赠灭菌服务，保证您收到的宝贝干净、安全，使您可以安心使用。</p>
           <h2>技术服务</h2>
           <p>心上平台将为您提供从买到卖的相关技术服务，其中包括平台技术服务、专属一对一客服服务、商品养护服务等，保证您高效率且舒心的交易体验。</p>
           <h2>购买包邮</h2>
           <p>心上平台针对鉴定通过的商品，提供顺丰包邮的服务以确保宝贝能最快速的送达买家手中。</p>
         </div>
         <div>
           <p>由于二手闲置商品的特殊性，签收商品不支持退货，敬请原谅。<br/>
           如遇到特殊情况买卖协商达成一致的退货退款，平台将收取99元退货服务费。<br/>
             卖家寄到平台鉴定不通过的商品(通常为商品太旧、描述不符、非正品等原因)平台将自动为您退款。<br/>
             付款后，如遇到联系不上卖家或卖家无货不发货的情况，可申请“取消订单”。卖家同意后，或5天系统自动确认同意后平台将自动为您退款
           </p>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
    export default {
        name: "ParticularDetails",
        data(){
          return{
            // list:[{pai:'品牌:',ming:'CHANEL'},
            //   {pai:'品类:',ming:'单肩包'},
            //   {pai:'持有配件:',ming:'身份卡'},
            //   {pai:'颜色:',ming:'如图'},
            //   {pai:'款式:',ming:'女士'},
            //   {pai:'发源地:',ming:'法国'},
            //   {pai:'成色:',ming:'95新'},
            //   {pai:'商品ID:',ming:'2077642'},
            // ],
            // pics:[
            //   {picturl:'./static/imgs/tt5.jpg'},
            //   {picturl:'../../../../static/imgs/tt6.jpg'},
            //   {picturl:'../../../../static/imgs/tt7.jpg'},
            //   {picturl:'../../../../static/imgs/tt8.jpg'},
            //   {picturl:'../../../../static/imgs/tt9.jpg'},
            //   {picturl:'../../../../static/imgs/tt10.jpg'},
            //   {picturl:'../../../../static/imgs/tt11.jpg'},
            //   {picturl:'../../../../static/imgs/tt13.jpg'},
            //   {picturl:'../../../../static/imgs/tt12.jpg'}
            // ],
            data:{},
            goodsDetail:{}
          }
        },
      created(){
        this.$on('pushdetails',(data)=>{
          // console.log(data);
          this.data = data.data;
          this.goodsDetail = data.data.goodsDetail;
        })
      },
      mounted(){
          $('.sel li').click(function(){
            $('.sel li').removeClass('sel_active');
            $(this).addClass('sel_active');
            var index=$('.sel li').index($(this));
            $('#del_intro div').removeClass('del_intro_active');
            $('#del_intro div').eq(index).addClass('del_intro_active');
          })
      }
    }
</script>

<style lang="scss" scoped>
  .seller{
    width:100%;
    /*height:2.22rem;*/
    border-bottom: 1px solid #f7f7f7;
    text-align: center;
    padding-top: 0.4rem;
    box-sizing: border-box;
    h2{
      font-size: 0.16rem;
      color:#212421;
    }
  }
  .desc{
    width:100%;
    /*height:1.45rem;*/
    display: -webkit-flex;
    padding:0.2rem 0.22rem 0 0.22rem;
    box-sizing: border-box;

    .desc_left img{
      display:block;
      width:0.64rem;
      height:0.64rem;
      border:none;
      border-radius: 50%;
    }
    p{
      font-size: 0.12rem;
      width:0.64rem;
      white-space: nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      color:#111411;
    }
    .desc_right{
      width:2.55rem;
      /*height:1.10rem;*/
      background:#f7f3f7;
      padding:0.14rem 0.1rem 0.14rem 0.1rem;
      box-sizing: border-box;
      margin-left: 0.13rem;
      h6{
        font-size: 0.15rem;
        color:#3c3e3c;
        text-align:left;
        font-weight: 100;
        color:#282a28;
      }
    }
  }
  .seller_details{
    width:100%;
    /*height:4.3rem;*/
    border-bottom: 1px solid #f7f7f7;
    text-align: center;
    /*padding-top: 0.4rem;*/
    box-sizing: border-box;
    margin-top: 0.6rem;
    h2{
      font-size: 0.16rem;
      color:#212421;
    }
  }
  #list{
    padding:0 0.2rem;
    box-sizing: border-box;
    li{
      display: -webkit-flex;
      justify-content: space-between;
      border-bottom:1px solid #f9f9f9;
      width:100%;
      height:0.4rem;
      h3{
        font-size: 0.17rem;
        line-height: 0.4rem;
        color:#646564;
        font-weight: 100;
      }
      h4{
        font-size: 0.17rem;
        color:#1f221f;
        font-weight: 100;
        line-height: 0.4rem;
      }
    }
  }
  .seller_img{
    width:100%;
    border-bottom: 1px solid #f7f7f7;
    text-align: center;
    padding-top: 0.4rem;
    box-sizing: border-box;
    h2{
      font-size: 0.16rem;
      color:#212421;
      margin-bottom: 0.2rem;
    }
  }
  #lit {
    padding:0 0.18rem 0.42rem 0.18rem;
    box-sizing: border-box;
    border-bottom: 1px solid #f7f7f7;

    li{
      width:3.32rem;
      height:3.34rem;
      margin-top: 0.02rem;
      padding:0 0.05rem;
      img{
        display:block;
        width:3.32rem;
        height:3.34rem;
      }
    }
  }
  .pro{
    width:100%;
    border-bottom: 1px solid #f7f7f7;
    text-align: center;
    padding-top: 0.4rem;
    box-sizing: border-box;
    h2{
      font-size: 0.16rem;
      color:#212421;
    }
  }
  .sel{
    width:100%;
    display: -webkit-flex;
    justify-content: space-around;
    li{
      width:0.6rem;
      height:0.32rem;
      font-size: 0.13rem;
      color:#494a49;
      line-height: 0.32rem;
      text-align: center;
    }
    .sel_active{
      color:#ff4f44;
      border-bottom: 3px solid #ff4f44;
    }
  }
  #del_intro{
    width:100%;
    position:relative;
    div{
      width:100%;
      position:absolute;
      left:0;
      top:0;
      display:none;
    }
    .del_intro_active{
      display:block;
    }
  }
  #del_intro>div:nth-child(1){
    width:100%;
    margin:0 auto;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
    img{
      display: block;
      width:3.4rem;
      margin-left:0.2rem;
    }
  }
  #del_intro>div:nth-child(2){
    padding:0 0.18rem 0.42rem 0.18rem;
    box-sizing: border-box;
    h2{
      text-align: left;
      font-size: 0.15rem;
      color:#2c2c2c;
      line-height: 0.37rem;
      margin-top: 0.22rem;
    }
    p{
      font-size: 0.13rem;
      color:#7a7a7a;
      text-align: left;
      line-height: 0.25rem;
    }
  }
  #del_intro>div:nth-child(3){
    padding:0 0.18rem 0.42rem 0.18rem;
    box-sizing: border-box;
    h2{
      text-align: left;
      font-size: 0.15rem;
      color:#2c2c2c;
      line-height: 0.37rem;
      margin-top: 0.22rem;
    }
    p{
      font-size: 0.13rem;
      color:#7a7a7a;
      text-align: left;
      line-height: 0.25rem;
    }
  }
  #del_intro>div:nth-child(4){
    padding:0 0.18rem 0.42rem 0.18rem;
    box-sizing: border-box;
    p{
      font-size: 0.13rem;
      color:#7a7a7a;
      text-align: left;
      line-height: 0.25rem;
      margin-top: 0.3rem;
    }
  }


</style>
