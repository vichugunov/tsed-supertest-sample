import { Controller, Get } from '@tsed/common'

@Controller('/test')
export default class TestController {
  @Get('/hello')
  public hello() {
    return 'world'
  }
}
