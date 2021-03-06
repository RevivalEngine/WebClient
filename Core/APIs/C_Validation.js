const C_Validation = {
	addonMetadata: {
		supportedFields: {
			// Mandatory fields
			authors: true,
			version: true,
			interfaceVersion: true,
			title: true,
			description: true,
			files: true,
			// Optional fields
			repositoryURL: false,
			releaseJSON: false,
		},
	},
	validateAddonMetadata(contentsJSON) {
		// Required fields must exist
		const supportedFields = this.addonMetadata.supportedFields;
		for (const fieldName in supportedFields) {
			const isRequiredField = supportedFields[fieldName];
			if (isRequiredField && !contentsJSON[fieldName]) return false;
		}

		// All fields must be supported
		for (const fieldName in contentsJSON) {
			const isFieldSupported = supportedFields[fieldName] !== undefined;
			if (!isFieldSupported) return false;
		}

		return true;
	},
};
