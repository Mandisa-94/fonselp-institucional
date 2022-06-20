import { rest } from 'msw';
import { token } from './token';

const BASE_URL = process.env.REACT_APP_API_URL;

const url = (string, withApi = true) =>
	`${BASE_URL}${withApi ? 'api/' : ''}${string}`;

const byPass = mock => (req, res, ctx) => {
	return res(ctx.delay(100), ctx.json(mock));
};

export const handlers = [
	rest.post(url('oauth/token', false), byPass(token)),
	rest.post(url('resgiterEntity'), byPass({ message: 'Esto es el worker' })),
];
