import { format, subDays} from "date-fns";

export const getDate = (sub: number = 0) => {
    const dateDayAge = subDays(new Date(), sub)

    return format(dateDayAge, "dd/MM/yyyy")

}