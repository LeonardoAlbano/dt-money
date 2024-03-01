export const dataFormatter = new Intl.DateTimeFormat('pr-BR')

export const priceFormatter = new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL',
})