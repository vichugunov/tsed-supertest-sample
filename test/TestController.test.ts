import 'jest'
import { TestContext, inject, bootstrap } from '@tsed/testing'
import * as SuperTest from 'supertest'
import {ExpressApplication, RouteService} from "@tsed/common"
import server from './../bin/server'

describe('TestController', () => {
  let request: SuperTest.SuperTest<SuperTest.Test>
  beforeAll(bootstrap(server))
  let routeService: RouteService
  let expressApplication: ExpressApplication

  beforeAll(inject([ExpressApplication, RouteService], (...args) => {
    [expressApplication, routeService] = args
    request = SuperTest(expressApplication)
  }))

  afterEach(TestContext.reset)

  it('should be forbidden', async () => {
    console.log('routes', routeService.getRoutes())
    const response = await request.get('/test/hello').expect(200)

    return expect(response.text).toBe('world')
  })

})
