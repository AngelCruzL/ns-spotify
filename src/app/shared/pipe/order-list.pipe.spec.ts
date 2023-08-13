import { OrderListPipe } from './order-list.pipe';

import * as mockRawData from '../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('should test the input and output of the pipe', () => {
    const pipe = new OrderListPipe();
    const { data }: any = (mockRawData as any).default;

    const result: TrackModel[] = pipe.transform(data);

    expect(result).toEqual(data);
  });

  it('should test if the track list is ordered by name asc', () => {
    const pipe = new OrderListPipe();
    const { data }: any = (mockRawData as any).default;
    const firstValue = data.find((i: any) => i._id === 7);
    const lastValue = data.find((i: any) => i._id === 6);

    const result: TrackModel[] = pipe.transform(data, 'name', 'asc');
    const firstResult = result[0];
    const lastResult = result[result.length - 1];

    expect(firstResult).toEqual(firstValue);
    expect(lastResult).toEqual(lastValue);
  });

  it('should test if the track list is ordered by name desc', () => {
    const pipe = new OrderListPipe();
    const { data }: any = (mockRawData as any).default;
    const firstValue = data.find((i: any) => i._id === 7);
    const lastValue = data.find((i: any) => i._id === 6);

    const result: TrackModel[] = pipe.transform(data, 'name', 'desc');
    const firstResult = result[0];
    const lastResult = result[result.length - 1];

    expect(firstResult).toEqual(lastValue);
    expect(lastResult).toEqual(firstValue);
  });
});
