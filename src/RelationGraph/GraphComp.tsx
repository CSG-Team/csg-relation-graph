import React, { useEffect } from 'react';
import { GraphImplTypes, graphFactory } from './GraphImpl';
import { IData } from './definitions';

const defaultGraphType = GraphImplTypes.G6;
const GraphImpl = graphFactory(defaultGraphType);

type IGraphComp = {
  data: IData;
  containerId: string;
};

/**
 * 面向React的组件实现
 * @param props IGraphComp
 */
const Graph:React.FC<IGraphComp> = props => {

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