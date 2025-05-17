import Alpine from '@alpinejs/csp'

import counter from './counter'

window.Alpine = Alpine

Alpine.data('counter', counter)
 
Alpine.start()

console.log('Alpine initilized!')