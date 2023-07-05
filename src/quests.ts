import { EVMAddress } from './base'

export interface BaseQuest {
  id: string
  name: string
  description: string
}

export interface QuestStatus extends BaseQuest {
  completed: boolean
}

export type GetQuestStatusRequest = {
  questId: string
  walletAddress: EVMAddress
}

export type GetQuestsStatusRequest = {
  walletAddress: EVMAddress
}

export type GetQuestStatusResponse = {
  quest: QuestStatus
}

export type GetQuestsStatusResponse = {
  quests: QuestStatus[]
}

export type GetAllQuestsResponse = {
  quests: BaseQuest[]
}
