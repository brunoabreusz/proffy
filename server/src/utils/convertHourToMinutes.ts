export default function convertHourToMinutes(time: string) {

    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinites = (hour * 60) + minutes;
    
    return timeInMinites;
}