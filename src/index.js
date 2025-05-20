import Alpine from '@alpinejs/csp'

import stopwatch from './stopwatch'
import training from './training'

window.Alpine = Alpine

Alpine.data('stopwatch', stopwatch)
Alpine.data('training', training)
 
Alpine.start()