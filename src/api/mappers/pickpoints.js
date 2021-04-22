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