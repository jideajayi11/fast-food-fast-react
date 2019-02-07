import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as request from '../../utilities/axiosRequest';
import { APP_AUTH } from '../../constants/actionTypes';
import { authAction } from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Test for Authentication Actions', () => {
  it('should test successful sign in actions', async () => {
    const mockedRequest = sinon.stub(request, 'Post').resolves({
      token: 'qq1255.iutfg.987yh'
    });
    const store = mockStore({});
    await store.dispatch(authAction({}, {
      role: 'user',
      authType: 'signin'
    }));
    expect(store.getActions()).toEqual([
      {
        type: APP_AUTH,
        payload: {
          authenticated: true,
          role: 'user',
        },
      }
    ]);
    mockedRequest.restore();
  });

  it('should test unsuccessful sign in actions', async () => {
    const mockedRequest = sinon.stub(request, 'Post').resolves({});
    const store = mockStore({});
    await store.dispatch(authAction({}, {
      role: 'user',
      authType: ''
    }));
    expect(store.getActions()).toEqual([
      {
        type: APP_AUTH,
        payload: {
          authenticated: false,
          role: 'user',
        },
      }
    ]);
    mockedRequest.restore();
  });

  it('should test unsuccessful sign up actions', async () => {
    const mockedRequest = sinon.stub(request, 'Post').resolves({});
    const store = mockStore({});
    await store.dispatch(authAction({}, {
      role: 'user',
      authType: 'signup'
    }));
    expect(store.getActions()).toEqual([
      {
        type: APP_AUTH,
        payload: {
          authenticated: false,
          role: 'user',
        },
      }
    ]);
    mockedRequest.restore();
  });
  
  it('should test authentication actions error', async () => {
    const error = 'request failed';
    const mockedRequest = sinon.stub(request, 'Post').throws({error});
    const store = mockStore({});
    const response = await store.dispatch(authAction({}, {
      role: 'user',
      authType: 'signup'
    }));
    expect(response).toEqual({error});
    mockedRequest.restore();
  });
});
