import { ServerLoader, ServerSettings } from '@tsed/common'
import '@tsed/swagger'
import path = require('path')
const rootDir = path.resolve(__dirname)
import { TestController } from './controllers'

@ServerSettings({
  rootDir: rootDir,
  httpPort: 3000,
  swagger: [{
    path: '/docs'
  }],
  mount: {
    '/': [
      TestController
    ]
  }
})
export default class Server extends ServerLoader {
}
