import { getData, setData } from "./storage"

enum EBreast {
  left,
  right
}

interface IStats {
  date: Date
  time: Date
  breast: EBreast
  breastTime: Number
  ml: Number
  pi: Boolean
  kaka: Boolean
  remark: String
}

interface IKid {
  name: String
  stats: IStats
}

interface IData {
  kids
}

const initialData = {
  kids: {
    0: { name: "ALEX", stats: [] },
    1: { name: "MAX", stats: [] }
  },
  activeKid: 0
}

export const getDefaultState = () => {
  const savedData = getData() || initialData

  return {
    kids: { ...savedData.kids },
    activeKid: savedData.activeKid
  }
}

export const updateState = state => {}
