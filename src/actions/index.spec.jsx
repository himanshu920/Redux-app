import * as actions from './index'

describe('ACTIONS', () => {
   it('should get an action with correct type', () => {
      const expectedAction = {
              type: 'GET_NEWS_LIST'
             }
      expect(actions.getNewsList()).toEqual(expectedAction)
  })

})