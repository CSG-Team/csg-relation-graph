import G6GraphImpl from '../graph-impl/g6/graph-g6';
import D3GraphImpl from '../graph-impl/d3/graph-d3';


export enum GraphImplTypes {
  G6 = 'G6',
  D3 = 'D3',
};

/**
 * 根据不同type返回不同实现类
 * @param type GraphImplTypes
 */
export function graphFactory(type: GraphImplTypes) {
  if (type === GraphImplTypes.G6) {
    return G6GraphImpl;
  }
  if (type === GraphImplTypes.D3) {
    return D3GraphImpl;
  }
}