import { MutableRefObject } from 'react';

export const scrollEffect = (targetRef: MutableRefObject<HTMLDivElement>) => {
	targetRef.current.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
};
