<template>
  <div class="cartPage">
    <ul class="allItem">
      <li class="shopItem" v-for="(lists,index) in mylist" :key="index">
        <div class="shopHeader ub-box ub-ver ub-between">
          <div class="shopcb ub-box">
            <div class="shopcbBox" @click="checkList(index)">
              <input class="o-t-cb" type="checkbox" v-model="lists.this_all" />
              <label></label>
            </div>
            <div class="ico">
              <span class="shopIco"></span>
            </div>
            <div class="contact">
              <a class="ub-box">
                <span class="b-ver-v">{{lists.shop}}</span>
                <div class="arrow b-ver-v"></div>
              </a>
            </div>
          </div>
          <div class="state">编辑</div>
        </div>
        <div class="group">
          <div
            v-for="(item,nindex) in lists.goods"
            class="card-goods__item van-checkbox"
            :key="nindex"
          >
            <div class="card-goods__item van-checkbox__icon">
              <div class="shopcbBox" @click="clickInput(index,nindex)">
                <input class="o-t-cb" type="checkbox" v-model="item.check_one" />
                <label></label>
              </div>
            </div>
            <div class="van-card">
              <div class="van-card__header">
                <div class="van-card__thumb">
                  <div class="van-image" style="width: 100%; height: 100%;">
                    <img class="van-image__img" :src="item.thumb" />
                  </div>
                </div>
                <div class="van-card__content">
                  <div class="van-card__title">{{item.title}}</div>
                  <div class="van-card__desc van-ellipsis">{{item.desc}}</div>
                  <div class="van-card__bottom">
                    <div class="van-card__num">x{{item.num}}</div>
                    <div class="van-card__price">{{item.price}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="fixBar ub-box ub-between ub-ver">
        <div class="ft-cb">
            <p  @click="checkAll()">
                <input id="cb-footer" type="checkbox" v-model="checkall" class="cb o-t-cb" >
                <label for="cb-footer">全选</label>
            </p>
        </div>
        <div class="total ub-box">
            <div class="t_detail">
                <p class="t_main">总计：<span class="t_price">¥{{allprice}}</span></p> <!---->
            </div>
            <div class="buy">去结算<span class="num">{{total}}件</span></div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allprice: 0,
      checkall: false,
      total:0,
      mylist: [
        {
          shop: "微讯",
          this_all: false,
          goods: [
            {
              title: "深圳欢乐谷",
              desc:
                "深圳欢乐谷是欢乐的起点，走进独具异域风情的西班牙广场，身临其",
              price: 10,
              num: 1,
              thumb:
                "http://img1.qunarzz.com/sight/p0/1904/1e/1e51b5ea32ee8033a3.water.jpg_710x360_66e72b4d.jpg",
              check_one: false
            },
            {
              title: "深圳锦绣中华民俗村",
              desc:
                "锦绣中华民俗村由锦绣中华和中华民俗村2部分组成，全面展示了中",
              price: 20,
              num: 1,
              thumb:
                "http://img1.qunarzz.com/sight/p0/1906/eb/eb39cce9ccab5cada3.img.jpg_710x360_ce266a65.jpg",
              check_one: false
            },
            {
              title: "深圳大梅沙海洋世界",
              desc:
                "锦绣中华民俗村由锦绣中华和中华民俗村2部分组成，全面展示了中",
              price: 30,
              num: 1,
              thumb:
                "http://img1.qunarzz.com/sight/p0/1906/eb/eb39cce9ccab5cada3.img.jpg_710x360_ce266a65.jpg",
              check_one: false
            }
          ]
        },
        {
          shop: "景链",
          this_all: false,
          goods: [
            {
              title: "深圳世界之窗",
              desc:
                "世界之窗，是一个把世界奇观、历史遗迹、古今名胜、民间歌舞表演...",
              price: 40,
              num: 1,
              thumb:
                "http://img1.qunarzz.com/sight/p0/1904/1e/1e51b5ea32ee8033a3.water.jpg_710x360_66e72b4d.jpg",
              check_one: false
            },
            {
              title: "深圳锦绣中华民俗村",
              desc:
                "锦绣中华民俗村由锦绣中华和中华民俗村2部分组成，全面展示了中",
              price: 50,
              num: 1,
              thumb:
                "http://img1.qunarzz.com/sight/p0/1906/eb/eb39cce9ccab5cada3.img.jpg_710x360_ce266a65.jpg",
              check_one: false
            },
            {
              title: "地王大厦",
              desc:
                "锦绣中华民俗村由锦绣中华和中华民俗村2部分组成，全面展示了中",
              price: 60,
              num: 1,
              thumb:
                "http://img1.qunarzz.com/sight/p0/1906/eb/eb39cce9ccab5cada3.img.jpg_710x360_ce266a65.jpg",
              check_one: false
            }
          ]
        },
        {
          shop: "途猫",
          this_all: false,
          goods: [
            {
              title: "深圳世界之窗",
              desc:
                "世界之窗，是一个把世界奇观、历史遗迹、古今名胜、民间歌舞表演...",
              price: 40,
              num: 1,
              thumb:
                "http://img1.qunarzz.com/sight/p0/1904/1e/1e51b5ea32ee8033a3.water.jpg_710x360_66e72b4d.jpg",
              check_one: false
            },
            {
              title: "深圳锦绣中华民俗村",
              desc:
                "锦绣中华民俗村由锦绣中华和中华民俗村2部分组成，全面展示了中",
              price: 50,
              num: 1,
              thumb:
                "http://img1.qunarzz.com/sight/p0/1906/eb/eb39cce9ccab5cada3.img.jpg_710x360_ce266a65.jpg",
              check_one: false
            },
            {
              title: "地王大厦",
              desc:
                "锦绣中华民俗村由锦绣中华和中华民俗村2部分组成，全面展示了中",
              price: 60,
              num: 1,
              thumb:
                "http://img1.qunarzz.com/sight/p0/1906/eb/eb39cce9ccab5cada3.img.jpg_710x360_ce266a65.jpg",
              check_one: false
            }
          ]
        }
      ]
    };
  },
  mounted:function(){
      this.money();
  },
  methods: {
    money:function(){
      var that = this;
      this.allprice=0;
      this.total=0;
      that.mylist.forEach(item1=>{
        item1.goods.forEach(item2=>{
          console.log(item2,'010101')
          if(item2.check_one==true){
            that.total+=item2.num;
            that.allprice+=item2.price;
          }
        })
      })
    },
    checkAll:function(n){
      var that = this;
      that.mylist.forEach(item1 => {
        item1.this_all=!that.checkall
        item1.goods.forEach(item2 => {
          item2.check_one=!that.checkall
        })
      });
      that.money();
    },
    abc:function(){
      var that = this;
        var aaa = that.mylist.filter(item2 =>{
        return item2.this_all==true
      })
      aaa.length==that.mylist.length ? that.checkall = true : that.checkall = false
      that.money();
    },
    checkList: function(i) {
      var that = this;
      that.mylist[i].goods.forEach(item1 => {
        item1.check_one = !that.mylist[i].this_all;
        console.log(item1.check_one, "111");
      });
      that.mylist[i].this_all = !that.mylist[i].this_all;
      var checkAllList = that.mylist.filter(item1=>{
          return item1.this_all == true;
      })
      that.abc();
      // that.money();
    },
    clickInput: function(v, j) {
      var that = this;
      console.log(v, j);
      that.mylist[v].goods[j].check_one = !that.mylist[v].goods[j].check_one;
      var checklist = that.mylist[v].goods.filter(item1 => {
        return item1.check_one == true;
      });
      console.log(checklist,999999);
      checklist.length == that.mylist[v].goods.length
        ? (that.mylist[v].this_all = true)
        : (that.mylist[v].this_all = false);
      console.log(checklist.length, "5588");
      that.abc();
      // that.money();
    }
  }
};
</script>
<style scoped>
.allItem{
    padding-bottom:50px;
}
.shopItem {
  margin-top: 10px;
  background: #fff;
}
.shopHeader {
  height: 40px;
  padding-left: 10px;
}
.shopItem .state {
  padding-right: 15px;
}
.shopcbBox {
  margin-right: 10px;
}
.o-t-cb {
  display: none;
}
.o-t-cb {
  margin-right: 15px;
}
.o-t-cb + label {
  display: inline-block;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAA3NCSVQICAjb4U/gAAAALVBMVEX///+hprehprehprehprehprehprehprehprehprehprehprehprehprehprd0XKVXAAAAD3RSTlMAESIzRGZ3iJmqu8zd7v8zDtSdAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAPVJREFUKJF1k88KQUEUxg/yrygLG4m8gLKVUlZ28gTyAsrCTskLKLL3BFKysJO1IixkYSMkrr5nMPeie+/0OYuZ6TedP3PONyKWecpjYNWKicO8PVh2zDjYSIHTWi0PmzaAeUkk3gYOP5YAhp9THhh8kyww+90XYHySJXG3w3cwtfYRqjb042FuAdyc1dVQV2sWTScMYm96G+KyhfL34uKGRWQkhL4bhtGVFHJu6MNOKlpIFfQqnbsOFZlcdVh5yuasw/RLsNVhFIKlDiP/IHOniWhJtHj6TNoQ2jraZDoOPjg6YioGLhsqMCpFLloub/oR9C/zBsU0n4PhpWahAAAAAElFTkSuQmCC)
    no-repeat;
  background-size: 16px;
}
.o-t-cb:checked + label {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAA3NCSVQICAjb4U/gAAAAh1BMVEX/////UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/UAD/////+vj/9fD/8ev/8On/7OP/6d//5Nj/4NL/3s//2cj/1MH/zLX/w6f/wKP/upv/t5b/rYf/qID/oXb/mWb/jlr/jFj/dTb/cC//biz/bSr/aCP/XhT/Wg7/Vgn/UQL/UADQOR1YAAAALXRSTlMAESJEd4iZqrvM3e7///////////////////////////////////////////9INcYgAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAARJJREFUOI2N1et2wiAMAOBApVZg7j7dzbn71Lz/8w0qcsKtJr/EfgcIDSkADdGpQaMLPahOQCtkb5CE6WWdzbGIeYXOTOncrLOMicp0YdJkq2LRcogLwXOJbK4bVo95TDvEkJGs5kvDSM7CcXF53iH6KXsO7N3RnN2hDyOgaz/9evyIvztQTfe5tBeH00DB0HLfl9au42gAPeFW+zjUMOEeduSPBiwchdvbbdtReGNtkD+lQ5LMmw3y97p0mh7Pq5PvR3efOXc89MBH6d3dX56dSl/hi5NXNedeYVoUXtacK4qszJ6qzpdZVriHzXPFjYXLvgr8y8W+rvwGwG8p7CbFb3v8Rgr81gzsZj9ulX4+0kf/qVXH8bP2GwMAAAAASUVORK5CYII=)
    no-repeat;
  background-size: 16px;
}
.shopItem .ico .shopIco {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOUUwRjA0MTczMzAxMUU1OTIxNEVBNEM3N0VGQTM4QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxOUUwRjA0MjczMzAxMUU1OTIxNEVBNEM3N0VGQTM4QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5RTBGMDNGNzMzMDExRTU5MjE0RUE0Qzc3RUZBMzhCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE5RTBGMDQwNzMzMDExRTU5MjE0RUE0Qzc3RUZBMzhCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PGrJXgAAATJQTFRF////X2Ru9fX2/v7+YGVve3+If4OLZ2x1/P39/f394uPl9/f4bHF6YWZwu73B+/v7zc/SkZSb9PT16Onr1dbZmJuio6ar9PX1vL/DeHyFam94+/v89/j41tfZY2hxZWp06errkpWc+fn58vP0fYGJrbC13N3f2drc5+fptLe7+fr6b3R9j5KZ7e7vu73CmZyiaG12ZWlzkJOa29zecHR9x8jM8PDxiIyU7OztqKux4eLkgISM0dLV7/DxYmZwbXF71NbYam547+/wztDTnKCmc3eAsbO4hoqR4OHjd3uE4+TllpmfoKOp0dPVm56k5+jpcXZ+xMbK5ebog4eOeX2F6uvs3N7gzM3QpKetsrW6d3yEhYmRwsTIfIGJ9vb3iIyTo6ase3+H3d7goaSqhYiQwMLG39poDAAAASpJREFUeNrMk1VzwzAQhLWyY4zDSYMNlJkZUmZm5v7/v1BJTj2uredM92V37j7rdPaYkDapI6siIPU94QMmIZG65/X7oVZS9K826jjxgByS4bEfmKCtaOvISC72jFgrjaKgSIA8rtygFJCXrfZSRZ8Ia9BtJRLcIULIFsYE8IZPIgV6URTAMJ7YnMCWfAEDsDlwiAF36M2U6yOJuPB5OCXuMewPcj8GNrmnzpAVwAIuhdMoNIuYM+OAfm4QS2M3OOoijXvg1j2y0glM68DuHFBtAut3gDPEirnfjTNR9lCxJ17aYWG1fk2Wu1lh+9v/vQ8uDO7mqVUWhdnFFV87+Sp51eaD5mWAhgEK/CvAQS0M1KB6+RFSfXlAWpP1l9K+88o0pEa7/lryI8AAOBcYGk96HRwAAAAASUVORK5CYII=)
    no-repeat;
  background-size: contain;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.shopItem .arrow {
  width: 16px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAaCAYAAABozQZiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MjQzMkFFNTQ0MEYxMUU1OTZDRjk2ODYxMEYzRTU0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MjQzMkFFNjQ0MEYxMUU1OTZDRjk2ODYxMEYzRTU0MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyNDMyQUUzNDQwRjExRTU5NkNGOTY4NjEwRjNFNTQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUyNDMyQUU0NDQwRjExRTU5NkNGOTY4NjEwRjNFNTQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YpVSkgAAATZJREFUeNpinDlzJhsDA0MBEP8E4mlpaWm/GYgETECcC8SdQDwBiNfOmjWLjRTNv5D4vkC8hlgDQJqnAfEycgxgAvrxL5COI8cAkM0M5BrABGOQYwDj////UQSACpmB1CIgjkIS3gcyCGjBN6w2Y3HBXCRhJyDeAjSYC69mJANSgXgGkrAjugFMuAIDaADIP1n4DMDwMzoAKmSEpoUMJOHbQGzERCghILlgDpKwKhDPZiIyGbMCsSya2HuCmqFxvAaI3ZGEdwBxDhORGn2RhEEB6AX0zj+cAYZD42IgjoeGA/aowqERlGwTYRqxasajMQ6aeLCnMFI0omiGZojFxGqEa0bKSWHEagQBZikpKWxZkKBGmM1xaBo3EaMRphk50DYDcSgxGkGABYgXgJwPxXNIKfQBAgwAqZCKsABxZ/8AAAAASUVORK5CYII=)
    center center no-repeat;
  background-size: 7px 10px;
  min-height: 14px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
/**/
.van-checkbox {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  overflow: hidden;
  -webkit-user-select: none;
  user-select: none;
}
.card-goods__item {
  position: relative;
  background-color: #fafafa;
}
.van-checkbox__icon {
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  height: 1em;
  font-size: 20px;
  line-height: 1em;
}
.card-goods__item .van-checkbox__icon {
  top: 50%;
  left: 10px;
  z-index: 1;
  position: absolute;
  margin-top: -10px;
}
.van-card {
  position: relative;
  box-sizing: border-box;
  padding: 8px 16px;
  color: #323233;
  font-size: 12px;
  background-color: #fafafa;
  text-align: left;
  padding-left: 40px;
}
.van-card__header {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.van-card__thumb {
  position: relative;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  width: 90px;
  height: 90px;
  margin-right: 8px;
}
.van-image {
  position: relative;
  display: inline-block;
}
.van-image__img {
  display: block;
  width: 100%;
  height: 100%;
}
.van-card__content {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  min-height: 90px;
}
.van-card__desc,
.van-card__title {
  word-break: break-all;
}
.van-card__title {
  max-height: 32px;
  font-weight: 500;
  line-height: 16px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.van-card__desc {
  max-height: 20px;
  color: #7d7e80;
}
.van-ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.van-card__num {
  float: right;
}
/*底部*/
.fixBar {
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 50px;
    background: hsla(0,0%,100%,.95);
    color: #333;
    font-size: 14px;
    position: fixed;
    z-index: 120;
    bottom: 0;
    padding-bottom: env(safe-area-inset-bottom);
}
.fixBar .ft-cb {
    position: relative;
    width: 60px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.ft-cb label{
    width: 60px;
    margin-left: 20px;
    padding-left: 20px;
}
/* .allItemv{

}
.bundlev2{
	  margin-top: .32rem;
    background: #fff;
}
.o-t-title-shop {
    width: 100%;
    height: 1.067rem;
    padding-left: .32rem;
    box-sizing: border-box;
    background: #fff;
    position: relative;
}
.o-t-title-shop .tcont {
    width: 100%;
    height: 1.067rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.o-t-title-shop .tcont {
    font-size: 24px;
}
.o-t-title-shop .shopcb {
    -webkit-box-pack: center;
    -ms-box-pack: center;
    -o-box-pack: center;
    box-pack: center;
    -webkit-box-align: center;
    -ms-box-align: center;
    -o-box-align: center;
    box-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
    margin-right: .32rem;
}
.o-t-title-shop .tcont .contact, .o-t-title-shop .tcont .shopcb {
    -webkit-box-align: center;
    -ms-box-align: center;
    -o-box-align: center;
    box-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
}
.o-t-title-shop .o-t-cb+label {
    display: inline-block;
    width: .533rem;
    height: .533rem;
    cursor: pointer;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAA3NCS…hJtHj6TNoQ2jraZDoOPjg6YioGLhsqMCpFLloub/oR9C/zBsU0n4PhpWahAAAAAElFTkSuQmCC) no-repeat;
    background-size: .52rem;
}
.o-t-title-shop .o-t-cb+label:after {
    position: absolute;
    display: inline-block;
    width: 1.6rem;
    height: 100%;
    top: 0;
    cursor: pointer;
}
.o-t-title-shop .ico {
    margin-right: .32rem;
    width: .427rem;
}
.o-t-title-shop .tcont .ico {
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-box-align: center;
    -o-box-align: center;
    display: -webkit-box;
    display: -ms-box;
    display: -o-box;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.o-t-title-shop .ico span {
    font-size: .427rem;
}
.o-t-title-shop .ico .shopIco_B, .o-t-title-shop .ico .shopIco_C, .o-t-title-shop .ico .shopIco_HK, .o-t-title-shop .ico .shopIco_SM, .o-t-title-shop .ico .shopIco_YY {
    display: inline-block;
    width: .427rem;
    height: .427rem;
}
.o-t-title-shop .ico .shopIco_C {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGXRFW…EK/CvAQS0M1KB6+RFSfXlAWpP1l9K+88o0pEa7/lryI8AAOBcYGk96HRwAAAAASUVORK5CYII=) no-repeat;
    background-size: contain;
}
.o-t-title-shop .contact {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}
.o-t-title-shop .tcont .contact, .o-t-title-shop .tcont .shopcb {
    -webkit-box-align: center;
    -ms-box-align: center;
    -o-box-align: center;
    box-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
}
.o-t-title-shop .contact a {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    padding-right: .32rem;
    box-sizing: border-box;
}
.o-t-title-shop .contact .title {
    margin-right: .32rem;
    line-height: .347rem;
    text-align: left;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -moz-line-clamp: 1;
    -ms-line-clamp: 1;
    -o-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    -ms-box-orient: vertical;
    -o-box-orient: vertical;
    box-orient: vertical;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
    word-break: break-all;
}
.o-t-title-shop .contact .arrow {
    width: .32rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAaCAYAAABozQZiAAAAGXRFW…1xaBo3EaMRphk50DYDcSgxGkGABYgXgJwPxXNIKfQBAgwAqZCKsABxZ/8AAAAASUVORK5CYII=) center center no-repeat;
    background-size: .2rem .347rem;
}
.o-t-title-shop .contact .arrow {
    min-width: .32rem;
    min-height: .347rem;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    background-position: left center;
}
.o-t-title-shop .state {
    margin-left: .32rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.o-t-title-shop .state .state-cont {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -webkit-box-align: center;
    -ms-box-align: center;
    -o-box-align: center;
    box-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
    cursor: pointer;
}
.o-t-title-shop .state .state-cont p {
    width: 1.28rem;
    text-align: center;
    cursor: pointer;
}
.o-t-title-shop .state .state-cont .edit {
    border-left: .01333rem solid #e7e7e7;
}
.o-t-title-shop .state .state-cont:first-child .edit {
    border: none;
} */
</style>