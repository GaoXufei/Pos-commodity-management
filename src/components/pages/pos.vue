<template>
  <div class="pos">
    <el-row class="pos-wrap">
      <el-col :span="7" class="pos-order">
        <el-tabs >
          <el-tab-pane label="订单" class="paneHeight">
            <el-table :data="goodsData" class="goodTable">
              <el-table-column prop="goodsName" label="商品名称" fixed="left"></el-table-column>
              <el-table-column prop="goodsPrice" label="单价(元)"></el-table-column>
              <el-table-column label="操作" fixed="right">
                <template slot-scope="scope">
                  <el-input-number v-model="scope.row.goodsCount" size="mini" :min="1" :max="99" controls-position="right" class="goodsCountBox"></el-input-number>
                  <el-button type="text" size="small" @click="removeOrderItem(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="goodsSummary">
              <i>数量：</i><span>{{ GoodsDataTotalCount }}件</span>
              <i>价格：</i><span>{{ GoodsDataTotalMoney | PriceConversion }}</span>
            </div>
            <div class="goodOrderBtn">
              <el-button type="success" @click="checkOut">结账</el-button>
              <el-button type="warning" >挂单</el-button>
              <el-button type="">外卖</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单" class="paneHeight">
            暂时无法挂单
          </el-tab-pane>
          <el-tab-pane label="外卖" class="paneHeight">
            外卖休息中
          </el-tab-pane>
        </el-tabs>
        
      </el-col>
      <el-col :span='17'>
        <div class="hot">
          <div class="title">
            <h4>热门商品</h4>
          </div>
          <div class="content">
            <ul>
              <li v-for="goods in hotGoods" :key="goods.id" @click="addOrderList(goods)">
                <span v-text="goods.goodsName"></span><i>{{ goods.price | PriceConversion }}</i>
              </li>
            </ul>
          </div>
        </div>
        <div class="goodsType">
          <el-tabs type="border-card">
            <el-tab-pane label="汉堡">
              <ul class="cookList">
                <li v-for="cook in goodsType0" :key="cook.goodsId" @click="addOrderList(cook)">
                  <div class="goodsImg">
                    <img :src="cook.goodsImg" alt="">
                  </div>
                  <p>
                    <span>{{ cook.goodsName }}</span>
                    <i>{{ cook.price | PriceConversion }}</i>
                  </p>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class="cookList">
                <li v-for="cook in goodsType1" :key="cook.goodsId" @click="addOrderList(cook)">
                  <div class="goodsImg">
                    <img :src="cook.goodsImg" alt="">
                  </div>
                  <p>
                    <span>{{ cook.goodsName }}</span>
                    <i>{{ cook.price | PriceConversion }}</i>
                  </p>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class="cookList">
                <li v-for="cook in goodsType2" :key="cook.goodsId" @click="addOrderList(cook)">
                  <div class="goodsImg">
                    <img :src="cook.goodsImg" alt="">
                  </div>
                  <p>
                    <span>{{ cook.goodsName }}</span>
                    <i>{{ cook.price | PriceConversion }}</i>
                  </p>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class="cookList">
                <li v-for="cook in goodsType3" :key="cook.goodsId" @click="addOrderList(cook)">
                  <div class="goodsImg">
                    <img :src="cook.goodsImg" alt="">
                  </div>
                  <p>
                    <span>{{ cook.goodsName }}</span>
                    <i>{{ cook.price | PriceConversion }}</i>
                  </p>
                </li>
              </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: 'pos',
  data(){
    return {
      goodsType0:[],
      goodsType1:[],
      goodsType2:[],
      goodsType3:[],
      goodsData:[],
      hotGoods:[],
      totalCount: 0,
      totalPrice: 0
    }
  },
  filters:{
    PriceConversion: function(price){
      return `￥${price}`
    }
  },
  created(){
    (async () => {

      let responseOften = await this.$axios.get('http://jspang.com/DemoApi/oftenGoods.php');
      let responseType = await this.$axios.get('http://jspang.com/DemoApi/typeGoods.php');
      this.hotGoods = responseOften.data;
      this.goodsType0 = responseType.data[0];
      this.goodsType1 = responseType.data[1];
      this.goodsType2 = responseType.data[2];
      this.goodsType3 = responseType.data[3];

    })()
    
    
    
  },
  methods:{
    addOrderList(goods){
      // 商品是否已存在订单列表中
      let isHas = false;
      for(let i of this.goodsData){
        if(i.goodsId === goods.goodsId){
          isHas = true
        }
      }
      // 根据isHas判断的值编写业务逻辑
      if(isHas){
        // 改变列表中商品的数量
        this.addOrderCount(goods);
      }else{
        // 创建一个新对象
        function newGoods(goods){
          return {
            goodsId: goods.goodsId,
            goodsName: goods.goodsName,
            goodsCount: 1,
            goodsPrice: goods.price
          }
        }
        
        // 将新建对象压入订单列表数组中
        this.goodsData.push(newGoods(goods))

      }

      
      
      
    },
    addOrderCount(goods){
      /**@goods
       * 获取到当前商品对象 goods
       * 用过滤器单独操作当前对象
       * 添加当前对象到订单列表对象中
       */
      this.goodsData.filter(x => x.goodsId === goods.goodsId)[0].goodsCount++;
      
    },
    removeOrderItem(goods){
      /**@goods
       * 获取到当前商品对象 goods
       * 用过滤器单独操作当前对象
       * 从订单列表对象中去掉当前商品对象
       */
      this.goodsData.splice(this.goodsData.filter(x => x.goodsId === goods.goodsId)[0], 1)
    },
    checkOut(){
      /**@augments
       * 结账
       */
      if(this.totalCount !== 0){
        this.$message({
          message: '结账成功！',
          type: 'success'
        })
        this.goodsData = [];
      }else{
        this.$message({
          message: '什么都没有！',
          type: 'warning'
        })

      }
    }
 
  },
  watch:{
    
  },
  computed: {
    /**@augments
     * 订单列表 商品数量
     */
    GoodsDataTotalCount(){
      let totalCount = 0;
      this.goodsData.forEach(ele => {
        totalCount += ele.goodsCount;
      })
      this.totalCount = totalCount
      return totalCount;
    },
    GoodsDataTotalMoney(){
      let totalPrice = 0;
      this.goodsData.forEach(ele => {
        totalPrice += (ele.goodsPrice * ele.goodsCount);
      })
      this.totalPrice = totalPrice
      return totalPrice;
    }
  }
}
</script>

<style scoped>
    .pos{
      padding-left: 60px;
      box-sizing: border-box;
      height:100%;
      font-size: 12px;
    }
    .pos .pos-wrap{
      height:100%;
      width:100%;
    }
    .pos .pos-wrap .pos-order{
      border-right:1px solid #ccc;
      height: 100%;
      padding:0 10px;
      box-sizing: border-box;
    }
    
    .pos .pos-wrap .pos-order .paneHeight{
      height:100%;
      width: 100%;
      
    }
    .goodTable{
      width:100%;
      box-sizing: border-box;
      border:1px solid #eee;
    }
    .goodOrderBtn{
      margin-top:10px;
    }
    .hot{
      padding:0 10px;
      box-sizing: border-box;
    }
    .hot .title{
      border-bottom:1px solid #ccc;
      box-sizing: border-box;
      line-height:40px;
      height:40px;
    }
    .hot .title > h4{
      font-weight: lighter;
    }
    .hot .content ul{
      overflow: hidden;
      margin-left: -10px;
    }
    .hot .content ul li{
      float: left;
      display: table;
      margin:10px;
      box-sizing: border-box;
      border:1px solid #ccc;
      padding:10px 15px;
      border-radius: 5px;
      cursor: pointer;
    }
    .hot .content ul li span,
    .hot .content ul li i{
      display: table-cell;
    }
    .hot .content ul li i{
      color: rgb(16, 112, 221);
      padding-left:5px;
    }
    .goodsType{
      padding:0 10px;
      box-sizing: border-box;
    }
    .goodsType .cookList{
      width:100%;
      overflow: hidden;
      margin-left: -10px;
      margin-top: -10px;
    }
    .goodsType .cookList li{
      width:180px;
      float: left;
      margin-left:10px;
      display: table;
      margin-top: 10px;
      cursor: pointer;
    }
    .goodsType .cookList li div.goodsImg{
      width:50%;
      display: table-cell;
      vertical-align: top;
    }
    .goodsType .cookList li div.goodsImg img{
      width:100%;
    }
    .goodsType .cookList li p{
      display: table-cell;
      vertical-align: top;
      padding-left:10px;
      box-sizing: border-box;
    }
    .goodsType .cookList li p span{
      margin-bottom:20px;
      font-size: 13px;
      display: block;
      overflow: hidden;
    }
    .goodsType .cookList li p i{
      color: darkred;
      display: block;
    }
    .goodsSummary{
      padding:10px;
      box-sizing: border-box;
      background: #eee;
      font-size: 14px;
      font-family: '微软雅黑';
      color: #333;
    }
    .goodsSummary span{
      color: red;
      margin-right: 20px;
    }
    .goodsSummary i{
      
    }
    .goodsCountBox{
      width:60%;
    }
</style>

