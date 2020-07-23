export default {
  timeSeries: ()=> Promise.resolve({
     timeStart: Date.now() - 10000,
     interval: 500,
     cpu: Array(20).fill(0).map(()=> Math.random()),
     memory: Array(20).fill(0).map(()=> Math.random()),
  })
};
