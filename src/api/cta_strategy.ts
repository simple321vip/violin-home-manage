import { trader_service } from '../utils/request'

"CTA strategy"

"strategy file list"
const get_strategy_files = () => {
  return trader_service({
    url: '/trader/api/v1/strategy_file',
    method: 'GET',
  })
}

"strategy file list"
const get_strategy_load_files = () => {
  return trader_service({
    url: '/trader/api/v1/strategy_file/load',
    method: 'GET',
  })
}

"upload a strategy file"
const upload_strategy_file = (file: any) => {
  const formData = new FormData();
  formData.append("file", file)
  return trader_service({
    url: '/trader/api/v1/strategy_file',
    method: 'POST',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
}

"load a strategy file"
const load_strategy_file = (file_name: string) => {
  return trader_service({
    url: '/trader/api/v1/strategy_file/' + file_name,
    method: 'PUT',
  })
}

"unload a strategy file"
const unload_strategy_file = (class_name: string) => {
  return trader_service({
    url: '/trader/api/v1/strategy_file/' + class_name,
    method: 'PATCH',
  })
}

"remove a strategy file"
const remove_strategy_file = (file_name: string) => {
  return trader_service({
    url: '/trader/api/v1/strategy_file/' + file_name,
    method: 'DELETE',
  })
}


"get strategy list"
const get_strategies = () => {
  return trader_service({
    url: '/trader/api/v1/strategies',
    method: 'GET',
  })
}

"create a strategy"
const create_strategy = (ruleForm: object) => {
  return trader_service({
    url: '/trader/api/v1/strategy',
    method: 'POST',
    data: ruleForm
  })
}

"start a strategy"
const start_strategy = (strategy_name: string) => {
  return trader_service({
    url: '/trader/api/v1/strategy/' + strategy_name,
    method: 'PUT',
  })
}

"stop a strategy"
const stop_strategy = (strategy_name: string) => {
  return trader_service({
    url: '/trader/api/v1/strategy/' + strategy_name,
    method: 'PATCH',
  })
}

"remove a strategy"
const remove_strategy = (strategy_name: string) => {
  return trader_service({
    url: '/trader/api/v1/strategy/' + strategy_name,
    method: 'DELETE',
  })
}

"get a strategy status"
const get_strategy_status = (strategy_name: string) => {
  return trader_service({
    url: '/trader/api/v1/strategy/status/' + strategy_name,
    method: 'GET',
  })
}

"get a strategy status"
const get_vt_symbols = () => {
  return trader_service({
    url: '/trader/api/v1/strategy/vt_symbols',
    method: 'GET',
  })
}

export {
  get_strategy_files,
  get_strategy_load_files,
  upload_strategy_file,
  load_strategy_file,
  unload_strategy_file,
  remove_strategy_file,
  get_strategies,
  create_strategy,
  start_strategy,
  stop_strategy,
  remove_strategy,
  get_strategy_status,
  get_vt_symbols
}