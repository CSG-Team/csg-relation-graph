import { IGraph, IData } from './definitions';

/**
 * Graph的基类, 定义了基本的数据以及初始化等流程
 */
abstract class BaseGraph implements IGraph{
  /** 绘制使用的Data */
  protected data: IData;

  /** graph的一些设置 */
  protected graphCfg: object;

  /** 用于绘制的graph 实例 */
  protected graph: any;

  constructor(data:IData, graphCfg: object){
    this.data = data;
    this.graphCfg = graphCfg;

    this.initGraph();
  }

  /** 初始化设置的方法 */
  protected abstract initGraph() : void;

  /** 渲染出图，一般用于第一次render */
  public abstract render() : void;

  /** 更新数据 */
  public abstract updateData(data?: IData) : void;

  /** 更新配置 */
  public abstract updateCfg(cfg?: object) : void;

  
}

export default BaseGraph;