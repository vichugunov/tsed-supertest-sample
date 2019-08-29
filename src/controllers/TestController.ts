import { Controller, Get } from '@tsed/common'

@Controller('/test')
export class TestController {
  @Get('/hello')
  public hello() {
    return 'world'
  }
}
