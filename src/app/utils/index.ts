import { format, subDays } from "date-fns"

export const getDate = (sub: number = 0) => {
 const dateXdaysago = subDays(new Date(), sub);

 return format(dateXdaysago,'dd/MM/yyyy')

} 