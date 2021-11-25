import { CrossStep, Execution, LifiStep, Step, SwapStep } from '../types'

export function isSwapStep(step: Step): step is SwapStep {
  return step.type === 'swap'
}

export function isCrossStep(step: Step): step is CrossStep {
  return step.type === 'cross'
}

export function isLifiStep(step: Step): step is LifiStep {
  return step.type === 'lifi'
}

export const emptyExecution: Execution = {
  status: 'NOT_STARTED',
  process: [],
}
