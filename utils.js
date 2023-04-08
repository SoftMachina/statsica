
export const _sum = ((x) => {
    return x.length === 1 ? x : x.reduce((a, b) => a + b, 0);
});

export const _mean = ((x) => {
   return x.length === 1 ? x : _sum(x)/x.length;
});

export const _var = ((x) => {
    return x.length === 1 ? x : _sum(x - _mean(x))/x.length;
});