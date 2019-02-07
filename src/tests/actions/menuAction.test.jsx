import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as request from '../../utilities/axiosRequest';
import { GET_RESTAURANTS, GET_MENU } from '../../constants/actionTypes';
import { menuListingAction, restaurantAction } from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Test for Menu Actions', () => {
  it('should test successful menu listing', async () => {
    const mockedRequest = sinon.stub(request, 'Get').resolves({
      menus: ['egg']
    });
    const store = mockStore({});
    await store.dispatch(menuListingAction(1));
    expect(store.getActions()).toEqual([{
      type: GET_MENU,
      payload: ['egg'],
    }]);
    mockedRequest.restore();
  });

  it('should test unsuccessful menu listing', async () => {
    const mockedRequest = sinon.stub(request, 'Get').resolves({
      menus: []
    });
    const store = mockStore({});
    await store.dispatch(menuListingAction(1));
    expect(store.getActions()).toEqual([{
      type: GET_MENU,
      payload: [],
    }]);
    mockedRequest.restore();
  });

  it('should test menu listing actions error', async () => {
    const error = 'request failed';
    const mockedRequest = sinon.stub(request, 'Get').throws({error});
    const store = mockStore({});
    const response = await store.dispatch(menuListingAction(1));
    expect(response).toEqual({error});
    mockedRequest.restore();
  });
});

describe('Test for Restaurant Actions', () => {
  it('should test successful Restaurant listing', async () => {
    const mockedRequest = sinon.stub(request, 'Get').resolves({
      restaurant: ['egg']
    });
    const store = mockStore({});
    await store.dispatch(restaurantAction());
    expect(store.getActions()).toEqual([{
      type: GET_RESTAURANTS,
      payload: ['egg'],
    }]);
    mockedRequest.restore();
  });

  it('should test unsuccessful Restaurant listing', async () => {
    const mockedRequest = sinon.stub(request, 'Get').resolves({
      restaurant: []
    });
    const store = mockStore({});
    await store.dispatch(restaurantAction());
    expect(store.getActions()).toEqual([{
      type: GET_RESTAURANTS,
      payload: [],
    }]);
    mockedRequest.restore();
  });

  it('should test Restaurant listing actions error', async () => {
    const error = 'request failed';
    const mockedRequest = sinon.stub(request, 'Get').throws({error});
    const store = mockStore({});
    const response = await store.dispatch(restaurantAction());
    expect(response).toEqual({error});
    mockedRequest.restore();
  });
});
