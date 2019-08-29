import { TestContext, inject, bootstrap } from '@tsed/testing'
import SuperTest from 'supertest'
import {ExpressApplication, RouteService} from "@tsed/common"
import server from './../src/server'
import { expect } from 'chai'

describe('TestController', () => {
  let request: SuperTest.SuperTest<SuperTest.Test>
  before(bootstrap(server))
  let routeService: RouteService
  let expressApplication: ExpressApplication

  before(inject([ExpressApplication, RouteService], (...args) => {
    [expressApplication, routeService] = args
    request = SuperTest(expressApplication)
  }))

  after(TestContext.reset)

  it('should be forbidden', async () => {
    console.log('routes', routeService.getRoutes())
    const response = await request.get('/test/hello').expect(200)
    return expect(response.text).to.eq('world')
  })

})
