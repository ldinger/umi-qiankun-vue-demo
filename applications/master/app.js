import request from './services/request';
const fetch = require("dva").fetch;
import { setData} from './rootExports';

export const qiankun = request('/apps').then(apps => {

    const F  = { "mountElementId": "root-subapp-container"};
     // 向子应用传递数据  - vue   ( 添加 props )
    const props = {  k12 : 'google is  died  ' };

    apps = apps.map(app => Object.assign({ props }, app  , F ));

    // 向子应用传递数据  - umi  (rootExports )
    setData( props )
    return {
        apps,
        fetch: url => {
            console.log('静态资源fetch覆盖');
            return fetch( url  );
        }

    }

});


