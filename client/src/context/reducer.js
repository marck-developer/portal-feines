import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions"

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Si-us-plau omple tots els camps!',
            }
        }
        if (action.type === CLEAR_ALERT) {
            return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: '',
            }
        }
    throw new Error(`cap acció d'aquest tipus : ${action.type}`)
    }

export default reducer