/**
 * Maps data from the db and assigns an ID to each.
 * @param {object[]} itemObjectArray Array of pickpoint-info objects to map.
 * @returns Mapped array of objects with IDs.
 */
export function mapPickPoints(itemObjectArray) {
    return itemObjectArray.map((item, index) => {
        return {
            address: item.address,
            budgets: item.budgets,
            coordinates: {
                latitude: item.latitude,
                longitude: item.longitude,
            },
            id: Date.now() + index,
        }
    })
}