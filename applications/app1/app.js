


// import { useModel } from 'umi';
// const { user, setUserData } = useModel('appstore')



/**
 * 做为子应用的生命周期函数 
 */

export const qiankun = {
    // 应用加载之前
    async bootstrap(props) {
      console.log('app1 bootstrap');
    },
    // 应用 render 之前触发
    async mount(props) {
      console.log('[app1] 数据 from 主应用', props);
    //   setUserData('globalData', props.k12 )
    //   console.log(user)

    },

    // 应用卸载之后触发
    async unmount(props) {
      console.log('app1 unmount', props);
    },

  };
  