import { useRootExports } from 'umi';
const DEFAULT = {  k12 : ' 做为非子应用时的数据 '} ;

export default function() {
  const rootExports = useRootExports();

  // 共享的数据 
  const gdata = rootExports && rootExports.getData() || DEFAULT;
 
  const style = { color: 'red'}
  console.log('rootExports', rootExports, gdata);
  return (
    <div>
      <h1 style={style}>{`global data from main app   & ${gdata.k12}`}</h1>
    </div>
  );
}