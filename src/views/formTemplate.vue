<template>
  <div class="formTemplate">
    <!-- 左边 导航栏 -->
    <div class="nav-tem fl">
      <select class="categories">
        <option value="all">all</option>
        <option value="常用">常用</option>
      </select>
      <ul class="sideNavigation">
        <li @click="$path('/formTemplate/yjdy')">
          <a href="javascript:void(0);" class>
            <b>邮件订阅</b>
          </a>
        </li>
        <li @click="$path('/formTemplate/yjfk')">
          <a href="javascript:void(0);" class>
            <b>意见反馈</b>
          </a>
        </li>
        <li @click="$path('/formTemplate/yhmyddc')">
          <a href="javascript:void(0);">
            <b>用户满意度调查</b>
          </a>
        </li>
        <li @click="$path('/formTemplate/hysqbg')">
          <a href="javascript:void(0);" class>
            <b>会员申请表格</b>
          </a>
        </li>
        <li @click="$path('/formTemplate/hybmb')">
          <a href="javascript:void(0);">
            <b>会议报名表</b>
          </a>
        </li>
        <li @click="$path('/formTemplate/yydjb')">
          <a href="javascript:void(0);">
            <b>预约登记表</b>
          </a>
        </li>
        <li @click="$path('/formTemplate/ygtxl')">
          <a href="javascript:void(0);">
            <b>员工通讯录</b>
          </a>
        </li>
        <li @click="$path('/formTemplate/bxsqb')">
          <a href="javascript:void(0);" class>
            <b>报销申请表</b>
          </a>
        </li>
        <li @click="$path('/formTemplate/lyb')">
          <a href="javascript:void(0);">
            <b>留言板</b>
          </a>
        </li>
        <li @click="$path('/formTemplate/tspt')">
          <a href="javascript:void(0);">
            <b>投诉平台</b>
          </a>
        </li>
        <li @click="$path('/formTemplate/stnx')">
          <a href="javascript:void(0);">
            <b>社团纳新</b>
          </a>
        </li>
        <li @click="$path('/formTemplate/khbfjl')">
          <a href="javascript:void(0);">
            <b>客户拜访记录</b>
          </a>
        </li>
        <li @click="$path('/formTemplate/gzrb')">
          <a href="javascript:void(0);" class>
            <b>工作日报</b>
          </a>
        </li>
        <li @click="$path('/formTemplate/jxkh')">
          <a href="javascript:void(0);">
            <b>绩效考核</b>
          </a>
        </li>
      </ul>
    </div>

    <!-- 右侧 内容 -->
    <div class="con-tem fl">
      <!-- top -->
      <div class="con-tem-top">
        <el-button type="primary" size="small" class="tem-btn" @click="editTem">选择此模板</el-button>
      </div>
      <!-- container -->
      <div class="con-tem-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    editTem() {
      this.$path("/formBuilder");
      this.$store.state.componentList = JSON.parse(
        JSON.stringify(this.$store.state.systemList)
      );
    }
  }
};
</script>

<style lang="less" scoped>
.formTemplate {
  height: 100%;
}
.nav-tem {
  position: fixed;
  left: 0;
  width: 200px;
  height: 100%;
  overflow-y: auto;
  background-color: rgba(244, 244, 244, 0.9);
  color: #111;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.categories {
  display: block;
  width: 99%;
  padding: 5px;
  margin-bottom: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  height: 28px;
  line-height: 1;
  color: #454545;
  border-radius: 0px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px;
  cursor: pointer;
  background: #fff;
}
option {
  color: #336699;
}
ul.sideNavigation {
  background: #f8f9fb;
  border-right: 1px solid #d6dee7;
  margin-right: 0px;
}
.sideNavigation {
  padding: 0;
  margin: 0 2px 0 0;
  overflow: hidden;
}
.sideNavigation li {
  padding-left: 6px;
  background: none;
  border-bottom: 1px solid #d6dee7;
  color: #111;
  &:hover {
    color: #fff;
    background-color: #a1bcde;
    cursor: pointer;
  }
  &:hover a {
    color: #fff;
  }
}
.sideNavigation a,
.sideNavigation a b {
  font-size: 12px;
  height: 25px;
  line-height: 24px;
}
.sideNavigation a.current b {
  font-weight: normal;
}

.con-tem {
  margin-left: 200px;
  width: calc(100% - 200px);
  background-color: #f9f9f9;
}
.con-tem-top {
  height: 62px;
  width: 99%;
  background-color: #fcf8e3;
  border: 1px solid #faebcc;
  border-radius: 4px;
  position: relative;
}
.tem-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -16px;
  margin-left: -46px;
}
.con-tem-container {
  margin-top: 40px;
}
</style>