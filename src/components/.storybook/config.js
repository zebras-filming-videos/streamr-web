import { configure } from '@kadira/storybook'

import '../../styles/index.styl'

function loadStories () {
  require('../stories/buttons')
  require('../stories/fields')
  require('../stories/forms')
}

configure(loadStories, module)