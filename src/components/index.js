import Vue from 'vue'
import SvgIcons from '@/components/svgIcons'
import circleProgress from '@/components/circleProgress'

Vue.component('svg-icon', SvgIcons)
const req = require.context('@/icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

Vue.component('circle-progress', circleProgress)