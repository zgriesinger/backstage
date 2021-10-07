/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ResponseErrorPanel } from '@backstage/core-components';
import { useApi } from '@backstage/core-plugin-api';
import { useEntity } from '@backstage/plugin-catalog-react';
import React, { useState } from 'react';
import { useAsync } from 'react-use';
import { githubProfileApiRef } from '../../api/types';

export const GithubUserEntityCard = () => {
  const { entity } = useEntity();
  const githubProfileApi = useApi(githubProfileApiRef);

  const { value, loading, error } = useAsync(async () => {
    return await githubProfileApi.getProfile({ entity });
  });

  if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  return <div>User: {value?.profile.user}</div>;
};