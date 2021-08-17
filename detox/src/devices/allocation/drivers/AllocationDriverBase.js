class AllocationDriverBase {
  constructor(eventEmmiter) {
    this._eventEmitter = eventEmmiter;
  }

  /**
   * @param deviceQuery { Object | String }
   * @return {Promise<DeviceCookie>}
   */
  async allocate(deviceQuery) {}

  /**
   * @param cookie { DeviceCookie }
   * @param options { {shutdown: boolean} }
   * @return {Promise<void>}
   */
  async free(cookie, options) {}

  // TODO ASDASD possibly relocate to device/instance launcher classes
  async _notifyBootEvent(deviceId, type, coldBoot) {
    return this._eventEmitter.emit('bootDevice', { deviceId, type, coldBoot });
  }
}

module.exports = AllocationDriverBase;