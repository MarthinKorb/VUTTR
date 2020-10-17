import React from 'react';

import { render, fireEvent, act, wait } from '@testing-library/react';
import AxiosMock from 'axios-mock-adapter';
import api from '../../services/api';

import Dashboard from '../../pages/Dashboard';

const apiMock = new AxiosMock(api);

describe('Dashboard', () => {
  it('should be able to list all the tools from your api', async () => {
    apiMock.onGet('tools').reply(200, [
      {
        id: 2,
        title: 'json-server',
        link: 'https://github.com/typicode/json-server',
        description:
          'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.',
        tags: ['api', 'json', 'schema', 'node', 'github', 'rest'],
        available: true,
      },
    ]);
  });
});
