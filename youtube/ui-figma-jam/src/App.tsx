import ReactFlow, {
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Node,
  useEdgesState,
  useNodesState,
} from 'reactflow';
// eslint-disable-next-line import/no-extraneous-dependencies
import { zinc } from 'tailwindcss/colors';
import 'reactflow/dist/style.css';
import { useCallback } from 'react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { Square } from './components/nodes/Square';
import { DefaultEdge } from './components/edges/DefaultEdge';

const NODE_TYPES = {
  square: Square,
};

const EDGE_TYPES = {
  default: DefaultEdge,
};

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 200,
      y: 400,
    },
    data: {},
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 600,
      y: 400,
    },
    data: {},
  },
] satisfies Node[];

function App() {
  const [edges, setEdges, onEdgesChanged] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

  const onConnect = useCallback(
    (connection: Connection) => {
      return setEdges(oldEdges => addEdge(connection, oldEdges));
    },
    [setEdges],
  );

  const addSquareNode = () => {
    setNodes(nodes => [...nodes,
      {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 750,
          y: 350,
        },
        data: {},
      },
    ])
  }

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodeTypes={NODE_TYPES}
        nodes={nodes}
        edgeTypes={EDGE_TYPES}
        connectionMode={ConnectionMode.Loose}
        edges={edges}
        onEdgesChange={onEdgesChanged}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        defaultEdgeOptions={{
          type: 'default',
        }}
      >
        <Background gap={12} size={2} color={zinc[400]} />
        <Controls />
      </ReactFlow>

      <Toolbar.Root className='fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300
        px-8 h-20 w-96 overflow-hidden
      ' >
        <Toolbar.Button className='w-32 h-32 bg-violet-500 rounded mt-6 transition-transform hover:-translate-y-2'
          onClick={addSquareNode}
        >

        </Toolbar.Button>
      </Toolbar.Root>
    </div>
  );
}

export default App;
