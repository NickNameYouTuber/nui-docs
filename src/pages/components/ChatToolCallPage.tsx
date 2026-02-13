import { ComponentPreview } from '../../components/ComponentPreview';
import { PropsTable } from '../../components/PropsTable';
import { ChatToolCall } from '@nicorp/nui';

export default function ChatToolCallPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">ChatToolCall</h1>
        <p className="text-xl text-muted-foreground">
          Displays a tool/function call made by AI — shows name, arguments, status, and result.
        </p>
      </div>

      <div className="space-y-8">
        <ComponentPreview
          title="Running"
          description="Tool call currently executing"
          code={`<ChatToolCall
  name="searchDatabase"
  args={{ query: "latest orders", limit: 10 }}
  status="running"
/>`}
        >
          <ChatToolCall
            name="searchDatabase"
            args={{ query: "latest orders", limit: 10, filters: { status: "pending" } }}
            status="running"
          />
        </ComponentPreview>

        <ComponentPreview
          title="Success"
          description="Completed tool call with result"
          code={`<ChatToolCall
  name="getWeather"
  args={{ city: "Moscow", units: "metric" }}
  result="Temperature: 15°C, Humidity: 65%"
  status="success"
/>`}
        >
          <ChatToolCall
            name="getWeather"
            args={{ city: "Moscow", units: "metric" }}
            result="Temperature: 15°C, Humidity: 65%, Wind: 12 km/h NW, Condition: Partly cloudy"
            status="success"
          />
        </ComponentPreview>

        <ComponentPreview
          title="Error"
          description="Failed tool call with error message"
          code={`<ChatToolCall
  name="executeQuery"
  args={{ sql: "SELECT * FROM users" }}
  status="error"
  error="Permission denied: insufficient privileges"
/>`}
        >
          <ChatToolCall
            name="executeQuery"
            args={{ sql: "SELECT * FROM users WHERE active = true" }}
            status="error"
            error="Permission denied: insufficient privileges for table 'users'"
          />
        </ComponentPreview>

        <ComponentPreview
          title="Default Open"
          description="Start with details expanded"
          code={`<ChatToolCall
  name="calculateRoute"
  args={{ from: "A", to: "B" }}
  result="Distance: 42km, ETA: 35min"
  status="success"
  defaultOpen
/>`}
        >
          <ChatToolCall
            name="calculateRoute"
            args={{ from: "Moscow", to: "Saint Petersburg", mode: "driving" }}
            result="Distance: 710 km, ETA: 7h 20min, Toll roads: 2"
            status="success"
            defaultOpen
          />
        </ComponentPreview>

        <PropsTable
          props={[
            { name: 'name', type: 'string', required: true, description: 'Tool/function name' },
            { name: 'args', type: 'Record<string, unknown>', description: 'Arguments passed to the tool' },
            { name: 'result', type: 'string', description: 'Tool execution result' },
            { name: 'status', type: '"running" | "success" | "error"', default: '"running"', description: 'Current execution status' },
            { name: 'error', type: 'string', description: 'Error message (when status is "error")' },
            { name: 'defaultOpen', type: 'boolean', default: 'false', description: 'Start in expanded state' },
          ]}
        />
      </div>
    </div>
  );
}
