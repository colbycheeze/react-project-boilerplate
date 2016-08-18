import test from 'ava';
// import nock from 'nock';
// import { reducerTest, actionTest } from 'redux-ava';
// import { delay } from 'redux-saga';
// import { call, take, select, put } from 'redux-saga/effects';
// import {
//   UPDATE_TITLE,
//   GET_QUOTE,
//   RECEIVE_QUOTE,
//   updateTitle,
//   getQuote,
//   receiveQuote,
//   createDemoReducer,
//   createDemoSelector,
//   fetchQuote, // This would normally come from an api caller module
//   watchGetQuote,
// } from './CreateDemo';

test.todo('write tests for CreateDemo Duck');

// test('(Constant) UPDATE_TITLE === "CreateDemo/UPDATE_TITLE"', t => {
//   t.is(UPDATE_TITLE, 'CreateDemo/UPDATE_TITLE');
// });
//
// test('(Action) updateTitle',
//   actionTest(updateTitle, 'title text', { type: UPDATE_TITLE, payload: 'title text' }));
//
// test('(Reducer) initializes with title state', t => {
//   t.deepEqual(createDemoReducer(undefined, {}), { title: 'A Title Stored in global state.' });
// });
//
// const testState = () => ({ title: 'A Title', quote: 'A Quote' });
//
// test('(Reducer) return previous state when no action is matched', reducerTest(
//   createDemoReducer,
//   testState(),
//   { type: '@@@@@@@' },
//   testState()
// ));
//
// test('(Reducer) doesnt try to handle saga', reducerTest(
//   createDemoReducer,
//   testState(),
//   getQuote,
//   testState(),
// ));
//
// test('(Reducer) updates title', reducerTest(
//   createDemoReducer,
//   testState(),
//   updateTitle('New Title'),
//   { title: 'New Title', quote: 'A Quote' }
// ));
//
// test('(Reducer) updates quote', reducerTest(
//   createDemoReducer,
//   testState(),
//   receiveQuote('New Quote'),
//   { title: 'A Title', quote: 'New Quote' }
// ));
//
// test('(Saga) watchGetQuote: no quote received.', t => {
//   const saga = watchGetQuote();
//   const state = {
//     title: 'Initial Title',
//   };
//   const mockQuote = 'A Very Insightful Quote.';
//
//   t.deepEqual(saga.next().value, take(GET_QUOTE),
//     'listens for GET_QUOTE action.');
//
//   t.deepEqual(saga.next().value, select(createDemoSelector),
//     'grabs the current state.');
//
//   t.deepEqual(saga.next(state).value, put(updateTitle('You dispatched an action!')),
//     'updates title.');
//
//   t.deepEqual(saga.next().value, put(receiveQuote('Fetching Quote...')),
//     'quote message updates with fetching message.');
//
//   t.deepEqual(saga.next().value, call(fetchQuote),
//     'calls fetchQuote api.');
//
//   t.deepEqual(saga.next(mockQuote).value, call(delay, 1000),
//     'simulates long load time by calling delay.');
//
//   t.deepEqual(saga.next().value, put(receiveQuote(mockQuote)),
//     'updates quote in state with quote received from api.');
//
//   t.deepEqual(saga.next().value, take(GET_QUOTE),
//     'loops back to listening for GET_QUOTE action.');
// });
//
// test('(Saga) watchGetQuote: quote already received.', t => {
//   const saga = watchGetQuote();
//   const state = {
//     title: 'You dispatched an action!',
//     quote: 'Insightful quote of the day',
//   };
//
//   t.deepEqual(saga.next().value, take(GET_QUOTE),
//     'listens for GET_QUOTE action.');
//
//   t.deepEqual(saga.next().value, select(createDemoSelector),
//     'grabs the current state.');
//
//   t.deepEqual(saga.next(state).value, put(updateTitle('You already have a quote.')),
//     'grabs the current state.');
//
//   t.deepEqual(saga.next().value, take(GET_QUOTE),
//     'loops back to listening for GET_QUOTE action.');
// });
