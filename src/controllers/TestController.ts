
import { Controller, Get } from '@tsed/common'

import * as Express from 'express'

@Controller('/test')
export default class VariablesController {
  @Get('/hello')
  public hello() {
    return 'world'
  }
}
