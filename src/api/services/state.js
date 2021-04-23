import axios from 'axios';
import { mapPickPoints } from '../mappers/pickpoints';

/**
 * API to connect to db.
 * @returns Mapped array of objects with pickpoints info only.
 */
export async function loadPickPointsData() {
    const response = await axios.get(
        "https://express-shina.ru/vacancy/geo-state"
    );
    if (response.status === 200) {
        return mapPickPoints(response.data.pickPoints);
    }
}

