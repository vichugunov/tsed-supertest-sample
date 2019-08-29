import { ServerLoader, ServerSettings } from '@tsed/common'
import '@tsed/swagger'
import path = require('path')
const rootDir = path.resolve(__dirname)
import * as controllers from './controllers'
import * as _ from 'lodash'

@ServerSettings({
  rootDir: rootDir,
  httpPort: 3000,
  swagger: [{
    path: '/docs'
  }],
  mount: {
    '/': [
      ..._.values(controllers)
    ]
  }
})
export default class Server extends ServerLoader {
}
