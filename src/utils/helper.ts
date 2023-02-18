import { StockRecord } from './types';

// @ts-ignore
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const createData = (data: StockRecord, cb?: () => void) =>
  fetch('/api/record', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(() => {
    cb ? cb() : null;
  });

export const updateData = (data: StockRecord, cb?: () => void) =>
  fetch('/api/record', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(() => {
    cb ? cb() : null;
  });

export const deleteData = (data: StockRecord, cb?: () => void) =>
  fetch('/api/record', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(() => {
    cb ? cb() : null;
  });
