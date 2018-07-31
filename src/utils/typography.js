import Typography from "typography"
import stowLakeTheme from 'typography-theme-stow-lake'

stowLakeTheme.includeNormalize = true
stowLakeTheme.baseLineHeight = '1.50'
stowLakeTheme.scaleRatio = '2.25'

const typography = new Typography(stowLakeTheme)

export default typography
