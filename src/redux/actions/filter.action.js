import {filter} from '../../config/common'

const showAll = () => ({type: filter.ALL})
const showCompleted = () => ({type: filter.COMPLETE})
const showActive = () => ({type: filter.ACTIVE})

export {showAll, showCompleted, showActive}