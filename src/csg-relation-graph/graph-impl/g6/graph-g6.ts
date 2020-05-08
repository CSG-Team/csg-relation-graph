import G6 from '@antv/g6';
import { GraphOptions } from '@antv/g6/lib/interface/graph';


import BaseGraph from '../../graph/base-graph';

class G6GraphImpl extends BaseGraph {
  protected initGraph(){
    
    this.graph = new G6.Graph(this.graphCfg as GraphOptions)
  }
  public render(): void {
    this.graph.data(this.data)
    this.graph.render();
  }
  public updateData() {
    throw new Error("Method not implemented.");
  }
  public updateCfg() {
    throw new Error("Method not implemented.");
  }

}

export default G6GraphImpl;