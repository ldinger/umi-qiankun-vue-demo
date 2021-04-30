
/**
 * 设置主子应用间数据 
 */
let data = {
  count: 0,
};

export function getData( key ) {
  return  key ? data[ key ]: data ;
}

export function setData( newData  ) {

  if( Object.prototype.toString.call( newData ) !== '[object Object]') {
      throw new Error('只接收Object类型参数 ')
  }

  data = {
    ...data,
    ...newData,
  };
}
