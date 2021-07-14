## API Report File for "@backstage/integration-react"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiRef } from '@backstage/core-plugin-api';
import { Config } from '@backstage/config';
import { ScmIntegrationRegistry } from '@backstage/integration';

// @public (undocumented)
export const ScmIntegrationIcon: ({
  type,
}: {
  type?: string | undefined;
}) => JSX.Element;

// @public (undocumented)
export class ScmIntegrationsApi {
  // (undocumented)
  static fromConfig(config: Config): ScmIntegrationRegistry;
}

// @public (undocumented)
export const scmIntegrationsApiRef: ApiRef<ScmIntegrationRegistry>;

// (No @packageDocumentation comment for this package)
```