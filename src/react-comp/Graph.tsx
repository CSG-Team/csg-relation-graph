import React, { useEffect } from 'react';
import { GraphImplTypes, graphFactory } from '../csg-relation-graph/graph-impl';
import { IGraphCompProps } from './interface';


const defaultGraphType = GraphImplTypes.G6;

// 通过工厂得到类，用于实例化graph对象
const GraphImpl = graphFactory(defaultGraphType);


/**
 * 面向React的组件实现
 * @param props IGraphCompProps
 */
const Graph:React.FC<IGraphCompProps> = props => {

  const { 
    containerId,
    data,
  } = props;

  const defaultTestCfg = {
    container: containerId,
    width: 500,
    height: 500,

  }

  useEffect(() => {
    // test render graph
    new GraphImpl(data, defaultTestCfg).render();

  }, [data, defaultTestCfg])



  return (<div id={containerId}></div>);
  
}

export default Graph;