/**
 * data be an object containing two arrays, x and y, where each data point in x relates to a datapoint in y. 
 */
export const _sum = ((x) => {
    return x.length === 1 ? x : x.reduce((a, b) => a + b, 0);
});

export const _square = ((x) => {
    return x.length === 1 ? x*x : x.map((n) => Math.pow(n,2));
});

export const _mean = ((x) => {
   return x.length === 1 ? x : _sum(x)/x.length;
});

export const _var = ((x) => {
    return x.length === 1 ? x : _sum(x - _mean(x))/x.length;
});

export const _linearRegression = ((data) => {
    return _getYIntercept(data) + _getSlope(data) * data.x;
})

export const _getSlope = ((data) => {
    return (data.length * _sum(data.x * data.y) - _sum(data.x)* _sum(data.y))/
    data.length * _sum(_square(data.x)) - _square(_sum(x));
});

export const _getYIntercept = ((data) => {
    return _sum(data.y) - _getSlope(_sum(data.x))/ data.length;
});