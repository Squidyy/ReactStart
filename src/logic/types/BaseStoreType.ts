import { RemoteStatus } from "./RemoteStatus";

export class BaseStoreType {
  public Status: RemoteStatus;

  constructor() {
    this.Status = RemoteStatus.NotLoaded;
  }
}
