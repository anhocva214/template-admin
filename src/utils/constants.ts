export const SERVER_ERROR = "Hệ thống đang bảo trì"

/**
 * Colors Type
 * - Primary: blue-500
 * - Success: green-500
 * - Warning: amber-500
 * - Danger: red-500
 */
export type ColorsType = 'primary' | 'success' | 'warning' | 'danger'
export function getColor(type: ColorsType){
    if (type == 'danger') return 'red'
    else if (type == 'success') return 'green'
    else if (type == 'warning') return 'amber'
    else return 'blue'
}
