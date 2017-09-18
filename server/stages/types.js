// @flow

import type { DetailedServiceRequest } from '../services/Open311';

export type UpdatedCaseNotificationRecord = {|
  id: string,
  replayId: ?number,
|};

export type HydratedCaseRecord = {|
  case: DetailedServiceRequest,
  replayId: ?number,
|};
