import moment from 'moment'
export default function FormatDate({ date }) {
    const rs = moment(date).format('DD/MM/YYYY - HH:mm')
    if (rs === 'Invalid date') return <span>Không có</span>
    return (
        <span>{rs}</span>
    )
}