import { TokenSchema } from './base'
import { JSONSchemaType } from 'ajv'
import {
  AcceptableMessages,
  Action,
  CrossStep,
  Estimate,
  Execution,
  FeeCost,
  GasCost,
  LifiStep,
  Process,
  ProcessMessage,
  Status,
  Step,
  StepBase,
  StepTool,
  StepType,
  SwapStep,
} from '../types'

export const FeeCostSchema: JSONSchemaType<FeeCost> = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
      nullable: true,
    },
    percentage: {
      type: 'string',
    },
    token: TokenSchema,
    amount: {
      type: 'string',
    },
    amountUSD: {
      type: 'string',
      nullable: true,
    },
  },
  required: ['name', 'percentage', 'token', 'amount'],
  additionalProperties: false,
}

const GasCostSchema: JSONSchemaType<GasCost> = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['SUM', 'APPROVE', 'SEND'],
    },
    price: {
      type: 'string',
      nullable: true,
    },
    estimate: {
      type: 'string',
      nullable: true,
    },
    limit: {
      type: 'string',
      nullable: true,
    },
    amount: {
      type: 'string',
    },
    amountUSD: {
      type: 'string',
      nullable: true,
    },
    token: TokenSchema,
  },
  required: ['type', 'amount', 'token'],
  additionalProperties: false,
}
const ActionSchema: JSONSchemaType<Action> = {
  type: 'object',
  properties: {
    fromChainId: {
      type: 'number',
    },
    fromAmount: {
      type: 'string',
    },
    fromToken: TokenSchema,
    fromAddress: {
      type: 'string',
      nullable: true,
    },
    toChainId: {
      type: 'number',
    },
    toToken: TokenSchema,
    toAddress: {
      type: 'string',
      nullable: true,
    },
    slippage: {
      type: 'number',
    },
  },
  required: [
    'fromChainId',
    'fromAmount',
    'fromToken',
    'toChainId',
    'toToken',
    'slippage',
  ],
  additionalProperties: false,
}
const EstimateSchema: JSONSchemaType<Estimate> = {
  type: 'object',
  properties: {
    fromAmount: {
      type: 'string',
    },
    toAmount: {
      type: 'string',
    },
    toAmountMin: {
      type: 'string',
    },
    approvalAddress: {
      type: 'string',
    },
    feeCosts: {
      type: 'array',
      items: FeeCostSchema,
      nullable: true,
    },
    gasCosts: {
      type: 'array',
      items: GasCostSchema,
      nullable: true,
    },
    data: {
      type: 'null',
      nullable: true,
    },
  },
  required: ['fromAmount', 'toAmount', 'toAmountMin', 'approvalAddress'],
  additionalProperties: false,
}
export const StatusSchema: JSONSchemaType<Status> = {
  type: 'string',
  enum: [
    'NOT_STARTED',
    'ACTION_REQUIRED',
    'PENDING',
    'FAILED',
    'DONE',
    'RESUME',
  ],
}
export const AcceptableMessagesSchema: JSONSchemaType<AcceptableMessages> = {
  anyOf: [
    {
      type: 'string',
    },
    {
      type: 'null',
      nullable: true,
    },
  ],
}
export const ProcessMessageSchema: JSONSchemaType<ProcessMessage> = {
  anyOf: [
    AcceptableMessagesSchema,
    {
      type: 'object',
      properties: {
        message: AcceptableMessagesSchema,
        footer: AcceptableMessagesSchema,
      },
      required: ['message', 'footer'],
      additionalProperties: false,
    },
  ],
}

export const ProcessSchema: JSONSchemaType<Process> = {
  type: 'object',
  properties: {
    startedAt: {
      type: 'number',
    },
    doneAt: {
      type: 'number',
      nullable: true,
    },
    failedAt: {
      type: 'number',
      nullable: true,
    },
    errorMessage: {
      type: 'null',
      nullable: true,
    },
    errorCode: {
      type: 'null',
      nullable: true,
    },
    message: ProcessMessageSchema,
    status: StatusSchema,
  },
  required: ['startedAt', 'message', 'status'],
}
export const ExecutionSchema: JSONSchemaType<Execution> = {
  type: 'object',
  properties: {
    status: StatusSchema,
    process: {
      type: 'array',
      items: StatusSchema,
    },
    fromAmount: {
      type: 'string',
      nullable: true,
    },
    toAmount: {
      type: 'string',
      nullable: true,
    },
  },
  required: ['status', 'process'],
  additionalProperties: false,
}
export const StepTypeSchema: JSONSchemaType<StepType> = {
  type: 'string',
  enum: ['swap', 'cross', 'lifi'],
}
export const StepToolSchema: JSONSchemaType<StepTool> = {
  type: 'string',
}
export const StepBaseSchema: JSONSchemaType<StepBase> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    type: StepTypeSchema,
    tool: StepToolSchema,
    action: ActionSchema,
    estimate: { ...EstimateSchema, nullable: true },
    execution: { ...ExecutionSchema, nullable: true },
  },
  required: ['id', 'type', 'tool', 'action'],
  additionalProperties: false,
}
export const SwapStepSchema: JSONSchemaType<SwapStep> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    type: {
      type: 'string',
      const: 'swap',
    },
    tool: StepToolSchema,
    action: ActionSchema,
    estimate: { ...EstimateSchema },
    execution: { ...ExecutionSchema, nullable: true },
  },
  required: ['action', 'estimate', 'id', 'tool', 'type'],
  additionalProperties: false,
}
export const CrossStepSchema: JSONSchemaType<CrossStep> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    type: {
      type: 'string',
      const: 'cross',
    },
    tool: StepToolSchema,
    action: ActionSchema,
    estimate: { ...EstimateSchema },
    execution: { ...ExecutionSchema, nullable: true },
  },
  required: ['action', 'estimate', 'id', 'tool', 'type'],
  additionalProperties: false,
}
export const LifiStepSchema: JSONSchemaType<LifiStep> = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    type: {
      type: 'string',
      const: 'lifi',
    },
    tool: StepToolSchema,
    action: ActionSchema,
    estimate: { ...EstimateSchema },
    execution: { ...ExecutionSchema, nullable: true },
    includedSteps: {
      type: 'array',
      // TODO: Should be stepSchema, but it's declared under
      items: {},
    },
  },
  required: ['action', 'estimate', 'id', 'includedSteps', 'tool', 'type'],
  additionalProperties: false,
}

export const StepSchema: JSONSchemaType<Step> = {
  anyOf: [SwapStepSchema, CrossStepSchema, LifiStepSchema],
}
