class Resource {
	constructor(resourceID, isCritical = false, resourceData = []) {
		this.resourceID = resourceID;
		this.isCritical = isCritical;
		this.data = resourceData;

		this.state = RESOURCE_STATE_INITIALIZED;
		this.lastAccessedTimestamp = 0;
	}
	touch() {
		const now = Date.now();
		DEBUG(
			format(
				"Updated lastAccessedTimestamp for resource %s from %s to %s",
				this.resourceID,
				this.lastAccessedTimestamp,
				now
			)
		);
		this.lastAccessedTimestamp = now;
	}
	isReady() {
		return this.state === RESOURCE_STATE_READY;
	}
}
