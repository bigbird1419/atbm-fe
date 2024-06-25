import * as httpReq from '../utils/httpReq'
import { CATEGORYS } from '../constants/pathService'

export const getCategorys = async () => {
    const rs = httpReq.get(CATEGORYS)
    return rs
}