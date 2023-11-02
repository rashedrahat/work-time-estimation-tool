export const calculateTime = (storyPoint, walkthroughTime, codingTime, miscTime) => {
    const codingTimeValue = parseInt(codingTime, 10) || 0;
    const sumTotal = parseInt(walkthroughTime, 10) + codingTimeValue + parseInt(miscTime, 10);
    const finalTotal = sumTotal + (sumTotal * (parseInt(storyPoint, 10) * 10 / 100));
    const output = finalTotal + (finalTotal * 0.15);
    return Math.round(output);
};
