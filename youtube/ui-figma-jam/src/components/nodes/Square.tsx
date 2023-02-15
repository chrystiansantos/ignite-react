import { NodeProps, Handle, Position } from 'reactflow';
import {NodeResizer} from '@reactflow/node-resizer'
import 'reactflow/dist/style.css';
import '@reactflow/node-resizer/dist/style.css';


export function Square({selected}: NodeProps) {
  return (
    <div className="bg-violet-500 rounded w-full h-full min-w-[200px] min-h-[200px]">
      <NodeResizer
        minWidth={200}
        minHeight={200}
        lineClassName="border-blue-499"
        handleClassName="h-3 w-3 bg-white border-2 rounded border-blue-400"
        isVisible={selected}
      />
      <Handle
        id="right"
        position={Position.Right}
        type="source"
        className="-right-5 w-3 h-3 border-2 bg-blue-400/80 "
      />
      <Handle
        id="left"
        position={Position.Left}
        type="source"
        className="-left-5 w-3 h-3 border-2 bg-blue-400/80 "
      />
      <Handle
        id="top"
        position={Position.Top}
        type="source"
        className="-top-5 w-3 h-3 border-2 bg-blue-400/80 "
      />
      <Handle
        id="bottom"
        position={Position.Bottom}
        type="source"
        className="-bottom-5 w-3 h-3 border-2 bg-blue-400/80 "
      />
    </div>
  );
}
