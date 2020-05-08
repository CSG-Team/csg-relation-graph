/** 树结构的的Data */
type ITreeData = {
  /** 可能嵌套起来的 children */
  children?: ITreeData;

  /** 其他可能属性 */
  [propsName: string]: any;

}

/** 图结构的Data */
type IGraphData = {
  /** 节点 */
  node:Array<object>,
  /** 边 */
  edge:Array<object>,
} 

/** 真实使用起来的数据支持图结构以及树结构 */
export type IData = IGraphData | ITreeData;

/** 图的接口 */
export interface IGraph {
  
  /** 渲染的方法 */
  render:() => void;

  /** 更新数据的方法 */
  updateData:(data?:IData) => void;

  /** 更新配置的方法 */
  updateCfg: (cfg?: object) => void;

};

