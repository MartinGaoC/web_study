import React from 'react';

import './less/index.less';

import Foot from '../../../components/Foot/foot';
import NavHead from '../../../components/NavHead/navhead';
import Header from '../../../components/Head/header';
import { isMobile } from '../../../../src/utils/common';

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    document.getElementById('title').innerText = 'C4D动效进阶-开课吧';
    if (this.isMobile() !== false) {
      this.setfontsize();
    }
  }
  LodingOauth_cc() {
    const c4dmeta = document.querySelector('meta[name="viewport"]');
    c4dmeta.remove();
  }
  setfontsize() {
    const aa = document.documentElement;
    aa.style.fontSize = '35%';
  }
  isMobile() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) { return true; } else { return false; }
  }
  render() {
    return (
      <div className="vip-c4d">
        {
          isMobile() ? 
          <Header key="m_head" />
          :''
        }
        <NavHead />
        <div className="static-c4d">
          <div className="body-c4d">
            <div className="head">
              <img src="https://img.kaikeba.com/banner1.png" />
            </div>
            <div className="content">
              <div className="block one">
                <p
                  className="article"
                >目前设计行业竞争激烈，人才济济。在站酷上经常看到科班刚毕业的学生优秀作品被热推首页，我们不得不面对新人辈出的现实。企业对视觉要求标准也更严苛，促使行业内设计水平不断提高，设计师们自我提升的压力也与日俱增。</p>
                <p
                  className="article"
                >纵观近期天猫、京东官方平台购物节的设计，不难发现C4D几乎占据主流视觉。华为、网易、美的、Nike等越来越多的品牌公司将C4D应用到电商banner、创意平面海报、动效设计、产品广告的制作中。C4D已在国内掀起设计热潮，成为名副其实的当红炸子鸡。</p>
                <img src="https://img.kaikeba.com/nike1.png" />
              </div>
              <div className="block why top">
                <img style={{ marginBottom: '4.1%' }} src="https://img.kaikeba.com/zan.png" />
                <h2>为什么强推C4D作为跃升三维动效的跳板</h2>

                <div className="result">
                  <div className="result_block">
                    <div className="sp_left img1" />
                    <h3>1.学习难易</h3>
                    <p style={{ marginLeft: '-20px' }}>C4D上手迅速</p>
                    <p className="revise">对新人非常友好。</p>
                  </div>
                  <div className="result_block">
                    <div className="sp1_right img1" />
                    <h3>2.就业需求</h3>
                    <p>虽然目前动画人才趋于饱和，但是C4D市场流通性依旧很大.</p>
                  </div>
                  <div className="result_block">
                    <div className="sp_left img2" />
                    <h3>3.功能设置</h3>
                    <p>C4D有专门为栏目包装准备的mogragh模块,在做图形动画方面有不可比拟的优势。</p>
                  </div>
                  <div className="result_block">
                    <div className="sp1_right img2" />
                    <h3>4.操作界面</h3>
                    <p>C4D的界面很简洁，各个模块区分一目了然。</p>
                  </div>
                  <div className="result_block">
                    <div className="sp_left img3" />
                    <h3>5.渲染方面</h3>
                    <p>C4D的默认渲染器强大，渲染速度和质量相当好。</p>
                  </div>
                  <div className="result_block">
                    <div className="sp1_right img3" />
                    <h3>6.软件整合</h3>
                    <p>C4D和AE完美衔接，两者相辅相成可以制作出更令人惊叹的效果。</p>
                  </div>
                </div>
              </div>
              <div className="block why relley">
                <img style={{ marginBottom: '4.1%' }} src="https://img.kaikeba.com/zan.png" />
                <h2>想要真正入门C4D，你需要做到这些：</h2>
                <div className="dosoming1">
                  <p>1、让一位有资历的前辈指导，能成功的避开学习雷区，节约学习时间和成本.</p>
                  <p>2、将发散思维融入到实战创作中，而不是一味地“纸上谈兵”.</p>
                  <p>3、大量练习后，要得心应手的操作软件，更要认知自己的不足，并积累经验.</p>
                  <p>所以，《C4D+AE动效进阶版》帮助你在三维动效的学习之路上畅通无阻的行进，每一步都稳扎稳打。坚持“质量第一、师资第一、态度第一、实用性第一”的教学理念，让每一位学员被肯定、被认同，创造不可或缺的价值。</p>
                </div>

              </div>
              <div className="block why daifei">
                <img style={{ marginBottom: '4.1%' }} src="https://img.kaikeba.com/zan.png" />
                <h2>这位C4D大咖带你飞</h2>
                <div className="teacher_yuhan">
                  <div className="xinxi">
                    <div className="touxiang">
                      <img src="https://img.kaikeba.com/jiangshi.png" />
                    </div>
                    <div className="jieshao">
                      <h4>讲师：雨寒</h4>
                      <span>高级视觉设计师</span>
                      <span>Adobe认证讲师</span>
                      <span>北航数字动画艺术系客座讲师</span>
                    </div>
                  </div>
                  <hr />
                  <div className="zuopin">
                    <p><span>作品成就：</span>
                    曾执掌锤子手机、乐视TV等一线互联网公司多个三维项目；并合作发布《C4D手机建模渲染商业项目实战案例教程》《C4D综合建模与Arnold渲染实战案例教学》《C4D软件基础入门教学》，累计在线学习学员人数高达25W+。
                  </p>
                  </div>
                </div>
              </div>
              <div className="block why studye">
                <img style={{ marginBottom: '4.1%' }} src="https://img.kaikeba.com/zan.png" />
                <h2>你会学到：</h2>
                <ul>
                  <li><img src="https://img.kaikeba.com/xiaodian.png" /><span>熟练掌握AE的合成和动画概念</span></li>
                  <li><img src="https://img.kaikeba.com/xiaodian.png" /><span>C4D的工作流程（建模-材质-灯光-渲染-合成）</span></li>
                  <li><img src="https://img.kaikeba.com/xiaodian.png" /><span>多种大型动效案例解析，全面晋升动效设计师</span></li>
                  <li><img src="https://img.kaikeba.com/xiaodian.png" /><span>胸有成竹的职位面试Tips</span></li>
                </ul>
              </div>
              <div style={{ marginTop: '9%' }} className="block part">
                <img src="https://img.kaikeba.com/5.2Part1.png" />
                <div className="partbox">
                  <div className="partbox_left">
                  AE入门到实战
                </div>
                  <div className="partbox_right">
                    <p>1.初识软件，快人一步</p>
                    <p>2.构建图文动画，想象成为现实</p>
                    <p>3.洞悉动画原理，掌握动效核心</p>
                  </div>
                </div>
              </div>
              <div className="block part">
                <img src="https://img.kaikeba.com/5.3Part2.png" />
                <div className="partbox">
                  <div className="partbox_left">
                  C4D入门到实战
                </div>
                  <div className="partbox_right">
                    <p>1.新的技能，新的改变</p>
                    <p>2.二大建模技法搞定所有模型结构</p>
                    <p>3.材质、灯光、渲染，打造视觉冲击</p>
                    <p>4.摄像机、UV系统全解析</p>
                  </div>
                </div>
              </div>
              <div className="block part">
                <img src="https://img.kaikeba.com/5.4Part3.png" />
                <div className="partbox">
                  <div className="partbox_left">
                  大型商业项目实战
                </div>
                  <div className="partbox_right">
                    <p>1.极致光影处理和写实质感表现</p>
                    <p>2.三大顶级案例全面掌握动态视觉</p>
                    <p>3.三维与平面的碰撞-完美掌握电商主视觉</p>
                    <p>4.C4D的核心-运动图形系统解析</p>
                    <p>5.史诗级渲染-实现你的大片梦</p>
                  </div>
                </div>
              </div>
              <div className="block part">
                <img src="https://img.kaikeba.com/5.5Part4.png" />
                <div className="partbox partlast">
                  <div className="partbox_left">
                  简历制作与面试指导
                </div>
                  <div className="partbox_right">
                    <p>升职加薪-更上新的台阶</p>
                    <p>如何更好的制作简历和毕业作品集</p>
                  </div>
                </div>
                <div className="part5">
                  <p>好看的皮囊千遍一律，有趣的灵魂在玩设计，经过三个半月的系统学习（每周一、周三讲课，周五作业点评）你将完成C4D+AE的初体验到深度实战。</p>
                </div>
              </div>

              <div className="block why">
                <img style={{ marginBottom: '4.1%' }} src="https://img.kaikeba.com/zan.png" />
                <h2 className="shihe_h2" style={{ marginBottom: '6.2%' }}>适合人群</h2>
                <div className="teacher_yuhan peoper">
                  <div className="perper_touxiang" />
                  <p className="renuqn">设计专业科班学生；有设计经验的设计工作者如淘宝美工、平面设计师、视觉设计师等。实现UI动效、三维电商视觉、MG动画、影视包装等领域的成功转型。</p>
                </div>
              </div>

              <div className="block why good">
                <img style={{ marginBottom: '4.1%' }} src="https://img.kaikeba.com/zan.png" />
                <h2 style={{ marginBottom: '6.2%' }}>课程亮点</h2>
                <div
                  className="dosoming next"
                  style={{ background: 'url(https://img.kaikeba.com/banner2.png) no-repeat', backgroundPosition: '0 -8px', backgroundSize: '100%', backgroundColor: '#aadafe !important' }}
                >
                  <p>1、动效绝招：C4D课程中结合AE教学，三维动效效果完美无缺。</p>
                  <p>2、设计大牛：讲师亲力亲为，零距离学习一线企业真实项目、汲取讲师多年设计经验。</p>
                  <p>3、真诚负责：每周作业讲师都进行一对一点评，交流群里答疑解惑，保证学习结果。</p>
                  <p>4、学习便捷：官方直播平台上课，每次内容皆可回放，方便复习。</p>
                  <p>5、面试指导：升职加薪，让生活更上新的台阶。</p>
                </div>
              </div>
              <div className="block why xueyuan" style={{ marginTop: '11%' }}>
                <img style={{ marginBottom: '4.1%' }} src="https://img.kaikeba.com/zan.png" />
                <h2 className="zuopin_h2" style={{ marginBottom: '4.6%' }}>学员作品</h2>
                <p style={{ marginBottom: '4.8%' }} className="project_st">让作品的立体感呼之欲出，让夸赞的叫声不绝于耳</p>
              </div>
            </div>
            <div className="st_img">
              <img src="https://img.kaikeba.com/8.1dior.png" />
              <img className="img5" style={{ width: '92%' }} src="https://img.kaikeba.com/8.2.png" />
              <img className="img5" style={{ width: '92%' }} src="https://img.kaikeba.com/8.3.png" />
              <img style={{ marginBottom: '8%' }} src="https://img.kaikeba.com/8.4.png" />
            </div>
            <div className="last">
              <div className="block why" style={{ width: '1080px', margin: '0 auto' }}>
                <img className="light_img" style={{ marginBottom: '4.1%' }} src="https://img.kaikeba.com/zan.png" />
                <p className="liang_p project_st" style={{ marginBottom: '4.8%', color: '#0270b6', fontSize: '3rem' }}>学长学姐们在前方为你亮灯，现有薪资涨幅达到3K-5K</p>
                <img style={{ width: '100%' }} src="https://img.kaikeba.com/xueyuan.png" />
                <p className="zhuimeng_p last_p">真正的追梦人，是偏执，是渴望，是全力以赴，你准备好升值（职）了吗？</p>
              </div>
            </div>
            <div className="foot">
              <div>
                <p className="foot_text">扫一扫添加微信，免费领取价值3980的视频教程和公开课名额</p>
              </div>
            </div>
            {/* <div style={{width: '100%', textAlign: 'center',position: 'relative'}}>*/}
            {/* <img style={{cursor: 'pointer'}} src="https://img.kaikeba.com/btn.png"/>*/}
            {/* <span className="btn_value">提交信息</span>*/}
            {/* </div>*/}
          </div>
        </div>
        <Foot />
      </div>

    );
  }
}
export default Content;
