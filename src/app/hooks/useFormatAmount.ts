export const useFormatAmount = () => {
    return (amount: number) => `€ ${new Intl.NumberFormat().format(amount)}`
}