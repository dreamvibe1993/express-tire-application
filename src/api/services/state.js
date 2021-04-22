import axios from 'axios';
import { mapPickPoints } from '../mappers/pickpoints';

export async function loadPickPointsData() {
    try {
        const response = await axios.get(
            "https://express-shina.ru/vacancy/geo-state"
        );
        if (response.status === 200) {
            return mapPickPoints(response.data.pickPoints);
        }
    } catch (error) {
        console.error(error);
    }
}

