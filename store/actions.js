import axios from '@/services/axios'
export default {
    requestSendMessage: async (_, message) => {
        const response = await axios.post('https://dev.incosplay.top/contact', message)
        return response
    },
}