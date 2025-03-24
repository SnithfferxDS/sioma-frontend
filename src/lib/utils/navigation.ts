export function isCurrentPath(itemPath: string | null, currentPath: string): boolean {
	// Handle null path
	if (itemPath === null) {
		return false;
	}
	// Handle root path
	if (itemPath === '/' && currentPath === '/') {
		return true;
	}

	// Handle other paths
	if (itemPath == currentPath) {
		return true; //currentPath.startsWith(itemPath);
	}

	return false;
}
