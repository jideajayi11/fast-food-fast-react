import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import * as request from '../../utilities/axiosRequest';
import { GET_ORDER } from '../../constants/actionTypes';
import {
  postOrderAction,
  getOrderAction,
  cancelOrderAction
} from '../../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Test for Post Order Actions', () => {
  it('should test successful order posting', async () => {
    const mockedRequest = sinon.stub(request, 'Post')
      .resolves({ status: 'success' });
    const response = await postOrderAction({payload: 'egg'});
    expect(response).toEqual('success');
    mockedRequest.restore();
  });

  it('should test order posting actions error', async () => {
    const error = 'request failed';
    const mockedRequest = sinon.stub(request, 'Post').throws({error});
    const response = await postOrderAction({payload: 'egg'});
    expect(response).toEqual({error});
    mockedRequest.restore();
  });
});

describe('Test for Cancel Order Actions', () => {
  it('should test successful order Cancel', async () => {
    const mockedRequest = sinon.stub(request, 'Put')
      .resolves({ status: 'success' });
    const response = await cancelOrderAction(1);
    expect(response).toEqual(1);
    mockedRequest.restore();
  });

  it('should test unsuccessful order Cancel', async () => {
    const mockedRequest = sinon.stub(request, 'Put')
      .resolves({ status: 'fail' });
    const response = await cancelOrderAction(1);
    expect(response).toEqual(false);
    mockedRequest.restore();
  });

  it('should test order Cancel actions error', async () => {
    const error = 'request failed';
    const mockedRequest = sinon.stub(request, 'Put').throws({error});
    const response = await cancelOrderAction(1);
    expect(response).toEqual({error});
    mockedRequest.restore();
  });
});

describe('Test for Order Actions', () => {
  it('should test successful Order listing', async () => {
    const mockedRequest = sinon.stub(request, 'Get').resolves({
      orders: ['egg']
    });
    const store = mockStore({});
    await store.dispatch(getOrderAction(1));
    expect(store.getActions()).toEqual([{
      type: GET_ORDER,
      payload: ['egg'],
    }]);
    mockedRequest.restore();
  });

  it('should test unsuccessful Order listing', async () => {
    const mockedRequest = sinon.stub(request, 'Get').resolves({
      orders: []
    });
    const store = mockStore({});
    await store.dispatch(getOrderAction(1));
    expect(store.getActions()).toEqual([{
      type: GET_ORDER,
      payload: [],
    }]);
    mockedRequest.restore();
  });

  it('should test Order listing actions error', async () => {
    const error = 'request failed';
    const mockedRequest = sinon.stub(request, 'Get').throws({error});
    const store = mockStore({});
    const response = await store.dispatch(getOrderAction(1));
    expect(response).toEqual({error});
    mockedRequest.restore();
  });
});
