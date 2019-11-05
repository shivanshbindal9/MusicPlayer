let nextVideoId=0

export const addVideo=url => ({
    type: 'ADD_VIDEO',
    id: nextVideoId++,
    url
})

export const deleteVideo=id => ({
    type: 'DELETE_VIDEO',
    id
})

export const toggleVideo=id => ({
    type: 'TOGGLE_VIDEO',
    id
})