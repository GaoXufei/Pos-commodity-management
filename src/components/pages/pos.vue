<template>
  <div class="pos">
    <el-row class="pos-wrap">
      <el-col :span="7" class="pos-order">
        <el-tabs >
          <el-tab-pane label="订单" class="paneHeight">
            <el-table :data="goodDate" class="goodTable">
              <el-table-column prop="goodName" label="商品名称" fixed="left"></el-table-column>
              <el-table-column prop="goodNumber" label="数量(个)"></el-table-column>
              <el-table-column prop="goodPrice" label="价格(元)"></el-table-column>
              <el-table-column label="操作" fixed="right">
                <template slot-scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="goodOrderBtn">
              <el-button type="success" >结账</el-button>
              <el-button type="warning" >挂单</el-button>
              <el-button type="" >外卖</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单" class="paneHeight">
2
          </el-tab-pane>
          <el-tab-pane label="外卖" class="paneHeight">
3
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
              <li v-for="goods in hotGoods">
                <span v-text="goods.goodName"></span><i>{{ goods.goodPrice | PriceConversion }}</i>
              </li>
            </ul>
          </div>
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
      goodDate:[
        {
          goodName: '烧饼',
          goodNumber: 99,
          goodPrice: 8
        },
        {
          goodName: '煎饼',
          goodNumber: 53,
          goodPrice: 11
        },
        {
          goodName: '火烧',
          goodNumber: 64,
          goodPrice: 5
        },
        {
          goodName: '卤煮',
          goodNumber: 99,
          goodPrice: 8
        },
        {
          goodName: '咸鸭蛋',
          goodNumber: 99,
          goodPrice: 8
        },
      ],
      hotGoods:[
        {
          goodName: '香辣鸡腿堡',
          goodNumber: 99,
          goodPrice: 88
        },
        {
          goodName: '雪碧',
          goodNumber: 53,
          goodPrice: 11
        },
        {
          goodName: '柠檬照烧鸡',
          goodNumber: 64,
          goodPrice: 51
        },
        {
          goodName: '自然鸡排饭',
          goodNumber: 99,
          goodPrice: 82
        },
        {
          goodName: '苹果',
          goodNumber: 99,
          goodPrice: 88
        },
        {
          goodName: '香辣鸡腿堡',
          goodNumber: 99,
          goodPrice: 88
        },
        {
          goodName: '雪碧',
          goodNumber: 53,
          goodPrice: 11
        },
        {
          goodName: '柠檬照烧鸡',
          goodNumber: 64,
          goodPrice: 51
        },
        {
          goodName: '自然鸡排饭',
          goodNumber: 99,
          goodPrice: 82
        },
        {
          goodName: '苹果',
          goodNumber: 99,
          goodPrice: 88
        },
        {
          goodName: '香辣鸡腿堡',
          goodNumber: 99,
          goodPrice: 88
        },
        {
          goodName: '雪碧',
          goodNumber: 53,
          goodPrice: 11
        },
        {
          goodName: '柠檬照烧鸡',
          goodNumber: 64,
          goodPrice: 51
        },
        {
          goodName: '自然鸡排饭',
          goodNumber: 99,
          goodPrice: 82
        },
        {
          goodName: '苹果',
          goodNumber: 99,
          goodPrice: 88
        },
        {
          goodName: '香辣鸡腿堡',
          goodNumber: 99,
          goodPrice: 88
        },
        {
          goodName: '雪碧',
          goodNumber: 53,
          goodPrice: 11
        },
        {
          goodName: '柠檬照烧鸡',
          goodNumber: 64,
          goodPrice: 51
        },
        {
          goodName: '自然鸡排饭',
          goodNumber: 99,
          goodPrice: 82
        },
        {
          goodName: '苹果',
          goodNumber: 99,
          goodPrice: 88
        },
        {
          goodName: '香辣鸡腿堡',
          goodNumber: 99,
          goodPrice: 88
        },
        {
          goodName: '雪碧',
          goodNumber: 53,
          goodPrice: 11
        },
        {
          goodName: '柠檬照烧鸡',
          goodNumber: 64,
          goodPrice: 51
        },
        {
          goodName: '自然鸡排饭',
          goodNumber: 99,
          goodPrice: 82
        },
        {
          goodName: '苹果',
          goodNumber: 99,
          goodPrice: 88
        },
        {
          goodName: '香辣鸡腿堡',
          goodNumber: 99,
          goodPrice: 88
        },
        {
          goodName: '雪碧',
          goodNumber: 53,
          goodPrice: 11
        },
        {
          goodName: '柠檬照烧鸡',
          goodNumber: 64,
          goodPrice: 51
        },
        {
          goodName: '自然鸡排饭',
          goodNumber: 99,
          goodPrice: 82
        },
        {
          goodName: '苹果',
          goodNumber: 99,
          goodPrice: 88
        },
        {
          goodName: '香辣鸡腿堡',
          goodNumber: 99,
          goodPrice: 88
        },
        {
          goodName: '雪碧',
          goodNumber: 53,
          goodPrice: 11
        },
        {
          goodName: '柠檬照烧鸡',
          goodNumber: 64,
          goodPrice: 51
        },
        {
          goodName: '自然鸡排饭',
          goodNumber: 99,
          goodPrice: 82
        },
        {
          goodName: '苹果',
          goodNumber: 99,
          goodPrice: 88
        },
      ]
    }
  },
  filters:{
    PriceConversion: function(price){
      return `￥${price}`
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
    }
    .hot .content ul li span,
    .hot .content ul li i{
      display: table-cell;
    }
    .hot .content ul li i{
      color: rgb(16, 112, 221);
      padding-left:5px;
    }
</style>

