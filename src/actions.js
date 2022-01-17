export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const res = () => {
    return {type: 'RES', value: Math.floor(Math.random() * 10)};
};