

ui组件库设计










组件性能及体积指标
1、可以深度tree shaking打包，在使用第三方包的时候，选择合适可tree shaking的方式引入。例如lodash使用import方式结构出来，或是直接用lodash-es版本

2、避免组件多次重复渲染，封装完组件完整测试组件的渲染性能能力，是否会与其它组件冲突

3、关于dependencies、peerDependencies和external1之间的关系

cjs和esm格式打包方式选rollup时有个约定，dependencies、peerDependencies里面的内容会被external

esm.mjs和umd格式，只有peerDependencies会被external





UI组件目录-数据约束
schema与template文件，会在顶层进行收集所有子目录参数，用与B端动态获取所有子目录数据。

单个ui组件目录内schema与template文件，约束介绍见下文：

schema.js文件
每个ui组件目录内都有一个schema，用于定义默认参数，在拖拽组件时会把默认参数带入容器内，以及传递给右侧菜单使用。



editData中的type字段是自定义组件，内部有规范一套内置几个组件直接使用，具体可以查看后台项目的FormRender组件



案例：

const schema = {
  config: {
    // 自定义传递参数
  },
  // 定义可编辑内容
  editData: [
    {
      type: 'StyleCom', // 编辑渲染的组件，有内置一些组件，也可自定义
      label: '模块', // 标题，部份组件支持
      options: {
        // 当前组件配置参数
      },
    },
  ],
};

export default schema;


template.js文件
每个ui组件内定义一个template文件，用于左侧组件菜单渲染，以及拖拽容器基本数据层

const template = {
  type: 'Img1', // 渲染的组件名，与UI目录相同
  displayName: '图片一（单图）', // 文字描述
  imgUrl: 'https://img.kaikeba.com/a/10502141401202zejn.png', // 展示img
};
export default template;







内置组件Type介绍

/**
 * 可编辑组件的type字段
 */
export const EDIT_TYPE = {
  /** 布局 */
  LayoutCom: 'LayoutCom',
  /** 样式 */
  StyleCom: 'StyleCom',
  /** 链接 */
  LinkCom: 'LinkCom',
  /** 顶部通用组件 */
  EditorCom: 'EditorCom',
  /** 容器背景 */
  ModuleBg: 'ModuleBg',
  /** 容器参数，如高度 */
  ModuleBox: 'ModuleBox',
};


/**
 * editorCom组件内list支持的组件
 */
export const EDITOR_COM_LIST_TYPE = {
  Input: 'Input',
  UploadImg: 'UploadImg',
  TextArea: 'TextArea',
};


原则上各内置组件不需要什么太多配置参数，具体可以在FormComponents目录内，找到相应组件支持传入的参数。



以下给各组件使用案例：

import { EDIT_TYPE, EDITOR_COM_LIST_TYPE } from '../../index';

const schema = {
  config: {
    css: {
      fontSize: 16,
      borderRadius: 16,
      borderWidth: 1,
      fillColor: 'rgba(78, 144, 255, 1)',
      borderColor: 'rgba(78, 144, 255, 1)',
      textColor: 'rgba(255, 255, 255, 1)',
    },
    // 链接
    link: { btnType: '1' },
    // 动态模块内部自定义key
    editorCom: {
      btnText: '按钮',
      imgData: [{ url: 'https://img.kaikeba.com/a/51117152601202cdsh.webp' }],
    },
  },
  editData: [
    {
      type: EDIT_TYPE.EditorCom,
      // name: 'editorCom', // 第一层组件key内置固定的，不可自定义
      label: '动态模块',
      options: {
        list: [
          {
            type: EDITOR_COM_LIST_TYPE.Input, // 渲染的组件
            name: 'btnText', // 自定义key，会注入到组件中
            label: '文字',
          },
          {
            type: EDITOR_COM_LIST_TYPE.UploadImg,
            name: 'imgData',
            label: '图片',
          },
          {
            type: EDITOR_COM_LIST_TYPE.TextArea,
            name: 'text2',
            label: '多文字',
          },
        ],
      },
    },
    {
      type: EDIT_TYPE.LinkCom,
      // name: 'link',
      label: '链接',
      options: {},
    },
    {
      type: EDIT_TYPE.StyleCom,
      // name: 'css',
      label: '样式',
      options: {
        // 控制组件显示隐藏
        // textColor: true, // 文字
        // fontSize: true, // 字号
        // fillColor: true, // 填充色
        // borderColor: true, // 边框色
        // borderRadius: true, // 圆角
        // borderWidth: true, // 粗细
        // 排列
        // letterSpacing: true, // 字间距
        // lineHeight: true, // 行高
        // textAlign: true, // 文字排列方式
      },
    },
    {
      type: EDIT_TYPE.LayoutCom,
      // name: 'layoutStyle',
      label: '布局',
      options: {
        // left: true, // 横轴
        // top: true, // 纵轴
        // width: true, // 宽度
        // height: true, // 高度
        // rotate: true, // 角度
      },
    },
  ],
  // 与LayoutCom组件相同映射
  style: {
    left: 0, // 横轴
    top: 0, // 纵轴
    width: 100,
    height: 60,
    rotate: 0, // 旋转角度
  },
};

export default schema;











#FAQ问题






